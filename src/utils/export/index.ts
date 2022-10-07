export * from './win'
export * from './linux'
export * from './download'

// only for english letters
// for all change to comparing lower case and upper case
const isLetter = (str: string) => str.match(/[a-z]/i);

export { isLetter }