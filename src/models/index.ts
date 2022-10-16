import { Dispatch, SetStateAction } from 'react'

export * from './finger'
export * from './analysis'
export * from './key'

type State<T> = {
  val: T,
  set: Dispatch<SetStateAction<T>>
}

export type { State }