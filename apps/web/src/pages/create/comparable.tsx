import { Keyboard } from "ui"
import { Finger, KeyInfo, FingerPosition, Hand } from "models"
import { useState } from "react"

const qwertyKeys: KeyInfo[][] = [
  [
    { primary: 'q', shift: 'Q', },
    { primary: 'w', shift: 'W', },
    { primary: 'e', shift: 'E', },
    { primary: 'r', shift: 'R', },
    { primary: 't', shift: 'T', },
    { primary: 'y', shift: 'Y', },
    { primary: 'u', shift: 'U', },
    { primary: 'i', shift: 'I', },
    { primary: 'o', shift: 'O', },
    { primary: 'p', shift: 'P', },
    { primary: '[', shift: '{', },
    { primary: ']', shift: '}', },
    { primary: '\\', shift: '|', },
  ],
  [
    { primary: 'a', shift: 'A', },
    { primary: 's', shift: 'S', },
    { primary: 'd', shift: 'D', },
    { primary: 'f', shift: 'F', },
    { primary: 'g', shift: 'G', },
    { primary: 'h', shift: 'H', },
    { primary: 'j', shift: 'J', },
    { primary: 'k', shift: 'K', },
    { primary: 'l', shift: 'L', },
    { primary: ';', shift: ':', },
    { primary: '\'', shift: '"', },
  ],
  [
    { primary: 'z', shift: 'Z', },
    { primary: 'x', shift: 'X', },
    { primary: 'c', shift: 'C', },
    { primary: 'v', shift: 'V', },
    { primary: 'b', shift: 'B', },
    { primary: 'n', shift: 'N', },
    { primary: 'm', shift: 'M', },
    { primary: ',', shift: '<', },
    { primary: '.', shift: '>', },
    { primary: '/', shift: '?', },
  ],
]

const qwertyFingers: FingerPosition[][] = [
  [
    { finger: Finger.Pinky, hand: Hand.Left },
    { finger: Finger.Ring, hand: Hand.Left },
    { finger: Finger.Middle, hand: Hand.Left },
    { finger: Finger.Index, hand: Hand.Left },
    { finger: Finger.Index, hand: Hand.Left },
    { finger: Finger.Index, hand: Hand.Right },
    { finger: Finger.Index, hand: Hand.Right },
    { finger: Finger.Middle, hand: Hand.Right },
    { finger: Finger.Ring, hand: Hand.Right },
    { finger: Finger.Pinky, hand: Hand.Right },
    { finger: Finger.Pinky, hand: Hand.Right },
    { finger: Finger.Pinky, hand: Hand.Right },
    { finger: Finger.Pinky, hand: Hand.Right },
  ],
  [
    { finger: Finger.Pinky, hand: Hand.Left },
    { finger: Finger.Ring, hand: Hand.Left },
    { finger: Finger.Middle, hand: Hand.Left },
    { finger: Finger.Index, hand: Hand.Left },
    { finger: Finger.Index, hand: Hand.Left },
    { finger: Finger.Index, hand: Hand.Right },
    { finger: Finger.Index, hand: Hand.Right },
    { finger: Finger.Middle, hand: Hand.Right },
    { finger: Finger.Ring, hand: Hand.Right },
    { finger: Finger.Pinky, hand: Hand.Right },
    { finger: Finger.Pinky, hand: Hand.Right },
  ],
  [
    { finger: Finger.Pinky, hand: Hand.Left },
    { finger: Finger.Ring, hand: Hand.Left },
    { finger: Finger.Middle, hand: Hand.Left },
    { finger: Finger.Index, hand: Hand.Left },
    { finger: Finger.Index, hand: Hand.Left },
    { finger: Finger.Index, hand: Hand.Right },
    { finger: Finger.Index, hand: Hand.Right },
    { finger: Finger.Middle, hand: Hand.Right },
    { finger: Finger.Ring, hand: Hand.Right },
    { finger: Finger.Pinky, hand: Hand.Right },
  ],
]

const CreateComparablePage = () => {

  const [keys, setKeys] = useState(qwertyKeys)

  return (
    <div>
      <h1>CreateComparablePage</h1>
      <Keyboard
        keys={keys}
        setKeys={setKeys}
        fingers={qwertyFingers}
      />
    </div>
  )
}

export default CreateComparablePage