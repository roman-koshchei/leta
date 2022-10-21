import { atom } from 'jotai'
import { KeyFinger, Position, QWERTY } from '../models'

const keysAtom = atom<KeyFinger[][]>(QWERTY)

export { keysAtom }