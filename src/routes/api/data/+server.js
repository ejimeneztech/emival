// src/routes/api/data/+server.js
import pkg from 'pg';
const { Client } = pkg;

export async function GET() {
  const client = new Client({ connectionString: process.env.DATABASE_URL });

  try {
    await client.connect();
    const result = await client.query('SELECT * FROM your_table');
    return new Response(JSON.stringify(result.rows), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Database error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
    });
  } finally {
    await client.end();
  }
}
