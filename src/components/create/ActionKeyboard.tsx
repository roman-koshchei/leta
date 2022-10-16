import { useState } from 'react'
import { KeyFinger, State } from '../../models'
import { Row } from '../keyboard/Row'
import { ActionKey } from './ActionKey'
import { SystemKey } from './SystemKey'

type Position = { row: number, col: number }


type ActionKeyboardProps = {
  keys: State<KeyFinger[][]>
  selected: State<Position>
}

const ActionKeyboard = ({ keys, selected }: ActionKeyboardProps) => {
  const [dragged, setDragged] = useState<Position>({ row: -1, col: -1 })

  const drop = (row: number, col: number) => {
    if (dragged.row == row && dragged.col == col) return

    let newKeys = Array.from(keys.val);
    const c = newKeys[row][col]
    const d = newKeys[dragged.row][dragged.col]

    newKeys[row][col] = { key: d.key, finger: c.finger }
    newKeys[dragged.row][dragged.col] = { key: c.key, finger: d.finger }
    keys.set(newKeys)
  }

  const ActionRow = (row: number, w?: (col: number) => string) => {
    return keys.val[row].map((keyFinger, col) => {
      const click = () => selected.set(
        selected.val.row == row && selected.val.col == col
          ? { row: -1, col: -1 }
          : { row, col }
      )



      return <ActionKey onDrag={() => setDragged({ row, col })} onDrop={() => drop(row, col)}
        key={keyFinger.key} keyFinger={keyFinger} onClick={click}
        w={`${w ? w(col) : 'w-16'} ${selected.val.row == row && selected.val.col == col ? 'border-2 border-neutral-900 dark:border-white' : ''}`} />
    })
  }

  return (
    <div className='aspect-[282/52] select-none'>
      <div className='flex flex-col h-full gap-1 md:gap-2 text-neutral-900 md:text-xl'>

        <Row className='gap-1 md:gap-2'>
          <SystemKey className='w-[6.75rem]'>Tab</SystemKey>
          {ActionRow(0, (col) => col == keys.val[0].length - 1 ? 'w-[6.75rem]' : 'w-16')}
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