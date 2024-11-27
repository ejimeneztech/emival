<script>
  export let data;
  let loading = true;

  // Assuming 'data' contains the correct structure, you can access 'stores' like this:
  const stores = data?.props?.stores || [];

  // Set loading to false once the component is mounted
  import { onMount } from 'svelte';
  onMount(() => {
    loading = false;
  });

  console.log(stores);  // Check if the stores are being loaded correctly
</script>

<h1>Reports</h1>

<h2>Total Sales</h2>

<label for="start">Fecha:</label><br>
<input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" /><br><br>

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
    {#each stores as store}
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
