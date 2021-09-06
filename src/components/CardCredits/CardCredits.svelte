<script>
  import { creditsContent } from "../../pageContent";
</script>

<div id="credits" class="mobile-container">
  <div class="mobile-header-container">
    <h5>development credits</h5>
  </div>
  {#each creditsContent as credit}
    <div class="mobile-credits-container">
      <h5 class="bu-header">{credit.header}</h5>
      {#each credit.paragraphs as p}
        <p>{p}</p>
      {/each}
    </div>
  {/each}
</div>

<style lang="scss">
  .container {
    width: 50vw;
    height: 100vh;
    display: flex;
    align-items: center;

    gap: 2rem;
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
  h5 {
    font-size: 1em;
    margin-bottom: 20px;
    color: white;
    @media (max-width: 1040px) {
      margin-bottom: 10px;
      font-size: 0.7em;
    }
  }
  p {
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 0.8em;
  }
</style>
