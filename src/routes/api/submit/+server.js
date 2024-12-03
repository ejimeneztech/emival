import { supabase} from '$lib/supabase';

export async function POST({request}){
    const { storeName, productName, quantity} = await request.json();

    if (!storeName || !productName || !quantity) {
        return new Response(
          JSON.stringify({ error: 'All fields are required.' }),
          { status: 400 }
        );
      }

    const { data, error } = await supabase.from('Stores').insert([
        {
            "Store Name": storeName,
            "Product Name": productName,
            Quantity: quantity,
        },
    ]);

    if (error) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
        });
      }
    
      return new Response(JSON.stringify({ message: 'Data added successfully!' }), {
        status: 200,
      });

}