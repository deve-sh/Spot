import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL as string,
	process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY as string
);

export default supabase;
