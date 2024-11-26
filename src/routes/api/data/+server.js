// src/routes/api/data/+server.js
import { supabase } from '$lib/supabase'; // import your Supabase client

export async function GET() {
  // Query data from Supabase
  const { data, error } = await supabase.from('Stores').select('*');
  
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  // Return data as JSON
  return new Response(JSON.stringify(data), { status: 200 });
}
