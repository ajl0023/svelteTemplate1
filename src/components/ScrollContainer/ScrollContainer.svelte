<script>
  import { onMount } from "svelte";

  import LeftContainer from "../LeftContainer/LeftContainer.svelte";
  import RightContainer from "../RightContainer/RightContainer.svelte";
  import { pageLength } from "../../pageContent";
  let leftPage;
  let rightPage;
  let carouselPage;

  let page = 0;
  let test = 0;
  let pagePositions = {
    left: 0,
    right: -window.innerHeight * 9,
  };
  let shouldScroll = true;

  const handleCarouselPage = (e) => {};
  const handleScrollAnimation = (e) => {
    const leftElement = leftPage.$$.ctx[0];
    const rightElement = rightPage.$$.ctx[0];

    if (window.innerWidth <= 650) {
      return;
    }
    if (shouldScroll) {
      if (e.deltaY > 0 && page < pageLength - 1) {
        pagePositions.left = pagePositions.left - window.innerHeight;
        pagePositions.right = window.innerHeight + pagePositions.right;

        leftElement.style.transform = `translateY( ${pagePositions.left}px)`;

        rightElement.style.transform = `translateY( ${pagePositions.right}px)`;

        page += 1;
      } else if (e.deltaY < 0 && page > 0) {
        pagePositions.left = pagePositions.left + window.innerHeight;
        pagePositions.right = pagePositions.right - window.innerHeight;
        leftElement.style.transform = `translateY( ${pagePositions.left}px)`;

        rightElement.style.transform = `translateY( ${pagePositions.right}px)`;

        page -= 1;
      }
      shouldScroll = false;
      setTimeout(() => {
        shouldScroll = true;
      }, 1100);
    }
  };
  //DELETE THIS
  onMount(() => {
    const leftElement = leftPage.$$.ctx[0];
    const rightElement = rightPage.$$.ctx[0];
    leftElement.style.transform = `translateY( ${window.innerHeight * -9}px)`;

    rightElement.style.transform = `translateY( ${0}px)`;
  });
</script>

<div class="scroll-container" on:mousewheel={handleScrollAnimation}>
  <LeftContainer bind:this={leftPage} />

  <RightContainer bind:this={rightPage} />
</div>

<style lang="scss">
  :global {
    .page {
      width: 50vw;
      height: 100vh;

      overflow: hidden;
    }
  }
</style>
