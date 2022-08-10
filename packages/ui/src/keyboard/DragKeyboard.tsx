import { KeyInfo } from "models"
import { Dispatch, SetStateAction, useState } from "react"
import { Keyboard } from "./Keyboard"


interface ComparableKeyboardProps {
  keys: KeyInfo[][]
  setKeys: Dispatch<SetStateAction<KeyInfo[][]>>

  keyClick?: (row: number, col: number) => void
}

const DragKeyboard = ({ keys, setKeys, keyClick }: ComparableKeyboardProps) => {
  const [draged, setDraged] = useState({
    row: -1, col: -1
  })

  const dragOver = (e: any) => e.preventDefault()

  const drag = (row: number, col: number) => {
    setDraged({ row, col })
  }

  const drop = (row: number, col: number) => {
    const dragedKey = keys[draged.row][draged.col]

    let newKeys = Array.from(keys)

    newKeys[draged.row][draged.col] = {
      ...newKeys[draged.row][draged.col],
      primary: keys[row][col].primary,
      shift: keys[row][col].shift
    }

    newKeys[row][col] = {
      ...newKeys[row][col],
      primary: dragedKey.primary,
      shift: dragedKey.shift
    }

    setKeys(newKeys)
  }

  return (
    <Keyboard keys={keys}
      keyDrag={drag}
      keyDrop={drop}
      onKeyDragOver={dragOver}
      keyClick={keyClick}
    />
  )
}

export { DragKeyboard }