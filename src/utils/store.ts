import { Finger, KeyFinger, keyFingerMatrixToLayout, Position, QWERTY } from '../models'


import { proxy } from 'valtio'

const keysStore = proxy<{ keys: KeyFinger[][] }>({ keys: QWERTY, })

const swapKeys = (f: Position, s: Position) => {
  const firstKey = keysStore.keys[f.row][f.col].key

  keysStore.keys[f.row][f.col].key = keysStore.keys[s.row][s.col].key
  keysStore.keys[s.row][s.col].key = firstKey
}

const setFinger = (position: Position, finger: Finger) => {
  keysStore.keys[position.row][position.col].finger = finger
}

const keysToLayout = (name: string) => keyFingerMatrixToLayout(name, keysStore.keys)

export { keysStore, swapKeys, setFinger, keysToLayout }