import { LayoutModel } from "../models/layout"
import { Analysis, StrNumPair } from "../models/analysis"

const jsonToAnalysis = (data: any): Analysis => ({
  ...data,
  weightedHighestSpeed: {
    str: data.weightedHighestSpeed.finger,
    num: data.weightedHighestSpeed.value,
  },
  unweightedHighestSpeed: {
    str: data.unweightedHighestSpeed.finger,
    num: data.unweightedHighestSpeed.value,
  },
  topSfbs: data.topSfbs.map(
    (pair: any): StrNumPair => ({ str: pair.ngram, num: pair.count })
  ),
  worstBigrams: data.worstBigrams.map(
    (pair: any): StrNumPair => ({ str: pair.ngram, num: pair.count })
  ),
})

const genkeyApiUrl = process.env.NEXT_PUBLIC_GENKEY_API_URL ?? ""

const analyze = async (layout: LayoutModel): Promise<Analysis> => {
  const uri = new URL(
    `/together/?keys=${encodeURIComponent(layout.keys)}&fingers=${
      layout.fingers
    }`,
    genkeyApiUrl
  )
  return await fetch(uri)
    .then((data) => data.json())
    .then((json) => jsonToAnalysis(json))
}

export { analyze }
