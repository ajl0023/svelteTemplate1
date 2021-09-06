<script>
  import Logo from "../../images/svgs/Logo/Logo.svelte";

  import { navButtons } from "../../pageContent";
</script>

<div>
  <input type="checkbox" id="burger-trigger" class="burger-input" />
  <label for="burger-trigger" class="burger-label">
    <span class="main-trigger-icon-container">
      <i class="main-trigger-icon" />
    </span>
  </label>
  <div class="side-menu-container">
    <ul name="list-container" class="side-menu-item-container">
      {#each navButtons as label}
        <li>
          {label}
        </li>
      {/each}
    </ul>
    <div class="sidebar-logo-container">
      <a href="https://www.apeldesign.com/">
        <Logo class="sidebar-logo" alt="" />
      </a>
    </div>
  </div>

  <div data-id="header-mask" class="header-mask" />
</div>

<style lang="scss">
  @mixin side-menu-container($leftValue) {
    background-color: white;
    height: 100vh;

    bottom: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    transition: all 400ms ease-in-out;
    z-index: 3;
    left: $leftValue;

    position: absolute;
    .side-menu-item-container {
      padding: 40px 8px;
      overflow-y: scroll;
      height: 100%;
      margin-top: 1.5rem;
      &::-webkit-scrollbar {
        display: none;
      }
      li:nth-child(-n + 10) {
        font-size: 23px;
        font-weight: 600;
        display: flex;
        text-transform: uppercase;
        align-items: center;
        color: black;
        cursor: pointer;
        padding: 20px 110px 20px 20px;

        border-bottom: 1px solid #d0d1d2;
      }
    }
  }
  .container {
    width: 100%;
    position: fixed;
    z-index: 3000;
    .content {
      padding: 12px 15px;
      display: flex;
      z-index: 1;
      align-items: center;
      color: black;
      width: 100%;
      font-size: 14px;
      justify-content: space-between;
      position: relative;
    }
    .item-container {
      font-size: 14px;
      display: flex;
      font-weight: 600;
      text-align: center;
      justify-content: center;
      text-transform: uppercase;
      position: relative;
      gap: 12px;
      flex: 1;

      li {
        white-space: nowrap;
        display: list-item;
        cursor: pointer;
      }
    }
    .logo {
      object-position: center center;
      max-width: 78px;
      width: 100%;
      display: block;
      height: auto;
      cursor: pointer;
    }
    .logo-container {
      flex: 1;
    }
    .user-options-container {
      flex: 1;
      font-size: 13px;
      font-weight: 600;
      text-transform: uppercase;
      display: flex;
      gap: 10px;
      cursor: pointer;

      align-items: center;
      justify-content: flex-end;
    }
  }
  .burger-label {
    block-size: 18px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    inline-size: 18px;
    font-size: 14px;

    line-height: 21px;

    align-items: center;
    .main-trigger-icon-container {
      position: relative;
      display: block;
      block-size: 18px;
      inline-size: 100%;
      .main-trigger-icon {
        background-color: white;
        inline-size: 100%;
        position: absolute;
        display: block;
        transition: all 300ms ease-in-out;
        block-size: calc(20px / 10);
        top: calc(36% + 2px);

        &:before {
          transition: all 300ms ease-in-out;
          block-size: calc(20px / 10);
          background-color: white;
          content: "";
          top: -5px;
          display: block;
          position: absolute;
          inline-size: 100%;
        }
        &:after {
          transition: all 300ms ease-in-out;
          block-size: calc(20px / 10);
          background-color: white;
          content: "";
          top: 5px;
          display: block;
          position: absolute;
          inline-size: 100%;
        }
      }
    }
  }
  .burger-input {
    opacity: 1;
    display: none;
    &:checked ~ .burger-label {
      z-index: 4;

      .main-trigger-icon {
        transition: all 300ms ease-in-out;
        background-color: transparent;

        &:before {
          top: 0;
          z-index: 4;
          background-color: black;
          transform: rotate(45deg);
          transition: all 300ms ease-in-out;
        }
        &:after {
          top: 0;

          z-index: 4;
          background-color: black;
          transform: rotate(-45deg);
          transition: all 300ms ease-in-out;
        }
      }
    }

    &:checked ~ .side-menu-container {
      @include side-menu-container(0);
    }
    &:checked ~ .header-mask {
      position: fixed;
      block-size: 100vh;
      top: 0;
      left: 0;
      z-index: 2;
      bottom: 0;
      inline-size: 100%;

      // pointer-events: none;
      // cursor: not-allowed;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  .hide-scroll {
    overflow: hidden;
  }
  .side-menu-container {
    position: relative;
    @include side-menu-container(-600px);
  }
  .sidebar-logo-container {
    max-width: 266px;
    margin: auto;
    padding: 30px;
    .sidebar-logo {
      width: 100%;
      fill: black;
    }
  }
</style>
