import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';
// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

// const supa = createClient(supabaseUrl, supabaseAnonKey)

const supa = supabaseClient

export { supa }