import { Finger, KeyInfo } from "models"
import { Dispatch, DragEventHandler, MouseEventHandler, SetStateAction, useState } from "react"
import { KeyboardBase } from "./KeyboardBase"
import { Key } from "./keys/Key"
import { KeyBase } from "./keys/KeyBase"
import { Row } from "./rows/Row"

interface KeyboardProps {
  keys: KeyInfo[][]
  // includeNums: boolean

  keyDrag?: (row: number, col: number) => void
  keyDrop?: (row: number, col: number) => void
  onKeyDragOver?: DragEventHandler
  keyClick?: (row: number, col: number) => void
}

interface InKeyProps {
  keyInfo: KeyInfo
  w: string // tailwind width numbler as 'w-14'
  row: number
  col: number
}

const Keyboard = (
  { keys, keyDrag: onKeyDrag, keyDrop: onKeyDrop, onKeyDragOver, keyClick }: KeyboardProps
) => {

  // inner key just to not write events for each key
  const InKey = onKeyDrag != undefined && onKeyDrop != undefined
    ? ({ keyInfo, w, row, col }: InKeyProps) => {
      return keyInfo.active
        ? (
          <Key keyInfo={keyInfo} w={w}
            onDrag={() => onKeyDrag(row, col)}
            onDrop={() => onKeyDrop(row, col)}
            draggable onDragOver={onKeyDragOver}
            onClick={keyClick ? (() => keyClick(row, col)) : undefined}
          />
        )
        : <Key keyInfo={keyInfo} w={w} />
    }
    : ({ keyInfo, w }: InKeyProps) => <Key keyInfo={keyInfo} w={w} />

  return (
    <KeyboardBase>
      <Row>
        {keys[0].map((key, col) =>
          <InKey key={col} col={col} row={0} keyInfo={key} w="w-14" />
        )}
        <KeyBase w="w-32" bg="bg-slate-300">
          Backspace
        </KeyBase>
      </Row>

      <Row>
        <KeyBase w="w-24" bg="bg-slate-300">Tab</KeyBase>
        {keys[1].map((key, col) =>
          <InKey key={col} col={col} row={1} keyInfo={key} w={col == keys[0].length - 1 ? "w-24" : "w-14"} />
        )}
      </Row>

      <Row>
        <KeyBase w="w-28" bg="bg-slate-300">Caps</KeyBase>
        {keys[2].map((key, col) =>
          <InKey key={col} col={col} row={2} keyInfo={key} w="w-14" />
        )}
        <KeyBase w="w-36" bg="bg-slate-300">Enter</KeyBase>
      </Row>

      <Row>
        <KeyBase w="w-36" bg="bg-slate-300">Shift</KeyBase>
        {keys[3].map((key, col) =>
          <InKey key={col} col={col} row={3} keyInfo={key} w="w-14" />
        )}
        <KeyBase w="w-44" bg="bg-slate-300">Shift</KeyBase>
      </Row>
    </KeyboardBase>
  )
}

export { Keyboard }

