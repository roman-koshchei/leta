import { ChangeEventHandler} from 'react'

interface TextareaProps {
  value?: string 
  rows?: number
  placeholder?: string
  className?: string

  onChange?: ChangeEventHandler
}

const Textarea = ({ value, placeholder, className = 'py-5 px-7', onChange, rows }: TextareaProps) => {
  return (
    <textarea value={value} onChange={onChange}  placeholder={placeholder} rows={rows}
      className={`w-full text-md md:text-lg p-5 bg-neutral-100 dark:bg-neutral-800 outline-0 rounded-md ${className}`}
    ></textarea>
  )
}

export { Textarea }