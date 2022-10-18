import { LayoutModel } from '../models/layout'
import { Analysis, StrNumPair } from '../models/analysis'

const jsonToAnalysis = (data: any): Analysis => (
  {
    ...data,
    // leftInwardRolls: data.leftInwardRolls,
    // leftOutwardRolls: data.leftOutwardRolls,
    // rightInwardRolls: data.rightInwardRolls,
    // rightOutwardRolls: data.rightOutwardRolls,
    // alternates: data.alternates,
    // onehands: data.onehands,
    // redirects: data.redirects,
    // weightedFingerSpeed: data.weightedFingerSpeed,
    // unweightedFingerSpeed: data.unweightedFingerSpeed,
    weightedHighestSpeed: {
      str: data.weightedHighestSpeed.finger,
      num: data.weightedHighestSpeed.value
    },
    unweightedHighestSpeed: {
      str: data.unweightedHighestSpeed.finger,
      num: data.unweightedHighestSpeed.value
    },
    // leftIndexUsage: data.leftIndexUsage,
    // rightIndexUsage: data.rightIndexUsage,
    // sfbs: data.sfbs,
    // dsfbs: data.dsfbs,
    // lsbs: data.lsbs,
    topSfbs: data.topSfbs.map((pair: any): StrNumPair => ({ str: pair.ngram, num: pair.count })),
    worstBigrams: data.worstBigrams
      .map((pair: any): StrNumPair => ({ str: pair.ngram, num: pair.count }))
  }
)

const analyze = async (layout: LayoutModel): Promise<Analysis> => {
  const uri = `https://genkey-api.herokuapp.com/together/?keys=${encodeURIComponent(layout.keys)}&fingers=${layout.fingers}`
  return await fetch(uri).then(data => data.json()).then(json => jsonToAnalysis(json))
}

export { analyze }