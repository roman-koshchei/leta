import { ChangeEventHandler, HTMLInputTypeAttribute, MouseEventHandler } from 'react'

interface InputProps {
  type: HTMLInputTypeAttribute
  value?: string | number | readonly string[]
  placeholder?: string

  onChange?: ChangeEventHandler
  onClick?: MouseEventHandler
}

const Input = ({ type, value, placeholder, onChange, onClick }: InputProps) => {
  return (
    <input type={type} value={value} onChange={onChange} onClick={onClick} placeholder={placeholder}
      className='w-full text-lg md:text-xl bg-neutral-100 dark:bg-neutral-800 outline-0 rounded-md py-5 px-7'
    />
  )
}

export { Input }