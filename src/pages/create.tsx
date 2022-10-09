import { DragEventHandler, MouseEventHandler, ReactNode, useState } from 'react'
import { Center, Input, Title, } from '../components'
import { ActionKeyboard } from '../components/create/ActionKeyboard'
import { Finger, FingerColors } from '../models/finger'
import { KeyFinger, QWERTY } from '../models/key'
import { keyFingerMatrixToLayout } from '../models/layout'

type Position = { row: number, col: number }

const Create = () => {
  const [keys, setKeys] = useState<KeyFinger[][]>(QWERTY)
  const [name, setName] = useState<string>('')
  const [selected, setSelected] = useState<Position>({ row: -1, col: -1 })

  const exportLayout = async (target: string) => {
    const trimName = name.trim()
    if (trimName != '') {
      const { download } = await import('../utils/export');
      const getLayoutFile = (await import(`../utils/export/${target}`)).default
      download(getLayoutFile(keyFingerMatrixToLayout(name, keys)));
    } else {
      alert('Name of layout can\'t be empty')
    }
  }

  const changeFinger = (finger: Finger) => {
    let newKeys = Array.from(keys)
    newKeys[selected.row][selected.col] = {
      key: keys[selected.row][selected.col].key,
      finger
    }
    setKeys(newKeys)
  }

  const analyzeLayout = async () => {
    const { analyze } = await import('../utils/analyze')
    analyze(keyFingerMatrixToLayout(name, keys))
  }

  return (
    <>
      <Title>LETA - Create layout</Title>

      <Center className='text-lg'>

        <div className='w-full'>
          <ActionKeyboard keys={{ val: keys, set: setKeys }}
            selected={{ val: selected, set: setSelected }} />
        </div>

        <div className='mt-10 w-full'>

          {selected.col != -1 ?
            <div className='flex justify-between mb-10'>
              Letter: {keys[selected.row][selected.col].key} finger: {keys[selected.row][selected.col].finger}
              <div className='flex'>
                {Object.values(Finger).map(f => {
                  const bg = FingerColors.get(f as Finger) ?? '';
                  return (
                    <div className={`${bg} w-8 h-8`} onClick={() => changeFinger(f as Finger)} key={f}>

                    </div>
                  )
                })}
              </div>

            </div>
            : null
          }

          <div className='flex justify-between'>
            <div className='flex items-center gap-5'>
              Export
              <Input type='text' value={name} placeholder='layout name' className='py-3 px-5'
                onChange={(e: any) => setName(e.target.value)} />
              for
            </div>
            <button onClick={() => exportLayout('mac')}>MacOS</button>
            <button onClick={() => exportLayout('win')}>Windows</button>
            <button onClick={() => exportLayout('linux')}>Linux</button>
          </div>

          <div>
            <button onClick={analyzeLayout}>Analyze</button>
          </div>

        </div>
      </Center >
    </>
  )
}

export default Create