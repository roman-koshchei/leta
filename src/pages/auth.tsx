import { NextPage } from 'next';
import { useState } from 'react';
import { Btn, Center, Input, Title } from '../components';

const AuthPage: NextPage = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [stage, setStage] = useState<'input' | 'success' | 'error'>('input')

  const handleAuth = async () => {
    setLoading(true)
    const { supa } = await import('../utils/supa');
    const { error } = await supa.auth.signIn({ email }, { shouldCreateUser: true })

    setStage(error ? 'error' : 'success')
    setLoading(false)
  }

  return (
    <>
      <Title>LETA - Start right now!</Title>

      <Center >
        <div className='max-w-lg'>
          {stage == 'error'
            ? <div className='text-2xl'>Sorry something went wrong. We will try to fix it as soon as possible. Thanks for being our user!</div>
            : stage == 'success'
              ? <div className='text-2xl'>Check your email to get magic link. Just click on it to start!</div>
              : <>
                <h1 className='text-5xl font-bold mb-5'>Start right now!</h1>
                <p className='text-lg mb-14'>
                  Email with magic link will be sent to your email. Just click on it, no password need.
                </p>

                <Input type='email' placeholder='email' value={email} onChange={(e: any) => setEmail(e.target.value)} />

                <div className='p-6'></div>

                {loading ?
                  <div>Wait a bit now to waste less time in future</div>
                  : <Btn onClick={(e) => {
                    e.preventDefault()
                    handleAuth()
                  }}>
                    Send magic link
                  </Btn>
                }
              </>
          }
        </div>
      </Center>
    </>
  )
}

export default AuthPage