/*
{
  name: 'QWERTY',
  keys: "qwertyuiop[]\asdfghjkl;'zxcvbnm,./",
  fingers: '0123344567777012334456770123344567'
}
*/

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

export type { LayoutModel }
export { shiftKeys }

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