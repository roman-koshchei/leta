import { FC } from "react"

interface KeyBaseProps {
  w: string // tailwind w
  bg: string // tailwind color
  cursor?: string
  [x: string]: any;
}

const KeyBase: FC<KeyBaseProps> = ({ children, w, bg, cursor = "cursor-default", ...rest }) => {
  return (
    <div className={`flex-auto rounded-md p-0.5 md:p-1 ${w} ${bg} ${cursor}`} {...rest}>
      <div className="flex h-full justify-center items-center select-none">
        {children}
      </div>
    </div>
  )
}

export { KeyBase }