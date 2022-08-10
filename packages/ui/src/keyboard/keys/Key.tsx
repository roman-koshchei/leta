import { Finger, FingerColors, KeyInfo } from "models"
import { DragEventHandler, FC, MouseEventHandler } from "react"
import { KeyBase } from "./KeyBase"

interface KeyProps {
  keyInfo: KeyInfo
  w: string // tailwind width numbler as 'w-14'

  onDrag?: DragEventHandler
  onDrop?: DragEventHandler
  onDragOver?: DragEventHandler
  onClick?: MouseEventHandler

  draggable?: boolean

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

const Key = ({ keyInfo, w, onClick, onDrag, onDragOver, onDrop, draggable, ...rest }: KeyProps) => {

  const bgColor = keyInfo.active ? FingerColors.get(keyInfo.finger) : "bg-slate-300"

  return (
    <KeyBase w={w} bg={bgColor ?? ""}
      onDrag={onDrag} onDrop={onDrop} onDragOver={onDragOver}
      onClick={onClick} draggable={draggable}
      {...rest}>
      {
        keyInfo.primary == keyInfo.shift.toLowerCase()
          ? keyInfo.shift
          : <FullInfo keyInfo={keyInfo} />
      }
    </KeyBase>
  )
}

export { Key, FullInfo }