import { useState, useEffect } from 'react'
import * as Tone from 'tone'
import styled from 'styled-components'
import PadButton from './PadButton'
import SAMPLES from './samples.json'
import { H5 } from '@core'

const SamplerPad = () => {
  const [packs, setPacks] = useState([])
  const [inited, setInited] = useState(false)

  useEffect(() => {
    Tone.Transport.loop = true
    Tone.Transport.loopStart = 0
    Tone.Transport.bpm.value = 102
    Tone.Transport.loopEnd = '4m'

    setPacks(
      SAMPLES.map((pack) => {
        pack.sounds = pack.sounds.map((sound) => {
          sound.state = 'deactive'
          sound.player = new Tone.Player(sound.url).toDestination()
          sound.player.loop = true
          sound.player.loopStart = 0
          return sound
        })
        pack.activeSound = null
        return pack
      })
    )

    return () => {
      console.log('DISCONNECTING')
      // Turn off all sounds
      packs.forEach((pack) => {
        pack.sounds.forEach((sound) => {
          sound.player.unsync().stop()
        })
      })
      setPacks(null)
      // Turn of transport
      Tone.Transport.stop()
    }
  }, [])

  const handleTransportChange = () => {
    // check is any sound in all packs are active or pending
    const isAnyPlay = packs.reduce((acc, pack) => {
      return (
        acc ||
        pack.sounds.reduce(
          (acc, song) =>
            acc || ['active', 'pending-on', 'pending-off'].includes(song.state),
          false
        )
      )
    }, false)

    // Find the longest duration among all pending songs
    let longest_duration = packs.reduce((acc, pack) => {
      const duration = pack.sounds.reduce((acc, song) => {
        if (['active', 'pending'].includes(song.state)) {
          const duration = song.duration.replace('m', '')
          return duration > acc ? duration : acc
        }
        return acc
      }, 0)
      return acc > duration ? acc : duration
    }, 0)
    longest_duration = longest_duration ? longest_duration + 'm' : '1m'
    // Set the longest duration as Transport loop end time
    Tone.Transport.loopEnd = longest_duration

    if (isAnyPlay && Tone.Transport.state !== 'started') {
      // start Transport if Transport is stopped and something is playing
      Tone.Transport.start()
    } else if (!isAnyPlay && Tone.Transport.state === 'started') {
      // stop Transport if nothing is playing
      Tone.Transport.stop()
    }
  }

  const handleClick = (packIndex, soundIndex) => {
    // Start Tone on user first click
    if (!inited) {
      Tone.start()
      setInited(true)
    }

    const pack = packs[packIndex]
    const sound = pack.sounds[soundIndex]
    const isPackPending = pack.sounds.reduce(
      (acc, sound) => acc || sound.state === 'pending',
      false
    )

    // if pack pending return
    if (isPackPending) return

    // change to pending state button in pack
    updateSound(packIndex, soundIndex, 'pending-on')
    if (pack.activeSound !== null)
      updateSound(packIndex, pack.activeSound, 'pending-off')

    Tone.Transport.scheduleOnce(() => {
      const last_player_index = pack.activeSound
      // Activate new sound
      if (pack.activeSound !== soundIndex) {
        const current_player = pack.sounds[soundIndex].player
        updateSound(packIndex, soundIndex, 'active')
        current_player.sync(sound.duration).start()
      }
      // Deactivate old sound
      if (last_player_index !== null) {
        const last_player = pack.sounds[last_player_index].player
        updateSound(packIndex, last_player_index, 'deactive')
        last_player.unsync().stop()
      }
      handleTransportChange()
    }, '0:0:0')
    handleTransportChange()
  }

  const updateSound = (pack, sound, state) => {
    let newPacks = [...packs]
    newPacks[pack].sounds[sound] = { ...newPacks[pack].sounds[sound], state }

    if (state === 'active') newPacks[pack].activeSound = sound
    if (state === 'deactive' && sound === newPacks[pack].activeSound)
      newPacks[pack].activeSound = null
    setPacks(newPacks)
  }

  return (
    <PadWrapper>
      {packs.map((pack, i) => (
        <PadColumn key={pack.name}>
          <H5 align="center" color="white" font="monospace">
            {pack.name}
          </H5>
          {pack.sounds.map((sound, j) => (
            <PadButton
              key={`${i}${j}`}
              state={sound.state}
              // playerState={sound.player?.state}
              name={`${pack.name} ${j + 1}`}
              onClick={() => handleClick(i, j)}
            />
          ))}
        </PadColumn>
      ))}
    </PadWrapper>
  )
}

export default SamplerPad

const PadWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 2px;
`
const PadColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1;
`
