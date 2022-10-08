import { NextPage } from 'next';
import { Center } from '../components';

const ErrorPage: NextPage = () => {
  return (
    <Center className='text-2xl'>
      Sorry page is not found. Thanks for being with us.
    </Center>
  )
}

export default ErrorPage