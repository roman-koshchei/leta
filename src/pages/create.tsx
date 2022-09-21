import { DragEventHandler, ReactNode, useState } from 'react'
import { Center, Key, Row } from '../components'
import { FingerColors } from '../models/finger'
import { KeyInfo, QWERTY } from '../models/key'

type DragKeyProps = {
  className?: string
  k: KeyInfo
  onDrag: DragEventHandler
  onDrop: DragEventHandler
  children: ReactNode
}

const DragKey = ({ className = 'w-16', k, onDrag, onDrop, children }: DragKeyProps) => {
  const bg = FingerColors.get(k.finger) ?? '';
  return (
    <div className={`flex-auto rounded ${bg} ${className} flex items-center justify-center`}
      draggable onDrag={onDrag} onDrop={onDrop} onDragOver={(e) => e.preventDefault()}>
      {children}
    </div>
  )
}

const Create = () => {
  const [keys, setKeys] = useState<KeyInfo[][]>(QWERTY)
  const [dragged, setDragged] = useState<{ row: number, col: number }>({ row: -1, col: -1 })

  const drop = (row: number, col: number) => {
    const draggedKey = keys[dragged.row][dragged.col]

    let newKeys = Array.from(keys)

    newKeys[dragged.row][dragged.col] = {
      ...newKeys[dragged.row][dragged.col],
      primary: keys[row][col].primary,
      shift: keys[row][col].shift
    }

    newKeys[row][col] = {
      ...newKeys[row][col],
      primary: draggedKey.primary,
      shift: draggedKey.shift
    }

    setKeys(newKeys)
  }

  return (
    <Center className='text-2xl'>

      <div className=' w-full'>
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
              <Key className='bg-neutral-100 w-[6.75rem]'>Tab</Key>
              {keys[1].map((key, col) =>
                <DragKey onDrag={() => setDragged({ row: 1, col })} onDrop={() => drop(1, col)}
                  className={col == keys[1].length - 1 ? 'w-[6.75rem]' : 'w-16'} key={key.primary}
                  k={key}>
                  {key.primary}
                </DragKey>
              )}
              {/* <Key className='bg-neutral-400 w-[6.75rem]'></Key> */}
            </Row>


            <Row className='gap-1 md:gap-2'>
              <Key className='bg-neutral-100 w-[7.75rem]'>Caps</Key>
              {keys[2].map((key, col) =>
                <DragKey onDrag={() => setDragged({ row: 2, col })} onDrop={() => drop(2, col)} key={key.primary}
                  k={key}>
                  {key.primary}
                </DragKey>
              )}
              <Key className='bg-neutral-100 w-[10.5rem]'>Enter</Key>
            </Row>


            <Row className='gap-1 md:gap-2'>
              <Key className='bg-neutral-100 w-[10rem]'>Shift</Key>
              {keys[3].map((key, col) =>
                <DragKey onDrag={() => setDragged({ row: 3, col })} onDrop={() => drop(3, col)} key={key.primary}
                  k={key}>
                  {key.primary}
                </DragKey>
              )}
              <Key className='bg-neutral-100 w-[13rem]'>Shift</Key>
            </Row>

          </div>
        </div>
      </div>

    </Center >
  )
}

export default Create