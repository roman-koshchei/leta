import { NextPage } from 'next'
import { Center, Title } from '../components'

/*

[ ] Choose time or count of words: 15s, 30s, 60s, 120s, 10w, 25w, 50w, 100w
[ ] Choose the layout
[ ] (Re)Start test
[ ] Show the results: wpm, cpm, accuracity, amount of misses

*/

const Typing: NextPage = () => {
  return <>
    <Title>Typing test</Title>
    
    <Center className='text-2xl'>
      There will be typing tests.
    </Center>
  </>
}

export default Typing