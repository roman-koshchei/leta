import { Finger } from "./enums";

interface KeyDTO {
  primary: string
  shift: string
  finger: Finger
}

interface KeyInfo extends KeyDTO {
  active: boolean
}

interface StrNumPair {
  str: string
  num: number
}

interface Analysis {
  leftInwardRolls: number
  leftOutwardRolls: number
  rightInwardRolls: number
  rightOutwardRolls: number
  alternates: number
  onehands: number
  redirects: number
  weightedFingerSpeed: number
  unweightedFingerSpeed: number
  weightedHighestSpeed: StrNumPair
  unweightedHighestSpeed: StrNumPair
  leftIndexUsage: number
  rightIndexUsage: number
  sfbs: number
  dsfbs: number
  lsbs: number
  topSfbs: StrNumPair[]
  worstBigrams: StrNumPair[]
  score: number
}

const FingerColors = new Map<Finger, string>(
  [
    [Finger.LeftPinky, "bg-emerald-500"],
    [Finger.LeftRing, "bg-emerald-400"],
    [Finger.LeftMiddle, "bg-emerald-300"],
    [Finger.LeftIndex, "bg-emerald-200"],
    [Finger.LeftThumb, "bg-zinc-300"],
    [Finger.RightThumb, "bg-zinc-200"],
    [Finger.RightIndex, "bg-blue-200"],
    [Finger.RightMiddle, "bg-blue-300"],
    [Finger.RightRing, "bg-blue-400"],
    [Finger.RightPinky, "bg-blue-500"],
  ]
)


export type { KeyInfo, KeyDTO, Analysis, StrNumPair }
export { FingerColors }