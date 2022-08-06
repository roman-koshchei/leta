import { KeyInfo } from "models"
import { DragEventHandler, FC } from "react"
import { KeyBase } from "./KeyBase"

interface KeyProps {
  keyInfo: KeyInfo
  w: number // tailwind width numbler as 'w-14'

  [x: string]: any;
}

const FullInfo = ({ keyInfo }: { keyInfo: KeyInfo }) => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-[45%] top-[20%] leading-none text-base md:text-lg">{keyInfo.primary}</div>
      <div className=" absolute left-0 top-0 text-xs md:text-sm leading-none">{keyInfo.shift}</div>
    </div >
  )
}

const Key = ({ keyInfo, w, ...rest }: KeyProps) => {


  return (
    <KeyBase w={w} color="green-300" {...rest}>
      {
        keyInfo.primary == keyInfo.shift.toLowerCase()
          ? <span>{keyInfo.shift}</span>
          : <FullInfo keyInfo={keyInfo} />
      }
    </KeyBase>
  )
}

export { Key }