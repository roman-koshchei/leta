import { FingerPosition, KeyInfo } from "models"
import { Dispatch, SetStateAction, useState } from "react"
import { Key } from "./Key"

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
    <div className="aspect-[16/9]">
      {keys.map((row, rowIndex) =>
        <div className="flex">
          {row.map((keyInfo, colIndex) =>
            <Key keyInfo={keyInfo}
              onDrop={() => drop(rowIndex, colIndex)}
              onDrag={() => drag(rowIndex, colIndex)} />
          )}
        </div>
      )}
    </div>
  )
}

export { Keyboard }