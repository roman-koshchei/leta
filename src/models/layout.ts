/*
{
  name: 'QWERTY',
  keys: "qwertyuiop[]\asdfghjkl;'zxcvbnm,./",
  fingers: '0123344567777012334456770123344567'
}
*/

import { Layout } from '../components';
import { KeyFinger } from './key';

type LayoutModel = {
  name: string
  keys: string
  fingers: string
}

const shiftKeys = new Map([
  ['[', '{'],
  [']', '}'],
  ['\\', '|'],
  [';', ':'],
  ['\'', '"'],
  [',', '<'],
  ['.', '>'],
  ['/', '?'],

])

const keyFingerMatrixToLayout = (name: string, matrix: KeyFinger[][]): LayoutModel => {
  let keys = ''
  let fingers = ''

  for (const row of matrix) {
    for (const keyFinger of row) {
      keys += keyFinger.key
      fingers += keyFinger.finger
    }
  }

  return { name, keys, fingers }
}

export type { LayoutModel }
export { shiftKeys, keyFingerMatrixToLayout }

/* for all keys
const shiftKeys = {
  q: 'Q',
  w: 'W',
  e: 'E',
  r: 'R',
  t: 'T',
  y: '',
  u: '',
  i: '',
  o: '',
  p: '',
  '[': '',
  ']': '',
  '\\': '',
  a: '',
  s: '',
  d: '',
  f: '',
  g: '',
  h: '',
  j: '',
  k: '',
  l: '',
  ';': '',
  '\'': '',
  z: '',
  x: '',
  c: '',
  v: '',
  b: '',
  n: '',
  m: '',
  ',': '',
  '.': '',
  '/': '',
}
*/