import { MouseEventHandler, DragEventHandler } from 'react'
import { FingerColors } from '../../models/finger'
import { KeyFinger } from '../../models/key'

type ActionKeyProps = {
  className?: string
  kf: KeyFinger
  onDrag: DragEventHandler
  onDrop: DragEventHandler
  onClick?: MouseEventHandler
}

const ActionKey = ({ className = 'w-16', kf, onDrag, onDrop, onClick }: ActionKeyProps) => {
  const bg = FingerColors.get(kf.finger) ?? '';
  return (
    <div onDrag={onDrag} onDrop={onDrop} onClick={onClick} onDragOver={(e) => e.preventDefault()}
      className={`flex-auto rounded ${bg} ${className} flex items-center justify-center`} draggable>
      {kf.key}
    </div>
  )
}

export { ActionKey }