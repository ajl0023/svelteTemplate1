﻿<script>
  import { currentPage } from "../../stores";

  export let page;
  let carouselPage = 0;
  let oldPage = 0;
  let initalIndex = 0;
  let changeVal;
  const images = [
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630815470/carouselThumbs/1_wohazp.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630815470/carouselThumbs/2_ntogjy.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630815470/carouselThumbs/3_wv7c2m.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630815470/carouselThumbs/4_kdlq6e.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630815470/carouselThumbs/5_dbtnm5.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630815470/carouselThumbs/6_h0qu9t.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630815471/carouselThumbs/7_khodvl.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630815471/carouselThumbs/8_gai2yo.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630815471/carouselThumbs/9_webihd.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630815470/carouselThumbs/10_ircdxh.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630815470/carouselThumbs/11_pe8ndb.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630815470/carouselThumbs/12_cnbadh.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630815470/carouselThumbs/13_vn65ka.jpg",
    "http://res.cloudinary.com/dt4xntymn/image/upload/v1630815470/carouselThumbs/14_ndznnt.jpg",
  ];
  let imagesToDisplay = [];

  currentPage.subscribe((value) => {
    carouselPage = value;

    oldPage = value;
  });
  $: {
    changeVal = Math.floor(carouselPage / 10);
  }
  $: {
    changeVal;
    imageFunc();
  }
  function imageFunc() {
    imagesToDisplay = [];
    if (carouselPage < oldPage) {
      initalIndex -= 15;
    }
    if (page === "left") {
      for (let i = initalIndex; i < initalIndex + 5; i++) {
        imagesToDisplay.push(images[i]);
      }
    } else {
      for (let i = initalIndex + 5; i < initalIndex + 10; i++) {
        imagesToDisplay.push(images[i]);
      }
    }

    initalIndex += 10;
    console.log(imagesToDisplay, page, initalIndex);
  }
</script>

<div
  style="padding:{page === 'left'
    ? '25px 7.5px 0px 0px'
    : '25px 0px 0px 7.5px'};
    
    "
  class="container"
>
  {#each imagesToDisplay as img, i}
    {#if img}
      <div
        style="border:{carouselPage === (page === 'right' ? i + 5 : i) ||
        carouselPage - 10 === (page === 'right' ? i + 5 : i)
          ? 'white 2px solid'
          : ''}"
        class="image-container"
      >
        <img src={img} alt="" />;
      </div>
    {:else}
      <div style="background-color:black" class="image-container" />
    {/if}
  {/each}
</div>

<style lang="scss">
  .image-container {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
  .container {
    gap: 15px;
    display: flex;
  }
</style>
