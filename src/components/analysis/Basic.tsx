import { Analysis, StrNumPair } from '../../models'


// The most important and basic stats in AnalysisTable


/// Single stat

type OrderStatProps = StrNumPair & { mdOrder: number }

const OrderStat = ({ str, num, mdOrder }: OrderStatProps) => (
  <div className={`flex justify-between md:order-${mdOrder}`}>
    <span>{str}</span>
    <span>{num.toFixed(4)} %</span>
  </div>
)


/// Block of stats

type BasicStatsProps = { analysis: Analysis }

const BasicStats = ({ analysis }: BasicStatsProps) => (
  <div className='grid gap-x-14'>
    <OrderStat str='Alternates' num={analysis.alternates} mdOrder={1} />
    <OrderStat str='Onehands' num={analysis.onehands} mdOrder={3} />
    <OrderStat str='Redirects' num={analysis.redirects} mdOrder={5} />
    <OrderStat str='SFBs' num={analysis.sfbs} mdOrder={2} />
    <OrderStat str='DSFBs' num={analysis.dsfbs} mdOrder={4} />
    <OrderStat str='LSBs' num={analysis.lsbs} mdOrder={6} />
  </div>
)


export { BasicStats }