import { NextPage } from 'next';
import { Center, OutlinedButton } from '../components';

const AccountPage: NextPage = () => {

  const signOut = async () => {
    const { supa } = await import('../utils/supabase')
    supa.auth.signOut()
  }

  return (
    <Center>
      <div className='flex flex-col gap-5'>
        <h2>Hi! Support us on product hunt</h2>
        <OutlinedButton onClick={signOut}>Sign out</OutlinedButton>
      </div>
    </Center>
  )
}

export default AccountPage