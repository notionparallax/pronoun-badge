<script>
  import { person } from "./stores.js";

  export let pronounType;
  export let accepts;
  //   function increment() {
  //     // TODO increment the count
  //   }
</script>

<style>
  p.note {
    width: 20em;
    float: right;
    margin: 0;
  }
  div {
    border: 1px solid chocolate;
  }
</style>

<div>
  <label for={pronounType}>{pronounType}</label>
  <input name={pronounType} bind:value={person[pronounType]} />
  <p class="note">{pronounType}={person[pronounType]} {accepts}</p>
</div>
