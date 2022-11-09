import { Analysis, StrNumPair } from '../../models'

// Stats associated with special hand in AnalysisTable

type HandProps = {
  hand: 'right' | 'left',
  analysis: Analysis
}

const HandRow = ({ str, num }: StrNumPair) => (
  <div className='flex justify-between'>
    <span>{str}</span>
    <span>{num.toFixed(4)} %</span>
  </div>
)

const Hand = ({ hand, analysis }: HandProps) => (
  <div>
    <h3 className='font-semibold text-xl'><span className='capitalize'>{hand}</span> hand</h3>
    <div className='flex flex-col'>
      <HandRow str='Rolls' num={analysis[`${hand}InwardRolls`] + analysis[`${hand}OutwardRolls`]} />
      <HandRow str='Inward rolls' num={analysis[`${hand}InwardRolls`]} />
      <HandRow str='Outward rolls' num={analysis[`${hand}OutwardRolls`]} />
      <HandRow str='Index usage' num={analysis[`${hand}IndexUsage`]} />
    </div>
  </div>
)

export { Hand }