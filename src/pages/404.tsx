import { NextPage } from 'next';
import { Center, Title } from '../components';

const ErrorPage: NextPage = () => 
<>
  <Title>Page isn't found</Title>
  <Center className='text-2xl'>
    Sorry page is not found. Thanks for being with us.
  </Center>
</>


export default ErrorPage