import { FingerNames, StrNumPair } from '../../models'

// Fingres speed block in AnalysisTable

type FingerSpeedProps = {
  weight: 'Weighted' | 'Unweighted',
  speed: number[]
}

const FingerSpeed = ({ weight, speed }: FingerSpeedProps) => (
  <div>
    <h3 className='font-semibold text-xl'>{weight} finger speed</h3>
    <div className='grid grid-rows-2 grid-flow-col place-content-between'>
      {speed.map(speed => <div key={`fingerSpeed-${speed}`}>{speed.toFixed(4)}</div>)}
    </div>
  </div>
)


// Highest speed block in AnalysisTable

type HighestSpeedProps = {
  label: string
  speed: StrNumPair
}

const HighestSpeed = ({ label, speed }: HighestSpeedProps) => {
  const hand = speed.str[0] == 'R' ? 'Right' : 'Left'
  const fingerName = FingerNames.find(name => name[0] == speed.str[1])
  return (
    <div className='flex justify-between' >
      <span>{label}</span>
      <span>{hand} {fingerName}</span>
      <span>{speed.num.toFixed(3)}</span>
    </div >
  )
}


export { FingerSpeed, HighestSpeed }