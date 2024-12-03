<script>
  import { onMount } from 'svelte';

  let storeNames = [];
  let error = '';
  let selectedStore = '';
  let productName = '';
  let quantity = '';

  // Fetch store names on mount
  onMount(async () => {
    try {
      const res = await fetch('/api/store-names');
      if (!res.ok) throw new Error('Failed to fetch store names');
      storeNames = await res.json();
    } catch (err) {
      error = err.message;
    }
  });

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      storeName: selectedStore,
      productName,
      quantity: parseInt(quantity, 10),
    };

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error);
      }

      alert('Data submitted successfully!');
      // Optionally, clear the form
      selectedStore = '';
      productName = '';
      quantity = '';
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };
</script>

<label for="stores">Select Store:</label>
{#if storeNames.length}
  <select name="stores" id="stores" bind:value={selectedStore} required>
    {#each storeNames as store}
      <option value="{store['Store Name']}">{store['Store Name']}</option>
    {/each}
  </select>
{:else}
  <p>Loading store names...</p>
{/if}

<form on:submit={handleSubmit}>
  <label for="pname">Producto:</label><br />
  <input type="text" id="pname" name="pname" bind:value={productName} required /><br />

  <label for="qnty">Cantidad:</label><br />
  <input type="number" id="qnty" name="qnty" bind:value={quantity} required /><br /><br />

  <input type="submit" value="Submit" />
</form>

{#if error}
  <p style="color: red;">{error}</p>
{/if}
