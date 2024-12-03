import {supabase} from '$lib/supabase';

export async function GET(){
    // Need to add column names with spaces inside of ''
    const {data, error} = await supabase.from("Stores").select('"Store Name"');

    if (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
      }
      
      return new Response(JSON.stringify(data), { status: 200 });
}