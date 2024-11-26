// src/routes/+page.js or src/routes/index.js
export async function load({ fetch }) {
    const res = await fetch('/api/data');
    const data = await res.json();
  
    if (!res.ok) {
      return { props: { error: data.error } };  // Handle errors if needed
    }
  
    return { props: { stores: data } };  // Pass the fetched data to the page component
  }
  