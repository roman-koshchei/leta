import { isLetter } from '.'
import { LayoutModel, shiftKeys } from '../../models/layout'

/*
Export layout to klc file
Now support only analyzable layouts
*/


const hex = (char: string): string => {
  const hex = char.charCodeAt(0).toString(16)
  return `${"0".repeat(4 - hex.length)}${hex}`
}

const win = (layout: LayoutModel) => {
  // get key string 'k' for short
  const k = (i: number): string => {
    const key = layout.keys[i];
    if (isLetter(key)) {
      return `1 ${key} ${key.toUpperCase()}`
    } else {
      const primary = hex(key);
      const shift = hex(shiftKeys.get(key) ?? '')
      return `0 ${primary} ${shift}`
    }
  }

  return `KBD ${layout.name} "EN - ${layout.name}"

COPYRIGHT	"(c) 2022 ${layout.name}"

COMPANY	"${layout.name}"

LOCALENAME	"en-US"

LOCALEID	"00000409"

VERSION	1.0

SHIFTSTATE

0	//Column 4
1	//Column 5 : Shft
2	//Column 6 :       Ctrl

LAYOUT		;an extra '@' at the end is a dead key

//SC	VK_		Cap	0	1	2
//--	----		----	----	----	----

02	1		0	1	0021	-1		// DIGIT ONE, EXCLAMATION MARK, <none>
03	2		0	2	0040	-1		// DIGIT TWO, COMMERCIAL AT, <none>
04	3		0	3	0023	-1		// DIGIT THREE, NUMBER SIGN, <none>
05	4		0	4	0024	-1		// DIGIT FOUR, DOLLAR SIGN, <none>
06	5		0	5	0025	-1		// DIGIT FIVE, PERCENT SIGN, <none>
07	6		0	6	005e	-1		// DIGIT SIX, CIRCUMFLEX ACCENT, <none>
08	7		0	7	0026	-1		// DIGIT SEVEN, AMPERSAND, <none>
09	8		0	8	002a	-1		// DIGIT EIGHT, ASTERISK, <none>
0a	9		0	9	0028	-1		// DIGIT NINE, LEFT PARENTHESIS, <none>
0b	0		0	0	0029	-1		// DIGIT ZERO, RIGHT PARENTHESIS, <none>
0c	OEM_MINUS	0	002d	005f	-1		// HYPHEN-MINUS, LOW LINE, <none>
0d	OEM_PLUS	0	003d	002b	-1		// EQUALS SIGN, PLUS SIGN, <none>  
10	Q		${k(0)}	-1		// LATIN SMALL LETTER Q, LATIN CAPITAL LETTER Q, <none>
11	W		${k(1)}	-1		// LATIN SMALL LETTER W, LATIN CAPITAL LETTER W, <none>
12	E		${k(2)}	-1		// LATIN SMALL LETTER E, LATIN CAPITAL LETTER E, <none>
13	R		${k(3)}	-1		// LATIN SMALL LETTER R, LATIN CAPITAL LETTER R, <none>
14	T		${k(4)}	-1		// LATIN SMALL LETTER T, LATIN CAPITAL LETTER T, <none>
15	Y		${k(5)}	-1		// LATIN SMALL LETTER Y, LATIN CAPITAL LETTER Y, <none>
16	U		${k(6)}	-1		// LATIN SMALL LETTER U, LATIN CAPITAL LETTER U, <none>
17	I		${k(7)}	-1		// LATIN SMALL LETTER I, LATIN CAPITAL LETTER I, <none>
18	O		${k(8)}	-1		// LATIN SMALL LETTER O, LATIN CAPITAL LETTER O, <none>
19	P		${k(9)}	-1		// LATIN SMALL LETTER P, LATIN CAPITAL LETTER P, <none>
1a	OEM_4		${k(10)}	001b		// LEFT SQUARE BRACKET, LEFT CURLY BRACKET, ESCAPE
1b	OEM_6		${k(11)}	001d		// RIGHT SQUARE BRACKET, RIGHT CURLY BRACKET, INFORMATION SEPARATOR THREE
1e	A		${k(13)}	-1		// LATIN SMALL LETTER A, LATIN CAPITAL LETTER A, <none>
1f	S		${k(14)}	-1		// LATIN SMALL LETTER S, LATIN CAPITAL LETTER S, <none>
20	D		${k(15)}	-1		// LATIN SMALL LETTER D, LATIN CAPITAL LETTER D, <none>
21	F		${k(16)}	-1		// LATIN SMALL LETTER F, LATIN CAPITAL LETTER F, <none>
22	G		${k(17)}	-1		// LATIN SMALL LETTER G, LATIN CAPITAL LETTER G, <none>
23	H		${k(18)}	-1		// LATIN SMALL LETTER H, LATIN CAPITAL LETTER H, <none>
24	J		${k(19)}	-1		// LATIN SMALL LETTER J, LATIN CAPITAL LETTER J, <none>
25	K		${k(20)}	-1		// LATIN SMALL LETTER K, LATIN CAPITAL LETTER K, <none>
26	L		${k(21)}	-1		// LATIN SMALL LETTER L, LATIN CAPITAL LETTER L, <none>
27	OEM_1		${k(22)}	-1		// SEMICOLON, COLON, <none>
28	OEM_7		${k(23)}	-1		// APOSTROPHE, QUOTATION MARK, <none>
29	OEM_3		0	0060	007e	-1		// GRAVE ACCENT, TILDE, <none>
2b	OEM_5		${k(12)}	001c		// REVERSE SOLIDUS, VERTICAL LINE, INFORMATION SEPARATOR FOUR
2c	Z		${k(24)}	-1		// LATIN SMALL LETTER Z, LATIN CAPITAL LETTER Z, <none>
2d	X		${k(25)}	-1		// LATIN SMALL LETTER X, LATIN CAPITAL LETTER X, <none>
2e	C		${k(26)}	-1		// LATIN SMALL LETTER C, LATIN CAPITAL LETTER C, <none>
2f	V		${k(27)}	-1		// LATIN SMALL LETTER V, LATIN CAPITAL LETTER V, <none>
30	B		${k(28)}	-1		// LATIN SMALL LETTER B, LATIN CAPITAL LETTER B, <none>
31	N		${k(29)}	-1		// LATIN SMALL LETTER N, LATIN CAPITAL LETTER N, <none>
32	M		${k(30)}	-1		// LATIN SMALL LETTER M, LATIN CAPITAL LETTER M, <none>
33	OEM_COMMA	${k(31)}	-1		// COMMA, LESS-THAN SIGN, <none>
34	OEM_PERIOD	${k(32)}	-1		// FULL STOP, GREATER-THAN SIGN, <none>
35	OEM_2		${k(33)}	-1		// SOLIDUS, QUESTION MARK, <none>
39	SPACE		0	0020	0020	0020		// SPACE, SPACE, SPACE
56	OEM_102	${k(12)}	001c		// REVERSE SOLIDUS, VERTICAL LINE, INFORMATION SEPARATOR FOUR
53	DECIMAL	0	002e	002e	-1		// FULL STOP, FULL STOP, 


KEYNAME

01	Esc
0e	Backspace
0f	Tab
1c	Enter
1d	Ctrl
2a	Shift
36	"Right Shift"
37	"Num *"
38	Alt
39	Space
3a	"Caps Lock"
3b	F1
3c	F2
3d	F3
3e	F4
3f	F5
40	F6
41	F7
42	F8
43	F9
44	F10
45	Pause
46	"Scroll Lock"
47	"Num 7"
48	"Num 8"
49	"Num 9"
4a	"Num -"
4b	"Num 4"
4c	"Num 5"
4d	"Num 6"
4e	"Num +"
4f	"Num 1"
50	"Num 2"
51	"Num 3"
52	"Num 0"
53	"Num Del"
54	"Sys Req"
57	F11
58	F12
7c	F13
7d	F14
7e	F15
7f	F16
80	F17
81	F18
82	F19
83	F20
84	F21
85	F22
86	F23
87	F24

KEYNAME_EXT

1c	"Num Enter"
1d	"Right Ctrl"
35	"Num /"
37	"Prnt Scrn"
38	"Right Alt"
45	"Num Lock"
46	Break
47	Home
48	Up
49	"Page Up"
4b	Left
4d	Right
4f	End
50	Down
51	"Page Down"
52	Insert
53	Delete
54	<00>
56	Help
5b	"Left Windows"
5c	"Right Windows"
5d	Application

DESCRIPTIONS

0409	US - ${layout.name}
LANGUAGENAMES

0409	English (United States)
ENDKBD`
}

export { win }


/*
for all 

const supported = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"

const keyCode = (char: string): string => {
  if (supported.includes(char.charAt(0))) {
    return char.charAt(0)
  }
  return charHex(char)
}
*/