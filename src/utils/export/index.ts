import { LayoutModel } from '../../models/layout'

type LayoutFile = {
  filename: string
  content: string
}

type LayoutExport = (layout: LayoutModel) => LayoutFile

// only for english letters
// for all change to comparing lower case and upper case
const isLetter = (str: string) => str.match(/[a-z]/i);

export * from './win'
export * from './linux'
export * from './mac'
export * from './download'

export { isLetter }
export type { LayoutFile, LayoutExport }