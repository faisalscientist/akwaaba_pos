import { ChangeEvent, HTMLAttributes } from "react"

export type InputProps = {
  value?: string
  type?: string
  placeholder?: string
  className?: string
  handleChange?: (event: ChangeEvent) => void
  props?: HTMLAttributes
}

export type CheckboxProps = {
  value?: string
  label?: string
  className?: string
  props?: HTMLAttributes
}
