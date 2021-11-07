import { ChangeEvent } from "react"

export type AuthHeaderProps = {
  title: string
}

export type KeyPadProps = {
  keypadTexts: Array<{ text: number | React.ReactElement; id: string }>
  handleOnClick: (text: string) => void
}

export type LoginState = {
  loading: boolean
  error: string
}

export type LoginAction = {
  type: string
  payload?: string | boolean
}

export type AdminLoginProps = {
  credentials: { password: string; email: string }
  handleSubmit: (event: FormEventHandler<HTMLFormElement>) => void
  handleChange: (event: ChangeEvent) => void
}

export type AdminResetPasswordProps = {
  password: { newPassword: string; newPasswordConfirmation: string }
  handleSubmit: (event: FormEventHandler<HTMLFormElement>) => void
  handleChange: (event: ChangeEvent) => void
}

export type AdminForgotPasswordProps = {
  email: string
  handleSubmit: (event: FormEventHandler<HTMLFormElement>) => void
  handleChange: (event: ChangeEvent) => void
}
