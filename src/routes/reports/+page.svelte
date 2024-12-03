<script>
  export let data;
  let loading = true;

  // Assuming 'data' contains the correct structure, you can access 'stores' like this:
  const stores = data?.props?.stores || [];
  let filteredStores = []; // Stores filtered based on the selected date

  // Date filtering variables
  let selectedDate = '';

  // Set loading to false once the component is mounted
  import { onMount } from 'svelte';
  onMount(() => {
    loading = false;
    filteredStores = stores; // Initialize with all stores
  });

  // Update filteredStores when selectedDate changes
  $: if (selectedDate) {
    filteredStores = stores.filter(store => {
      const storeDate = new Date(store.created_at).toISOString().split('T')[0]; // Format date as YYYY-MM-DD
      return storeDate === selectedDate;
    });
  }
</script>

<h1>Reports</h1>

<h2>Total Sales</h2>

<label for="start">Fecha:</label><br>
<input 
  type="date" 
  id="start" 
  bind:value={selectedDate} 
  min="2024-11-01" 
  max="2025-12-31" 
/><br><br>

<table>
  <thead>
    <tr>
      <th>Store Name</th>
      <th>Product Name</th>
      <th>Quantity</th>
      <th>Created At</th>
    </tr>
  </thead>
  <tbody>
    {#each filteredStores as store}
      <tr>
        <td>{store["Store Name"]}</td>
        <td>{store["Product Name"]}</td>
        <td>{store.Quantity}</td>
        <td>{new Date(store.created_at).toLocaleString()}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table, th, td {
    border: 1px solid black;
    padding: 5px;
  }
</style>
