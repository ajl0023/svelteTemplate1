<script>
  import { creditsContent } from "../../pageContent";

  export let page;
</script>

<div class="page">
  <div
    class="container"
    style="
        justify-content: {page === 'left' ? 'flex-end' : 'flex-start'}
      "
  >
    <div class="sub-container">
      <div
        class="title-container"
        style="
        justify-content: {page === 'left' ? 'flex-end' : 'flex-start'}
      "
      >
        {#if page === "left"}<div class="title-image-container">
            <img
              src="https://res.cloudinary.com/dt4xntymn/image/upload/v1630882618/titleimages/Development_Credits_Left_hjeuwt.png"
              alt=""
            />
          </div>
        {:else}<div class="title-image-container">
            <img
              src="https://res.cloudinary.com/dt4xntymn/image/upload/v1630882618/titleimages/Development_Credits_Right_kpkmke.png"
              alt=""
            />
          </div>{/if}
      </div>
      <div class="content-container">
        {#if page === "left"}
          <div class="credits-container-sub">
            {#each creditsContent.slice(0, 2) as credit}
              <div class="credits-container">
                <h5 class="header">{credit.header}</h5>
                {#each credit.paragraphs as p}
                  <p>{p}</p>
                {/each}
              </div>
            {/each}
          </div>
        {:else}<div class="credits-container-sub">
            {#each creditsContent.slice(2, 6) as credit}
              <div class="credits-container">
                <h5 class="header">{credit.header}</h5>
                {#each credit.paragraphs as p}
                  <p>{p}</p>
                {/each}
              </div>
            {/each}
          </div>{/if}
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    width: 50vw;
    height: 100vh;
    display: flex;
    align-items: center;

    gap: 2rem;
    color: white;
    font-family: Orator;
    overflow: hidden;
  }
  .mobile-header {
    text-align: center;
  }
  .credits-container-sub {
  }
  .sub-container {
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }
  .title-container {
    width: 100%;
    display: flex;
    position: relative;

    .title-image-container {
      max-width: 400px;

      @media (max-width: 870px) {
        max-width: 200px;
      }
    }
    img {
      object-fit: contain;
      width: 100%;
    }
  }
  .content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    height: 700px;
    .credits-container {
      font-size: 1.3em;

      text-align: center;
      margin-bottom: 1rem;

      h5 {
        font-size: 1em;
        margin-bottom: 20px;

        @media (max-width: 1040px) {
          margin-bottom: 10px;
          font-size: 0.7em;
        }
      }
      p {
        font-family: "Roboto", sans-serif;
        font-size: 0.8em;
      }
      @media (max-width: 1270px) {
        p {
          font-size: 0.6em;
        }
      }
    }
    @media (max-width: 1270px) {
      height: 600px;
    }
  }

  .mobile-container {
    width: 100%;
    padding: 20px;
    text-align: center;

    .mobile-header-container {
      font-size: 1.6em;
      margin-bottom: 1rem;
    }
    .mobile-credits-container {
      margin-bottom: 2rem;
      &:not(:last-child)::after {
        content: "";
        display: block;
        width: 50px;
        height: 1px;
        padding: 20px;
        margin: auto;
        border-bottom: 1px solid white;
      }
    }
  }
</style>
