<script>
  import { textPages } from "../../pageContent";

  let showMore;
  export let page;
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
      type: "carousel",
    },
    {
      type: "carousel",
    },
    {
      type: "image",
      url: "https://res.cloudinary.com/dt4xntymn/image/upload/v1630790318/misc/bgPhotos/bg3_mi7jx9.jpg",
    },
    {
      type: "gallery",
      url: "https://res.cloudinary.com/dt4xntymn/image/upload/v1630790318/misc/bgPhotos/bg3_mi7jx9.jpg",
    },
    {
      type: "video",
      url: "https://res.cloudinary.com/dt4xntymn/image/upload/v1630790318/misc/bgPhotos/bg4_ma0d9j.jpg",
    },
    {
      type: "video",
      url: "https://res.cloudinary.com/dt4xntymn/image/upload/v1630790322/misc/bgPhotos/drone_s8lkqw.png",
    },
  ];
  console.log(index);
</script>

<div class="bu-card card-container">
  <div class="bu-card-image">
    <figure
      class="bu-image bu-is-4by3 {images[index].type === 'video' ? 'blur' : ''}"
    >
      {#if page.type === "video"}
        <div class="play-button-container">
          <figure class="image is-square ">
            <img
              src="https://res.cloudinary.com/dt4xntymn/image/upload/v1630788553/misc/playButton_rbgj1t.png"
              alt=""
            />
          </figure>
        </div>
      {/if}{#if page.type === "carousel"}
        <div class="play-button-container" />
      {:else}
        <img src={images[index] && images[index].url} alt="" />{/if}
    </figure>
  </div>
  <div class="card-content bu-card-content">
    <div class="bu-media">
      <div class="bu-media-left">
        <figure class="bu-image bu-is-48x48">
          <div style="background-color: white; height: 100%; width:100%;" />
        </figure>
      </div>
      {#if textPages[index]}
        <p class="title is-4 font-white">
          {textPages[index].header}
        </p>
      {/if}
    </div>
    <div class="content bu-is-clipped content font-white">
      {#if textPages[index]}
        {#each textPages[index].paragraphs as p}
          <p>{p}</p>
        {/each}
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  .font-white {
    color: white;
  }
  .card-content {
    background-color: transparent;
  }
  .play-button-container {
    position: absolute;
    width: 25%;
    top: 50%; /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */

    transform: translate(-50%, -50%);
    height: auto;
    z-index: 5;
    object-fit: cover;
  }
  .content {
    max-height: 20rem;
    overflow: hidden;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  .card-container {
    display: flex;
    flex-direction: column;
    background-color: transparent;
    &:nth-child(4) {
      .show-more {
        display: none !important;
      }
    }
  }
  .arrow {
    fill: white;
    transform: rotate(180deg);
  }
  .rotate {
    transform: rotate(0deg);
  }
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
      z-index: 2;
      backdrop-filter: blur(5px);
    }
  }
  .carousel-container {
    height: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
</style>
