import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { Key, Title } from '../components'
// import { supabase } from '../utils/supa'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

/*
page will work as landing page
should include:
- call to action
- Product tagline
- Logos of your biggest clients
- Testimonials
- Product features
- Short instructive videos to promote features
*/

const BlackWhiteKey = ({ className = 'w-16' }: { className?: string }) => {
  return <Key className={`${className} bg-neutral-900 dark:bg-white`} />
}

const Home: NextPage<{ dev: any }> = ({ dev }) => {

  return (
    <>
      <Title>LETA - Type faster than ever</Title>

      <div className='grid grid-cols-1 md:grid-cols-2 h-full'>

        <div className='self-center'>
          <h1 className='text-5xl md:text-7xl font-bold mb-5 md:mb-10'>
            Type faster than ever with LETA
          </h1>
          <p className='text-xl md:text-2xl'>
            Find keyboard layout for you. <br />
            Try and practice it online. <br />
            Install on your computer.
          </p>
          {/* <p>
            eleifend fermentum magna, eu feugiat ante sollicitudin eget. Morbi condimentum nec enim sed laoreet. Quisque id elit non tortor ultrices rhoncus sed at sem. Morbi eu orci non dolor venenatis molestie nec et ipsum. Aliquam vel dolor nibh. Praesent vel ante vestibulum, lobortis diam non, eleifend nisl. Aenean a interdum enim. Nullam posuere justo vel lorem placerat, id auctor est vehicula. Donec sit amet quam aliquam, suscipit arcu a, malesuada lorem. Nam commodo interdum lacus ut efficitur. Donec finibus in enim ut porttitor. Nullam sollicitudin sollicitudin condimentum. Fusce hendrerit turpis dui, in cursus arcu viverra ornare.

            Pellentesque sed lectus sit amet purus fringilla tincidunt sed quis nisi. Praesent pharetra gravida elit et sodales. Pellentesque in elit non eros laoreet sagittis a in erat. In gravida feugiat ultricies. Aenean accumsan massa non nisi lobortis faucibus. In hac habitasse platea dictumst. Integer pretium odio odio, vestibulum fermentum neque tincidunt vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

            Morbi vehicula at enim ac placerat. Sed at est rhoncus, commodo lectus tincidunt, posuere mauris. Etiam blandit diam id mi condimentum venenatis. Sed a felis porta, ullamcorper justo vitae, blandit velit. Nulla convallis ornare posuere. Nunc convallis erat eu purus posuere porttitor. Donec finibus facilisis ante ut imperdiet. Nulla congue augue quis quam gravida, sed rutrum sem molestie.

            Sed et cursus odio. Donec id ante suscipit, hendrerit ante ut, aliquam magna. Praesent vehicula lacinia aliquam. Duis id massa porttitor, ornare velit non, imperdiet orci. Phasellus auctor, lorem convallis mattis malesuada, nulla tellus consequat ante, eget hendrerit quam dui sit amet nisi. Sed rutrum vulputate enim, eget efficitur lorem luctus ut. Nullam ac mi at lorem accumsan ultrices quis sed nisi. Donec at lorem mattis, lacinia leo nec, fringilla libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla ornare fringilla ante vitae mattis. Integer rutrum vulputate tellus id consectetur. Integer eu quam quis arcu aliquam bibendum sit amet a tortor. Pellentesque lacinia odio id elit dictum, ac pharetra sem accumsan. Praesent venenatis turpis nisl, egestas imperdiet nibh aliquet vel.

            Nullam malesuada dui id massa interdum, eu porttitor sapien scelerisque. Sed varius mi sed felis ullamcorper scelerisque. Etiam ornare neque eu nunc volutpat vestibulum. Vestibulum vel risus eros. Nam finibus, neque et gravida vehicula, lacus risus aliquam sem, quis congue purus enim at risus. Pellentesque nibh felis, gravida ut varius a, placerat
          </p> */}
        </div>


        <div className='aspect-[282/52] md:aspect-[282/68] w-[70rem] md:w-[106.25rem]
        md:self-center'>
          <div className='flex flex-col gap-3 md:gap-5 h-full'>

            <div className='hidden md:flex flex-auto gap-3 md:gap-5 h-16'>
              {[...Array(13)].map(() => <BlackWhiteKey />)}
              <Key className='w-[8.75rem] bg-white' />
            </div>

            <div className='flex flex-auto gap-3 md:gap-5 h-16'>
              <BlackWhiteKey className='w-[6.75rem]' />
              {[...Array(12)].map(() => <BlackWhiteKey />)}
              <BlackWhiteKey className='w-[6.75rem]' />
            </div>

            <div className='flex flex-auto gap-3 md:gap-5 h-16'>
              <BlackWhiteKey className='w-[7.75rem]' />
              {[...Array(11)].map(() => <BlackWhiteKey />)}
              <BlackWhiteKey className='w-[10.5rem]' />
            </div>

            <div className='flex flex-auto gap-3 md:gap-5 h-16'>
              <Link href='/auth'>
                <Key className='
                border-neutral-900 hover:bg-neutral-100 border-2 cursor-pointer
                dark:border-white dark:hover:bg-neutral-800 w-[10.5rem] select-none
                text-sm md:text-xl flex justify-center items-center 
                '>
                  Start for free
                </Key>
              </Link>
              {[...Array(10)].map(() => <BlackWhiteKey />)}
              <BlackWhiteKey className='w-[12.5rem]' />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

// const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
//   const { user } = await supabaseClient.auth.api.getUserByCookie(req, res)

//   if (user) {
//     return {
//       redirect: { destination: '/typing', permanent: false },
//       props: {}
//     }
//   }

//   return {
//     props: {
//       dev: {
//         u: user ?? '', //error?.message,
//         // e: error ?? null
//       },

//     }
//   }

// }

// export { getServerSideProps }
export default Home