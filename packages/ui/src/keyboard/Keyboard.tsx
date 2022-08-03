import * as React from "react";
import { useState } from "react"
import { Key } from "./Key";


enum Hand {
  Left, Right
}

enum Finger {
  Pinky,
  Ring,
  Middle,
  Index,
  Thumb
}

interface FingerPosition {
  finger: Finger
  hand: Hand
}

const fingerColors = new Map<FingerPosition, string>([
  [{ finger: Finger.Pinky, hand: Hand.Left }, ''],
  [{ finger: Finger.Ring, hand: Hand.Left }, ''],
  [{ finger: Finger.Middle, hand: Hand.Left }, ''],
  [{ finger: Finger.Index, hand: Hand.Left }, ''],
  [{ finger: Finger.Thumb, hand: Hand.Left }, ''],
  [{ finger: Finger.Pinky, hand: Hand.Right }, ''],
  [{ finger: Finger.Ring, hand: Hand.Right }, ''],
  [{ finger: Finger.Middle, hand: Hand.Right }, ''],
  [{ finger: Finger.Index, hand: Hand.Right }, ''],
  [{ finger: Finger.Thumb, hand: Hand.Right }, ''],

])

interface KeyInfo {
  primary: string;
  shift: string;
  finger: FingerPosition
}

const Keyboard = () => {
  const [keys, setKeys] = useState<KeyInfo[][]>([
    [{ primary: 'w', shift: 'W', finger: { finger: Finger.Pinky, hand: Hand.Left } }
      'w', 'l', 'y', 'p', 'k', 'z', 'x', 'o', 'u', ';', '[', ']', '\\'],
    ['c', 'r', 's', 't', 'b', 'f', 'n', 'e', 'i', 'a', '\''],
    ['j', 'v', 'd', 'g', 'q', 'm', 'h', '/', ',', '.']
  ])

  const [draged, setDraged] = useState({
    row: -1,
    col: -1
  })

  const dragOver = (event: any) => {
    event.preventDefault()
  }
  const drag = (rowIndex: number, colIndex: number) => {
    setDraged({ row: rowIndex, col: colIndex })
  }
  const drop = (rowIndex: number, colIndex: number) => {
    const dragedKey = keys[draged.row][draged.col]

    let newKeys = Array.from(keys)

    newKeys[draged.row][draged.col] = keys[rowIndex][colIndex]
    newKeys[rowIndex][colIndex] = dragedKey

    setKeys(newKeys)
  }
  // onDragOver={dragOver}

  return (
    <div className="aspect-[16/9]">
      {keys.map((row, rowIndex) => <div className="flex">
        {row.map((key, colIndex) =>
          <Key val={key} onDrag={() => drag(rowIndex, colIndex)} onDrop={() => drop(rowIndex, colIndex)} />
        )}
      </div>)}
    </div>
  )
}

export { Keyboard }