import { KeyInfo } from "models"
import { DragEventHandler } from "react"

interface KeyProps {
  keyInfo: KeyInfo
  onDrop: DragEventHandler
  onDrag: DragEventHandler
}

const Key = ({ keyInfo, onDrag, onDrop }: KeyProps) => {

  const dragOver = (e: any) => e.preventDefault()

  return (
    <div draggable={true}
      className="m-1"
      onDragOver={dragOver}
      onDrag={onDrag}
      onDrop={onDrop}
    >
      {keyInfo.shift}
      {keyInfo.primary}
    </div>
  )
}

export { Key }