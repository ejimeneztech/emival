<script>

</script>

<label for="cars">Select Store:</label>

<!-- load stores in db -->
<select name="cars" id="cars">
  <option value="volvo">Cardenas #2</option>
  <option value="saab">Superior #4</option>
  <option value="mercedes">El Torito</option>
  <option value="audi">Walmart</option>
</select>

<form action="/action_page.php">
    <label for="pname">Producto:</label><br>
    <input type="text" id="pname" name="pname" value="Pasilla"><br>
    <label for="qnty">Cantidad:</label><br>
    <input type="text" id="qnty" name="qnty" value="400"><br><br>
    <label for="start">Fecha:</label><br>
    <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" /><br><br>
    <input type="submit" value="Submit">
  </form>