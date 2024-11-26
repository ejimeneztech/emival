// src/routes/my-page/+page.server.js
export async function load({ fetch }) {
    const res = await fetch('/api/data');
    const data = await res.json();
    return { data };
  }
  