import {
  Flex,
  Card,
  Input,
  Icon,
  Checkbox,
  Radio,
  Link,
  Caption,
  H5,
  Button,
  Select,
} from '../core'
import { useState } from 'react'

const Form = () => {
  return (
    <Flex gap="16px" fwrap flex="0 1 450px" justify="center">
      <LoginForm />
      <RegistrationForm />
    </Flex>
  )
}

export default Form

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const changePasswordVisibility = () => setShowPassword(!showPassword)
  return (
    <Card gap="16px" justify="flex-end" bordered rounded shadowed p="32px">
      <H5 align="center">Вхід в систему</H5>
      <Input placeholder="Логін" />
      <Input
        placeholder="Пароль"
        type={showPassword ? 'text' : 'password'}
        rightSlot={
          <Icon
            onClick={changePasswordVisibility}
            icon={showPassword ? 'eye' : 'eye-hidden'}
          />
        }
      />

      <Checkbox
        label={
          <Caption inline>
            Погоджуюсь на
            <Link color="primary">правила використання сервісу</Link> ?
          </Caption>
        }
      />

      <Button color="dark" outline>
        ВХІД
      </Button>
    </Card>
  )
}

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const changePasswordVisibility = () => setShowPassword(!showPassword)
  return (
    <Card rounded shadowed p="0">
      <img
        src="https://images.pexels.com/photos/3223390/pexels-photo-3223390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="illustration"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
        }}
      />
      <Card gap="8px">
        <H5 align="center">Реєстрація в системі</H5>
        <Input placeholder="Ім'я" variant="underline" />
        <Input placeholder="Прізвище" variant="underline" />
        <Radio options={['Чоловік', 'Жінка']} />
        <Select
          placeholder="Країна"
          options={['Україна', 'США', 'Бразилія']}
          variant="underline"
        />
        <Input placeholder="Пошта" variant="underline" />
        <Input
          placeholder="Пароль"
          type={showPassword ? 'text' : 'password'}
          variant="underline"
          rightSlot={
            <Icon
              onClick={changePasswordVisibility}
              icon={showPassword ? 'eye' : 'eye-hidden'}
            />
          }
        />

        <Checkbox label="Отримувати останні новини на пошту" />

        <Flex justify="flex-end">
          <Button color="primary" width="auto">
            Реєстрація
          </Button>
        </Flex>
      </Card>
    </Card>
  )
}
