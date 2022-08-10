import { ChangeEventHandler } from "react"

interface InputProps {
  val: string
  onChange: ChangeEventHandler
}

const Input = ({ val, onChange }: InputProps) => {
  return (
    <input
      className="bg-gray-100 border outline-none border-gray-100
      text-gray-900 text-sm rounded-md p-2"
      value={val} onChange={onChange}
    />
  )
}

export { Input }