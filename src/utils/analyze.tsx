import { LayoutModel } from '../models/layout'
import { Analysis, StrNumPair } from '../models/analysis'
import { data } from 'autoprefixer'

const jsonToAnalysis = (data: any): Analysis => {
  return {
    leftInwardRolls: data.leftInwardRolls,
    leftOutwardRolls: data.leftOutwardRolls,
    rightInwardRolls: data.rightInwardRolls,
    rightOutwardRolls: data.rightOutwardRolls,
    alternates: data.alternates,
    onehands: data.onehands,
    redirects: data.redirects,
    weightedFingerSpeed: data.weightedFingerSpeed,
    unweightedFingerSpeed: data.unweightedFingerSpeed,
    weightedHighestSpeed: {
      str: data.weightedHighestSpeed.finger,
      num: data.weightedHighestSpeed.value
    },
    unweightedHighestSpeed: {
      str: data.unweightedHighestSpeed.finger,
      num: data.unweightedHighestSpeed.value
    },
    leftIndexUsage: data.leftIndexUsage,
    rightIndexUsage: data.rightIndexUsage,
    sfbs: data.sfbs,
    dsfbs: data.dsfbs,
    lsbs: data.lsbs,
    topSfbs: data.topSfbs.map((pair: any): StrNumPair => {
      return { str: pair.ngram, num: pair.count }
    }),
    worstBigrams: data.worstBigrams.map((pair: any): StrNumPair => {
      return { str: pair.ngram, num: pair.count }
    }),
    score: data.score
  }
}

const analyze = async (layout: LayoutModel) => {
  const uri = `https://genkey-api.herokuapp.com/together/?keys=${encodeURIComponent(layout.keys)}&fingers=${layout.fingers}`
  const analysis = await fetch(uri).then(data => data.json()).then(json => jsonToAnalysis(json))

  console.log(analysis)
}

export { analyze }