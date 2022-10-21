import { atom, useAtom, PrimitiveAtom } from 'jotai'
import { useState } from 'react'
import { KeyFinger, Position, QWERTY, State } from '../../models'
import { Row } from './Row'
import { SystemKey, ActionKey } from './keys'
import { keysAtom } from '../../utils'


type ActionKeyboardProps = {
  selected: State<Position>
}

const atomicKeysAtom = atom(QWERTY
  .map(row => row
    .map(kf => atom<KeyFinger>(kf))
  )
)

const draggedAtom = atom<PrimitiveAtom<KeyFinger>>(atom(QWERTY[0][0]))

const AtomicActionKeyboard = ({ selected }: ActionKeyboardProps) => {
  const [keys] = useAtom(atomicKeysAtom)
  // const [draggedPosition, setDraggedPosition] = useState<Position>({ row: 0, col: 0 })
  const [draggedA, setDraggedA] = useAtom(draggedAtom)


  const AtomicActionRow = (row: number, w?: (col: number) => string) => keys[row]
    .map((keyAtom, col) => {
      const [current, setCurrent] = useAtom(keyAtom)
      // const [dragged] = useAtom(keys[draggedPosition.row][draggedPosition.col])
      const [dragged, setD] = useAtom(draggedA)

      const isSelected = selected.val.row == row && selected.val.col == col
      const click = () => selected.set(isSelected ? { row: 0, col: 0 } : { row, col })

      // theoreticaly faster than coping of keys
      // rerender only 2 keys
      const drop = () => {
        if (draggedA == undefined || dragged.key == current.key) return
        const currentKey = current.key
        setCurrent({ key: dragged.key, finger: current.finger })
        // setDragged({ key: currentKey, finger: dragged.finger })
        setD({ key: currentKey, finger: dragged.finger })
      }

      const drag = () => {
        setDraggedA(keyAtom)
        // setDraggedPosition({ row, col })
      }

      return <ActionKey
        onDrag={drag} onDrop={drop} keyFinger={current} key={`action-${keyAtom}`} onClick={click}
        w={`${w ? w(col) : 'w-16'} ${isSelected ? 'border-2 border-neutral-900 dark:border-white' : ''}`} />
    })


  return (
    <div className='aspect-[282/52] select-none'>
      <div className='flex flex-col h-full gap-1 md:gap-2 text-neutral-900 md:text-xl'>

        <Row className='gap-1 md:gap-2'>
          <SystemKey className='w-[6.75rem]'>Tab</SystemKey>
          {AtomicActionRow(0, (col) => col == keys[0].length - 1 ? 'w-[6.75rem]' : 'w-16')}
        </Row>

        <Row className='gap-1 md:gap-2'>
          <SystemKey className='w-[7.75rem]'>Caps</SystemKey>
          {AtomicActionRow(1)}
          <SystemKey className='w-[10.5rem]'>Enter</SystemKey>
        </Row>

        <Row className='gap-1 md:gap-2'>
          <SystemKey className='w-[10rem]'>Shift</SystemKey>
          {AtomicActionRow(2)}
          <SystemKey className='w-[13rem]'>Shift</SystemKey>
        </Row>

      </div>
    </div>
  )
}

export { AtomicActionKeyboard }