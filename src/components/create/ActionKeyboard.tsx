import { type } from 'os'
import { Dispatch, SetStateAction, useState } from 'react'
import { KeyFinger } from '../../models/key'
import { Key } from '../keyboard/keys/Key'
import { Row } from '../keyboard/Row'
import { ActionKey } from './ActionKey'
import { SystemKey } from './SystemKey'

type Position = { row: number, col: number }

type State<T> = {
  val: T,
  set: Dispatch<SetStateAction<T>>
}

type ActionKeyboardProps = {
  keys: State<KeyFinger[][]>
  selected: State<Position>
}



const ActionKeyboard = ({ keys, selected }: ActionKeyboardProps) => {

  const [dragged, setDragged] = useState<Position>({ row: -1, col: -1 })

  const drop = (row: number, col: number) => {
    // * charecter that will newer
    let newKeys = Array.from(keys.val);
    const c = newKeys[row][col]
    const d = newKeys[dragged.row][dragged.col]

    newKeys[row][col] = {
      key: d.key,
      finger: c.finger
    }
    newKeys[dragged.row][dragged.col] = {
      key: c.key,
      finger: d.finger
    }

    keys.set(newKeys)
  }

  const ActionRow = (row: number, className?: (col: number) => string) => {
    return keys.val[row].map((keyFinger, col) =>
      <ActionKey onDrag={() => setDragged({ row, col })} onDrop={() => drop(row, col)}
        key={keyFinger.key} kf={keyFinger} onClick={() => selected.set({ row, col })}
        className={className ? className(col) : undefined} />)
  }

  return (
    <div className='aspect-[282/52] select-none'>
      <div className='flex flex-col h-full gap-1 md:gap-2 text-base text-neutral-900'>

        {/* <Row className='gap-1 md:gap-2'>
              {keys[0].map((key, col) =>
                <DragKey onDrag={() => setDragged({ row: 0, col })} onDrop={() => drop(0, col)}>
                  {key.primary}
                </DragKey>
              )}
              <Key className='bg-neutral-400 w-[8.75rem]'>Backspace</Key>
            </Row> */}

        <Row className='gap-1 md:gap-2'>
          <SystemKey className='w-[6.75rem]'>Tab</SystemKey>
          {ActionRow(0, (col) => col == keys.val[0].length - 1 ? 'w-[6.75rem]' : 'w-16')}
          {/* {keys[0].map((keyFinger, col) =>
            <DragKey onDrag={() => setDragged({ row: 0, col })} onDrop={() => drop(0, col)}
              className={col == keys[0].length - 1 ? 'w-[6.75rem]' : 'w-16'} key={keyFinger.key}
              kf={keyFinger} onClick={() => setSelected({ row: 0, col })} />
          )} */}
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