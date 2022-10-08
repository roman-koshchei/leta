import { DragEventHandler, MouseEventHandler, ReactNode, useState } from 'react'
import { Center, } from '../components'
import { ActionKeyboard } from '../components/create/ActionKeyboard'
import { Finger, FingerColors } from '../models/finger'
import { KeyFinger, QWERTY } from '../models/key'
import { keyFingerMatrixToLayout } from '../models/layout'

type Position = { row: number, col: number }

const Create = () => {
  const [keys, setKeys] = useState<KeyFinger[][]>(QWERTY)
  const [selected, setSelected] = useState<Position>({ row: -1, col: -1 })

  const exportMacOS = async () => {
    const { mac, download } = await import('../utils/export');
    download(mac(keyFingerMatrixToLayout('l', keys)));
  }

  const exportWin = async () => {
    const { win, download } = await import('../utils/export');
    download(win(keyFingerMatrixToLayout('l', keys)));
  }

  const exportLinux = async () => {
    const { xmodmap, download } = await import('../utils/export');
    download(xmodmap(keyFingerMatrixToLayout('l', keys)));
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
    <Center className='text-xl'>

      <div className='w-full'>
        <ActionKeyboard keys={{ val: keys, set: setKeys }}
          selected={{ val: selected, set: setSelected }} />
      </div>

      <div className='mt-10 w-full'>

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

        <div className='flex justify-between'>
          Export for:
          <button onClick={exportMacOS}>MacOS</button>
          <button onClick={exportWin}>Windows</button>
          <button onClick={exportLinux}>Linux</button>
        </div>

      </div>
    </Center >
  )
}

export default Create