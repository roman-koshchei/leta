import { DragKeyboard, Button, Input } from "ui"
import { Finger, KeyInfo, QWERTY } from "models"
import { Fragment, useEffect, useState } from "react"
import Link from "next/link"
import { Listbox, Transition } from "@headlessui/react"
import { download, exportWin, xmodmap } from "utils"

const fingerMaps = ["Traditional", "Alternative"]

const CreateComparablePage = () => {

  const [keys, setKeys] = useState<KeyInfo[][]>(
    QWERTY.map((row, rowI) => rowI == 0
      ? row.map(key => ({ ...key, active: false }))
      : row.map(key => ({ ...key, active: true }))
    )
  )

  const [fingerMap, setFingerMap] = useState(fingerMaps[0])
  const changeFingerMap = (value: string) => {
    const newKeys = Array.from(keys)

    if (value == fingerMaps[0]) {
      newKeys[3][0].finger = Finger.LeftPinky
      newKeys[3][1].finger = Finger.LeftRing
      newKeys[3][2].finger = Finger.LeftMiddle
    } else {
      newKeys[3][0].finger = Finger.LeftRing
      newKeys[3][1].finger = Finger.LeftMiddle
      newKeys[3][2].finger = Finger.LeftIndex
    }

    setKeys(newKeys)
    setFingerMap(value)
  }

  const [name, setName] = useState("")
  const nameChange = (e: any) => {
    setName(e.target.value)
  }

  const analyze = () => {
    // analyze logic
  }

  const downloadClick = () => {
    const trimName = name.trim()
    const layoutName = trimName == "" ? "layout" : trimName
    //download(`${trimName == "" ? "layout" : trimName}.klc`, exportWin(name, keys))
    download(`${layoutName}.xmodmap`, xmodmap(layoutName, keys))

  }

  return (
    <div className="max-w-5xl m-auto mt-10">
      <DragKeyboard keys={keys} setKeys={setKeys} />

      <div className="flex justify-between mt-3">

        <Listbox value={fingerMap} onChange={changeFingerMap}>
          <div className="relative">
            <Listbox.Button className="py-2 px-3 bg-blue-400 text-white rounded-md select-none flex items-center">
              {fingerMap}
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Listbox.Button>
            <Transition
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 border border-slate-400 py-1 rounded-md w-full">
                {fingerMaps.map(map =>
                  <Listbox.Option className={prop => `select-none text-center py-1 ${prop.active ? "bg-slate-100" : ""}`}
                    key={map} value={map}>
                    {map}
                  </Listbox.Option>
                )}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>


        <Button>
          <Link href="/create/flexible">
            Create flexible
          </Link>
        </Button>

        <Button>
          <div onClick={analyze}>Analyze</div>
        </Button>

        <Button>
          <div onClick={downloadClick}>Download</div>
        </Button>

        <Input val={name} onChange={nameChange} />
      </div>

    </div>
  )
}

export default CreateComparablePage