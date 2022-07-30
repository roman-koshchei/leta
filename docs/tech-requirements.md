# 1. Purpose

System where you can:
- practice touch typing 
- choose right layout
- create owh layout
All ones should be done easily. There are helpful guides to choose, make own layout. 


# 2. Description of system

Functional blocks:
1. Auth
2. Typing test
3. Test stats (save in profile)
4. Settings
5. Layout creator
6. Layout downloader
7. Guides
8. PWA or Desktop


## 2.1. Auth

User must have:
- email
- username

Can reset all stats


## 2.2. Typing test

Run test with mod in settings. Next test start on pressing 'tab' key.
Monkeytype = good example


## 2.3. Test stats

Count:
- WPM
- Accuracity
- Time/words
- WPM map
- errors


## 2.4. Settings

Must be able to import/export settings from/to json. Reset settings.

### Test

- language level (A, B, C)
- Mod:
  - words: 10 25 50 100
  - time: 15 30 60 120
- layout

### Enviroment

- sound to key press (get from mechvibes)
- live:
  - wpm
  - accuracy
  - timer/progress
- ads: off, result, ...
- show all lines
- font:
  - size: 1 1.25 1.5 ...
  - family: add some basic families (Roboto, Iosevka, ...)
- layout display:
  - off
  - react (show what you are pressing)
  - next (show what you should press)
  - static (just show layout)
- theme:
  - background
  - primary (color of right text)
  - secondary (color of untyped text)
  - danger (color of wrong text)


## 2.5. Layout creator

Contains mods (layout model should have mod property):
1. comparable
2. freedom

Both mods can:
- change finger of keys
- download files for all platforms (`see 2.6. Layout downloader`)


### 2.5.1. Comparable 

- english
- only swap keys
- get analysis from genkey-api (can see raw json)


### 2.5.2. Freedom

- any language
- can't get analysis
- swap keys
- set custom letters


## 2.6. Layout downloader

Send reguest to server and recieve file. Database entity doesn't contain files (text) for platforms. Files are created on each request.
Files will be created on client side. I think it's better, because:
- pwa will support downloading
- no waiting to transport file from server to client


## 2.7. Guides

Try to contain guides like seperate files (.md)
- about terminology
- for choosing right layout
- for layout creators

Maybe to connect it to one guide and add navigation


## 2.8. PWA or Desktop

Make website installable. Offline available:
- touch typing tests
- export layouts (if possible)


# 3. Tech stack

Frontend:
- 

Backend:
- 


# 4. Design requirements

Colors must concentrate.