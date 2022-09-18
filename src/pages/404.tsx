import { NextPage } from 'next';
import { Center } from '../components';

const ErrorPage: NextPage = () => {
  return (
    <Center className='text-2xl'>
      Sorry something went wrong, we will try to fix it as soon as possible. Thanks for being with us.
    </Center>
  )
}

export default ErrorPage