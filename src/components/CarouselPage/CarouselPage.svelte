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
  .carousel-container {
    width: 50%;
    height: 50%;
    display: flex;
    position: relative;
    padding: 20px;

    .item {
      position: absolute;
      width: 100%;
      height: 100%;
      &:nth-child(1) {
        background-color: red;
      }
      &:nth-child(2) {
        background-color: green;
      }
      &:nth-child(3) {
        background-color: blue;
      }
    }
  }
  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>
