import { Analysis } from '../../models'
import { FingerSpeed, HighestSpeed } from './Speed'
import { Hand } from './Hand'
import { BasicStats } from './Basic'

// Block of analysis gotten from genkey-api

type AnalysisTableProps = {
  analysis: Analysis
  className?: string
}

const AnalysisTable = ({ analysis, className }: AnalysisTableProps) => (
  <div className={className}>

    <div className='grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-24 lg:gap-x-32 gap-y-5 mt-5'>

      <div>
        <h3 className='font-semibold text-xl'>Analysis</h3>
        <BasicStats analysis={analysis} />
      </div>

      <div>
        <h3 className='font-semibold text-xl'>Top same finger bigrams</h3>
        <div className='grid grid-rows-5 grid-flow-col place-content-between'>
          {analysis.topSfbs.map(sfb => <div key={`topSfb-${sfb.str}`}>{sfb.str} {sfb.num.toFixed(4)} %</div>)}
        </div>
      </div>

      <div >
        <h3 className='font-semibold text-xl'>Worst bigrams</h3>
        <div className='grid grid-rows-5 grid-flow-col place-content-between'>
          {analysis.worstBigrams.map(sfb => <div key={`worstBigram-${sfb.str}`}>{sfb.str} {sfb.num.toFixed(4)}</div>)}
        </div>
      </div>

      <Hand hand='left' analysis={analysis} />
      <Hand hand='right' analysis={analysis} />

      <div>
        <h3 className='font-semibold text-xl'>Highest speed</h3>
        <HighestSpeed label='Weighted' speed={analysis.weightedHighestSpeed} />
        <HighestSpeed label='Unweighted' speed={analysis.unweightedHighestSpeed} />
      </div>
    </div>

    <div className='grid md:grid-cols-2 gap-x-32 gap-y-5 my-5'>
      <FingerSpeed weight='Weighted' speed={analysis.weightedFingerSpeed} />
      <FingerSpeed weight='Unweighted' speed={analysis.unweightedFingerSpeed} />
    </div>

  </div >
)

/*
Rolls (l): 18.04%
        Inward: ~11.48%
        Outward: ~6.57%
Rolls (r): 28.64%
        Inward: ~13.75%
        Outward: ~14.89%
Alternates: ~30.81%
Onehands: ~2.51%
Redirects: ~10.74%
Finger Speed (weighted): [0.44 0.53 1.65 4.15 5.54 1.81 1.63 0.69]
Finger Speed (unweighted): [0.66 1.92 7.91 22.82 30.45 8.69 5.86 1.04]
Highest Speed (weighted): 5.54 (RI)
Highest Speed (unweighted): 30.45 (RI)
Index Usage: 19.2% 18.9%
SFBs: 1.092%
DSFBs: 7.903%
LSBs: 2.84%
Top SFBs:
        e, 0.183%       sc 0.138%       ue 0.129%       y. 0.087%
        nk 0.079%       pt 0.078%       nl 0.068%       kn 0.055%

Worst Bigrams:
        y. 16.681       lm 15.841       ue 14.676       lk 14.256
        sc 12.937       nk 12.795       gt 12.192       tb 9.998

Score: 52.51
*/

export { AnalysisTable }