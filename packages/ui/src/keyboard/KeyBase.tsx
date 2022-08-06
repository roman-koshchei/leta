import { FC } from "react"

interface KeyBaseProps {
  w: number // tailwind w
  color: string // tailwind color
  cursor?: string
  [x: string]: any;
}

const KeyBase: FC<KeyBaseProps> = ({ children, w, color, cursor = "default", ...rest }) => {
  return (
    <div className={`flex-auto rounded-md p-0.5 md:p-1 w-${w} bg-${color} cursor-${cursor}`} {...rest}>
      <div className="flex h-full justify-center items-center">
        {children}
      </div>
    </div>
  )
}

export { KeyBase }