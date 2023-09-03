type StrNumPair = {
  str: string
  num: number
}

type Analysis = {
  leftInwardRolls: number
  leftOutwardRolls: number
  rightInwardRolls: number
  rightOutwardRolls: number
  alternates: number
  onehands: number
  redirects: number
  weightedFingerSpeed: number[]
  unweightedFingerSpeed: number[]
  weightedHighestSpeed: StrNumPair
  unweightedHighestSpeed: StrNumPair
  leftIndexUsage: number
  rightIndexUsage: number
  sfbs: number
  dsfbs: number
  lsbs: number
  topSfbs: StrNumPair[]
  worstBigrams: StrNumPair[]
}

export type { Analysis, StrNumPair }
