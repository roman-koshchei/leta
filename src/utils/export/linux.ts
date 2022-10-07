import { LayoutModel } from '../../models/layout'

const xmodmapSymbols = new Map<string, string>([
  ['[', 'bracketleft braceleft'],
  [']', 'bracketright braceright'],
  ['\\', 'backslash bar'],
  [';', 'semicolon colon'],
  ['\'', 'apostrophe quotedbl'],
  [',', 'comma less'],
  ['.', 'period greater'],
  ['/', 'slash question'],
])

/*
Export layout to xmodmap file
Now support only analyzable layouts
*/


const xmodmap = (layout: LayoutModel) => {

  const k = (i: number) => {
    const key = layout.keys[i]
    const symbol = xmodmapSymbols.get(key)
    return symbol ?? `${key} ${key.toUpperCase()}`
  }

  return `! xmodmap for ${layout.name} layout
! number row
keycode 49 = grave asciitilde
keycode 10 = 1 exclam
keycode 11 = 2 at
keycode 12 = 3 numbersign
keycode 13 = 4 dollar
keycode 14 = 5 percent
keycode 15 = 6 asciicircum
keycode 16 = 7 ampersand
keycode 17 = 8 asterisk
keycode 18 = 9 parenleft
keycode 19 = 0 parenright
keycode 20 = minus underscore
keycode 21 = equal plus
! top row
keycode 24 = ${k(0)}
keycode 25 = ${k(1)}
keycode 26 = ${k(2)}
keycode 27 = ${k(3)}
keycode 28 = ${k(4)}
keycode 29 = ${k(5)}
keycode 30 = ${k(6)}
keycode 31 = ${k(7)}
keycode 32 = ${k(8)}
keycode 33 = ${k(9)}
keycode 34 = ${k(10)}
keycode 35 = ${k(11)}
keycode 51 = ${k(12)}
! middle row
keycode 38 = ${k(13)}
keycode 39 = ${k(14)}
keycode 40 = ${k(15)}
keycode 41 = ${k(16)}
keycode 42 = ${k(17)}
keycode 43 = ${k(18)}
keycode 44 = ${k(19)}
keycode 45 = ${k(20)}
keycode 46 = ${k(21)}
keycode 47 = ${k(22)}
keycode 48 = ${k(23)}
! bottom row
keycode 52 = ${k(24)}
keycode 53 = ${k(25)}
keycode 54 = ${k(26)}
keycode 55 = ${k(27)}
keycode 56 = ${k(28)}
keycode 57 = ${k(29)}
keycode 58 = ${k(30)}
keycode 59 = ${k(31)}
keycode 60 = ${k(32)}
keycode 61 = ${k(33)}`
}

export { xmodmap }