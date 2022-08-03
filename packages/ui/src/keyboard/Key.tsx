import { DragEventHandler } from "react"

interface KeyProps {
  val: string;
  onDrop: DragEventHandler;
  onDrag: DragEventHandler;
}

const Key = ({ val, onDrop, onDrag }: KeyProps) => {

  const dragOver = (event: any) => event.preventDefault()

  return (
    <div className="aspect-[1/1] pointer-events-none"
      draggable={true} style={{ width: '50px', height: '50px', background: 'white', margin: '5px' }}
      onDrop={onDrop}
      onDrag={onDrag}
      onDragOver={dragOver}>
      {val}
    </div>
  )
}

export { Key }