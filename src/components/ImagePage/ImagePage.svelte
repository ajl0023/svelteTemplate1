﻿<script>
  import { modal } from "../../stores";

  export let index;
  const images = [
    {
      type: "image",
      url: "https://res.cloudinary.com/dt4xntymn/image/upload/v1630790318/misc/bgPhotos/bg1_lcs2gw.jpg",
    },
    {
      type: "image",
      url: "https://res.cloudinary.com/dt4xntymn/image/upload/v1630790318/misc/bgPhotos/bg2_oyi2w7.jpg",
    },

    {
      type: "image",
      url: "https://res.cloudinary.com/dt4xntymn/image/upload/v1630790318/misc/bgPhotos/bg3_mi7jx9.jpg",
    },
    {
      videoUrl: "https://www.youtube.com/embed/nTS10ZQM5Ms",
      type: "video",
      url: "https://res.cloudinary.com/dt4xntymn/image/upload/v1630790318/misc/bgPhotos/bg4_ma0d9j.jpg",
    },
    {
      type: "video",
      url: "https://res.cloudinary.com/dt4xntymn/image/upload/v1630790322/misc/bgPhotos/drone_s8lkqw.png",
    },
  ];
  $: {
  }
</script>

<div
  on:click={() => {
    if (images[index].type === "video") {
      $modal.visibility = true;
      $modal.content = images[index].videoUrl;
      $modal.type = "video";
    }
  }}
  class="page "
>
  <div class="image-container {images[index].type === 'video' ? 'blur' : ''} ">
    {#if images[index].type === "video"}
      <img
        alt=""
        src="https://res.cloudinary.com/dt4xntymn/image/upload/v1630788553/misc/playButton_rbgj1t.png"
        class="play-button"
      />
    {/if}

    <img src={images[index].url} alt="" class="main-image" />
  </div>
</div>

<style lang="scss">
  .blur {
    left: 0;
    right: 0;
    z-index: 0;
    position: relative;

    &::before {
      pointer-events: none;
      position: absolute;
      content: "";
      height: 100%;
      display: block;
      left: 0;
      right: 0;
      top: 0;

      backdrop-filter: blur(5px);
    }
  }
  .image-container {
    height: 100%;
    .main-image {
      width: 100%;
      object-fit: cover;
      height: 100%;
    }
  }
  .play-button {
    position: absolute;
    width: 160px;
    position: absolute;
    top: 50%; /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */

    transform: translate(-50%, -50%);
    height: auto;
    z-index: 5;
    object-fit: cover;
  }
</style>
