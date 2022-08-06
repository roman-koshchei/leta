import { Key } from "./Key"

import { KeyInfo } from "models"
import { DragEventHandler, FC } from "react"

interface DragKeyProps {
  keyInfo: KeyInfo
  onDrop: DragEventHandler
  onDrag: DragEventHandler,
  w: number
}

const DragKey = ({ keyInfo, onDrag, onDrop, w }: DragKeyProps) => {
  const dragOver = (e: any) => e.preventDefault()

  return (
    <Key w={w} keyInfo={keyInfo}
      cursor="move"
      draggable={true}
      onDragOver={dragOver}
      onDrag={onDrag}
      onDrop={onDrop} />
  )
}

export { DragKey }