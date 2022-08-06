import { FingerPosition, KeyInfo } from "models"
import { Dispatch, SetStateAction, useState } from "react"
import { DragKey } from "./DragKey"
import { Key } from "./Key"
import { KeyBase } from "./KeyBase"

interface KeyboardProps {
  keys: KeyInfo[][]
  setKeys: Dispatch<SetStateAction<KeyInfo[][]>>
  fingers: FingerPosition[][]
}

const Keyboard = ({ setKeys, keys, fingers }: KeyboardProps) => {
  const [draged, setDraged] = useState({
    row: -1, col: -1
  })

  const drag = (row: number, col: number) => setDraged({ row, col })


  const drop = (row: number, col: number) => {
    const dragedKey = keys[draged.row][draged.col]

    let newKeys = Array.from(keys)

    newKeys[draged.row][draged.col] = keys[row][col]
    newKeys[row][col] = dragedKey

    setKeys(newKeys)
  }

  return (
    <div className="aspect-[1200/220] max-w-5xl text-sm md:text-base">
      <div className="flex flex-col gap-1 md:gap-2 h-full">

        <div className="flex flex-1 gap-1 md:gap-2">
          <KeyBase w={24} color="slate-300">Tab</KeyBase>
          {keys[0].map((key, i) =>
            <DragKey onDrag={() => drag(0, i)} onDrop={() => drop(0, i)} keyInfo={key} w={i == keys[0].length - 1 ? 24 : 14} />
          )}
        </div>

        <div className="flex flex-1 gap-1 md:gap-2">
          <KeyBase w={28} color="slate-300">Caps</KeyBase>
          {keys[1].map((key, i) =>
            <DragKey onDrag={() => drag(1, i)} onDrop={() => drop(1, i)} keyInfo={key} w={14} />
          )}
          <KeyBase w={36} color="slate-300">Enter</KeyBase>
        </div>

        <div className="flex  flex-1 gap-1 md:gap-2">
          <KeyBase w={36} color="slate-300">Shift</KeyBase>
          {keys[2].map((key, i) =>
            <DragKey onDrag={() => drag(2, i)} onDrop={() => drop(2, i)} keyInfo={key} w={14} />
          )}
          <KeyBase w={44} color="slate-300">Shift</KeyBase>
        </div>
      </div>
    </div>
  )
}

export { Keyboard }