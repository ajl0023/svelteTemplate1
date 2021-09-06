<script>
  import { onDestroy, onMount } from "svelte";

  import "svelte-watch";
  import CardContainer from "./components/CardContainer/CardContainer.svelte";
  import Navbar from "./components/Navbar/Navbar.svelte";
  import ScrollContainer from "./components/ScrollContainer/ScrollContainer.svelte";
  let windowThreshHold = false;
  function handleResponsiveResize() {
    if (window.innerWidth <= 650) {
      windowThreshHold = true;
      return;
    } else {
      windowThreshHold = false;
    }
  }
  onMount(() => {
    handleResponsiveResize();
    window.addEventListener("resize", handleResponsiveResize);
  });
  onDestroy(() => {
    window.removeEventListener("resize", handleResponsiveResize);
  });
</script>

<div>
  <Navbar />
  {#if !windowThreshHold}
    <ScrollContainer />
  {:else}
    <CardContainer />
  {/if}
</div>

<style lang="scss">
</style>
