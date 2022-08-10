import { FC } from "react"

const KeyboardBase: FC = ({ children }) => {
  return (
    <div className={`aspect-[1200/300] text-sm md:text-base`}>
      <div className="flex flex-col gap-1 md:gap-2 h-full">
        {children}
      </div>
    </div>
  )
}

export { KeyboardBase }