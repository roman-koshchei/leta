import { useAtom } from 'jotai'
import { useState } from 'react'
import { KeyFinger, State } from '../../models'
import { Row } from './Row'
import { SystemKey, ActionKey } from './keys'
import { keysAtom } from '../../utils'

type Position = { row: number, col: number }

type ActionKeyboardProps = {
  selected: State<Position>
}

const ActionKeyboard = ({ selected }: ActionKeyboardProps) => {
  const [keys, setKeys] = useAtom(keysAtom)
  const [dragged, setDragged] = useState<Position>({ row: -1, col: -1 })

  const drop = (row: number, col: number) => {
    if (dragged.row == row && dragged.col == col) return

    let newKeys = Array.from(keys);

    const currentKey = newKeys[row][col].key
    newKeys[row][col].key = newKeys[dragged.row][dragged.col].key
    newKeys[dragged.row][dragged.col].key = currentKey

    setKeys(newKeys)
  }

  const ActionRow = (row: number, w?: (col: number) => string) => keys[row]
    .map((keyFinger, col) => {
      const isSelected = selected.val.row == row && selected.val.col == col

      const click = () => selected.set(isSelected ? { row: -1, col: -1 } : { row, col })

      return <ActionKey onDrag={() => setDragged({ row, col })} onDrop={() => drop(row, col)}
        key={`action-key-${keyFinger.key}`} keyFinger={keyFinger} onClick={click}
        w={`${w ? w(col) : 'w-16'} ${isSelected
          ? 'border-2 border-neutral-900 dark:border-white' : ''}`} />
    })


  return (
    <div className='aspect-[282/52] select-none'>
      <div className='flex flex-col h-full gap-1 md:gap-2 text-neutral-900 md:text-xl'>

        <Row className='gap-1 md:gap-2'>
          <SystemKey className='w-[6.75rem]'>Tab</SystemKey>
          {ActionRow(0, (col) => col == keys[0].length - 1 ? 'w-[6.75rem]' : 'w-16')}
        </Row>

        <Row className='gap-1 md:gap-2'>
          <SystemKey className='w-[7.75rem]'>Caps</SystemKey>
          {ActionRow(1)}
          <SystemKey className='w-[10.5rem]'>Enter</SystemKey>
        </Row>

        <Row className='gap-1 md:gap-2'>
          <SystemKey className='w-[10rem]'>Shift</SystemKey>
          {ActionRow(2)}
          <SystemKey className='w-[13rem]'>Shift</SystemKey>
        </Row>

      </div>
    </div>
  )
}

export { ActionKeyboard }