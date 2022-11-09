import { Finger } from './finger'

type Position = { row: number, col: number }

type KeyFinger = {
  key: string
  finger: Finger
}

const QWERTY: KeyFinger[][] = [
  [
    { key: 'q', finger: Finger.LeftPinky },
    { key: 'w', finger: Finger.LeftRing },
    { key: 'e', finger: Finger.LeftMiddle },
    { key: 'r', finger: Finger.LeftIndex },
    { key: 't', finger: Finger.LeftIndex },
    { key: 'y', finger: Finger.RightIndex },
    { key: 'u', finger: Finger.RightIndex },
    { key: 'i', finger: Finger.RightMiddle },
    { key: 'o', finger: Finger.RightRing },
    { key: 'p', finger: Finger.RightPinky },
    { key: '[', finger: Finger.RightPinky },
    { key: ']', finger: Finger.RightPinky },
    { key: '\\', finger: Finger.RightPinky },
  ],
  [
    { key: 'a', finger: Finger.LeftPinky },
    { key: 's', finger: Finger.LeftRing },
    { key: 'd', finger: Finger.LeftMiddle },
    { key: 'f', finger: Finger.LeftIndex },
    { key: 'g', finger: Finger.LeftIndex },
    { key: 'h', finger: Finger.RightIndex },
    { key: 'j', finger: Finger.RightIndex },
    { key: 'k', finger: Finger.RightMiddle },
    { key: 'l', finger: Finger.RightRing },
    { key: ';', finger: Finger.RightPinky },
    { key: '\'', finger: Finger.RightPinky },
  ],
  [
    { key: 'z', finger: Finger.LeftPinky },
    { key: 'x', finger: Finger.LeftRing },
    { key: 'c', finger: Finger.LeftMiddle },
    { key: 'v', finger: Finger.LeftIndex },
    { key: 'b', finger: Finger.LeftIndex },
    { key: 'n', finger: Finger.RightIndex },
    { key: 'm', finger: Finger.RightIndex },
    { key: ',', finger: Finger.RightMiddle },
    { key: '.', finger: Finger.RightRing },
    { key: '/', finger: Finger.RightPinky },
  ],
]

export { QWERTY }
export type { KeyFinger, Position }