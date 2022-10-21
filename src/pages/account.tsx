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
        <a href="https://www.producthunt.com/posts/leta?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-leta" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=363667&theme=neutral" alt="LETA - You&#0032;can&#0032;type&#0032;faster&#0032;with&#0032;alternative&#0032;keyboard&#0032;layouts | Product Hunt" width="250" height="54" /></a>
        <OutlinedButton onClick={signOut}>Sign out</OutlinedButton>
      </div>
    </Center>
  )
}

export default AccountPage