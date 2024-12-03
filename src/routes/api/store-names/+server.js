import { supabase } from '$lib/supabase';

export async function GET() {
    const { data, error } = await supabase.from('Chain').select('*');

    if (error) {
        console.error('Supabase Error:', error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
}
