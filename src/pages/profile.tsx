import { NextPage } from 'next';
import { Center, OutlinedButton } from '../components';
import { supa } from '../utils';

/*

[ ] Profile edit: change nickname, used layout
[ ] Layouts I have published

*/

const ProfilePage: NextPage = () => {

  return <>
    <Center>
      <div className='flex flex-col gap-5'>
        <h2>Hi! Support us on product hunt</h2>
        <OutlinedButton onClick={supa.auth.signOut}>Sign out</OutlinedButton>
      </div>
    </Center>
  </>
}

export default ProfilePage