import { FC } from "react"

const Row: FC = ({ children }) => {
  return (
    <div className="flex flex-1 gap-1 md:gap-2">
      {children}
    </div>
  )
}

export { Row }