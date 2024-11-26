<script>
    import {onMount} from 'svelte';
    export let data;
    let loading = true;

    const {report} = data;

    onMount(() => {
        loading = false;
    });

</script>

<h1>Reports</h1>


<h2>Total Sales</h2>

<label for="start">Fecha:</label><br>
<input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" /><br><br>

<table>
    <thead>
      <tr>
        <th>Store Name</th>
        <th>Store Number</th>
        <th>Product Name</th>
        <th>Product ID</th>
        <th>Amount</th>
        <th>Total $</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cardenas</td>
        <td>#20</td>
        <td>Guajillo</td>
        <td>4322</td>
        <td>50</td>
        <td>$5000</td>
      </tr>
      <tr>
        <td>Superior</td>
        <td>#5</td>
        <td>Puya</td>
        <td>20</td>
        <td>$2000</td>
      </tr>
    </tbody>
  </table>

  <style>
    table, th, td {
      border:1px solid black;
    }
    </style>