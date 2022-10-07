import { DragEventHandler, MouseEventHandler, ReactNode, useState } from 'react'
import { Center, } from '../components'
import { ActionKeyboard } from '../components/create/ActionKeyboard'
import { Finger, FingerColors } from '../models/finger'
import { KeyFinger, QWERTY } from '../models/key'
import { xmodmap } from '../utils/export'

type Position = { row: number, col: number }

const Create = () => {
  const [keys, setKeys] = useState<KeyFinger[][]>(QWERTY)
  const [selected, setSelected] = useState<Position>({ row: -1, col: -1 })

  const exportLayout = async () => {
    const { xmodmap, win, download } = await import('../utils/export');
    const qwerty = xmodmap({
      name: 'QWERTY',
      keys: "qwertyuiop[]\\asdfghjkl;'zxcvbnm,./",
      fingers: '0123344567777012334456770123344567'
    })
    download('qwerty.xmodmap', qwerty);
  }

  const changeFinger = (finger: Finger) => {
    let newKeys = Array.from(keys)
    newKeys[selected.row][selected.col] = {
      key: keys[selected.row][selected.col].key,
      finger
    }
    setKeys(newKeys)
  }

  return (
    <Center className='text-2xl'>

      <div className='w-full'>
        <ActionKeyboard keys={{ val: keys, set: setKeys }}
          selected={{ val: selected, set: setSelected }} />
      </div>

      <div className='mt-10'>

        {selected.col != -1 ?
          <div>
            Letter: {keys[selected.row][selected.col].key} finger: {keys[selected.row][selected.col].finger}
            <div className='flex'>
              {Object.values(Finger).map(f => {
                const bg = FingerColors.get(f as Finger) ?? '';
                return (
                  <div className={`${bg} w-8 h-8`} onClick={() => changeFinger(f as Finger)}>

                  </div>
                )
              })}
            </div>

          </div>
          : null
        }

        <div className='cursor-pointer' onClick={exportLayout}>
          Export for windows
        </div>

      </div>
    </Center >
  )
}

export default Create