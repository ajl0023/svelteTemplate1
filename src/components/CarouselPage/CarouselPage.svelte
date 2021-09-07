<script>
  import Carousel from "@beyonk/svelte-carousel";
  export let page;
  import { images } from "./image";
</script>

<div class="page">
  <div
    style="align-items: {page === 'left' ? 'flex-end' : 'flex-start'}"
    class="flex-container"
  >
    <button on:click /> <button>-</button>
  </div>
</div>

<style lang="scss">
  .flex-container {
    display: flex;
    height: 100%;
    justify-content: center;
    flex-direction: column;
  }
</style>
