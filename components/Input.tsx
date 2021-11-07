import { InputProps } from "types/components"

const Input = ({
  value,
  type,
  placeholder,
  className,
  handleChange,
  props,
}: InputProps) => {
  return (
    <input
      onChange={handleChange}
      type={type}
      placeholder={placeholder}
      className={className}
      value={value}
      {...props}
    />
  )
}

export default Input
