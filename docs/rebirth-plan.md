# LETA: rebirth
It should be one click to use alternative keyboard layout.

```mermaid

flowchart TD
  leta{{LETA}}
  web 
  desktop
  views
  tauri
  next

  leta --> web
  leta --> desktop

  web --- views
  desktop --- views
  views --- next

  web --> next
  desktop --- tauri
  tauri --> next

```

```mermaid 

flowchart TD

  setup{{installer}}
  win
  mac
  linux

  setup --> win
  setup --> mac
  setup --> linux

  ci[custom\ninstaller]
  win --> ci
  ci --> kbdutool
  ci --> s[self written installer]

  mac --> keylayout

  linux --> xmodmap
  linux --> xkb

```