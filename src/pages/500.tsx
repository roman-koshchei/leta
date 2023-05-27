import { NextPage } from 'next';
import { Center, Title } from '../components';

const Error500: NextPage = () => {
  return <>
    <Title>Something went wrong</Title>
  
    <Center className='text-2xl'>
      Sorry something went wrong, we will try to fix it as soon as possible. Thanks for being with us.
    </Center>
  </>
}

export default Error500