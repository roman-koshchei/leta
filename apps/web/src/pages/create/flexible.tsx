import { Finger, KeyInfo, QWERTY } from "models"
import Link from "next/link"
import { useState } from "react"
import { Button, DragKeyboard } from "ui"

const CreateFlexiblePage = () => {

  const [keys, setKeys] = useState<KeyInfo[][]>(
    QWERTY.map(row =>
      row.map(key => ({ ...key, active: true }))
    )
  )
  const [selected, setSelected] = useState({ row: -1, col: -1 })

  const click = (row: number, col: number) => {
    setSelected({ row, col })
  }

  const changeShift = (e: any) => change("shift", e.target.value)

  const changePrimary = (e: any) => change("primary", e.target.value)

  const change = (prop: string, value: string) => {
    if (value.length < 2) {
      const newKeys = Array.from(keys)
      newKeys[selected.row][selected.col][prop] = value
      setKeys(newKeys)
    }
  }

  return (
    <div className="max-w-5xl m-auto mt-10">
      <DragKeyboard keys={keys} setKeys={setKeys} />

      {selected.col != -1 ?
        <div>
          <input className="bg-gray-50 border border-solid outline-none border-transparent focus:border-transparent focus:ring-0 text-gray-900 text-sm rounded-md m-2 p-2.5"
            value={keys[selected.row][selected.col].primary} onChange={changePrimary} />
          <input value={keys[selected.row][selected.col].shift} onChange={changeShift} />
        </div>
        : null
      }

      <div >
        <Button>
          <Link href="/create/comparable">
            Comparable
          </Link>
        </Button>

      </div>

    </div>
  )
}

export default CreateFlexiblePage