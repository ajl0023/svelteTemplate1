﻿<script>
  import { modal } from "../../stores";
</script>

<div class="bu-modal {$modal.visibility ? 'bu-is-active' : ''}">
  <div
    on:click={() => {
      $modal.visibility = false;
    }}
    class="bu-modal-background"
  />
  <div class="bu-modal-content">
    <div class="bu-image bu-is-4by3">
      {#if $modal.type === "video"}
        <div class="video-container">
          <iframe
            height="100%"
            class="video-modal"
            width="100%"
            src={$modal.content}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      {:else}
        <img src={$modal.content} alt="" />
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  .bu-modal-content {

  }
  .video-container {
    .video-modal {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
    }
  }
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
</style>
