import { MouseEventHandler, DragEventHandler } from 'react'
import { FingerColors } from '../../models/finger'
import { KeyFinger } from '../../models/key'

type ActionKeyProps = {
  w?: string                 // width style
  keyFinger: KeyFinger
  onDrag: DragEventHandler
  onDrop: DragEventHandler
  onClick?: MouseEventHandler
}

const ActionKey = ({ w = 'w-16', keyFinger, onDrag, onDrop, onClick }: ActionKeyProps) => (
  <button onDrag={onDrag} onDrop={onDrop} onClick={onClick} onDragOver={(e) => e.preventDefault()}
    className={`flex-auto rounded ${FingerColors.get(keyFinger.finger)} ${w}`} draggable>
    {keyFinger.key}
  </button>
)




export { ActionKey }