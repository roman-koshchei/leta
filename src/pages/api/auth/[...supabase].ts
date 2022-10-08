import { handleAuth } from '@supabase/auth-helpers-nextjs';

export default handleAuth({
  logout: {
    returnTo: '/auth'
  },
  cookieOptions: {
    lifetime: 3600 * 24 * 365
  }
})