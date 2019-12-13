<template>
  <v-app id="inspire">
    <component :is="'div'" hide-on-leave>
      <v-skeleton-loader
        v-if="loading"
        dark
        ref="skeleton"
        :boilerplate="boilerplate"
        :type="type"
        :tile="tile"
        width="536px"
        style="padding-top:18px;"
        class="mx-auto"
      ></v-skeleton-loader>
      <header v-else>
        <div class="header-left"></div>
        <div class="header-middle">
          <h1>数字档案室管理平台</h1>
        </div>
        <div class="header-right"></div>
      </header>
    </component>

    <div v-if="!loading" class="app-dividers"></div>
    <v-container>
      <router-view />
    </v-container>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  // inject: ['theme'],
  data: () => ({
    loading: true,
    // transition: 'scale-transition',
    transitions: [
      {
        text: 'None',
        value: undefined
      },
      {
        text: 'Fade Transition',
        value: 'fade-transition'
      },
      {
        text: 'Scale Transition',
        value: 'scale-transition'
      }
    ],
    boilerplate: false,
    tile: false,
    type: 'heading',
    types: []
  }),
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  }
}
</script>
<style lang="scss">
.v-skeleton-loader__heading {
  margin: 0 auto;
  height: 39px !important;
  width: 70% !important;
}
</style>
<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 39px;
  background-color: #021132;
  .header-left,
  .header-right {
    width: 692px;
    height: 39px;
    background: linear-gradient(
      90deg,
      rgba(0, 68, 195, 0.9) 0%,
      rgba(0, 68, 195, 0.1) 100%
    );
    clip-path: polygon(0 0, 39px 100%, 100% 100%, 100% 0);
  }
  .header-left {
    transform: rotateY(180deg);
  }
  .header-middle {
    width: 536px;
    height: 39px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 32px;
      padding-top: 20px;
      margin: 0;
      background: linear-gradient(180deg, #f6fcfe, #0db0eb 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: normal;
    }
  }
  .header-middle::before,
  .header-middle::after {
    content: '';
    display: block;
    width: 10px;
    height: 39px;
    line-height: 39px;
    border: 1px solid #0043c0;
    border-top: 0;
    border-bottom: 0;
    position: absolute;
  }
  .header-middle::before {
    transform: skewX(-45deg);
    left: -6px;
  }

  .header-middle::after {
    transform: skewX(45deg);
    right: -6px;
  }
}
.app-dividers {
  margin: 0 auto;
  margin-top: 19px;
  height: 25px;
  width: 384px;
  border-bottom: 1px solid rgb(0, 68, 195);
  position: relative;

  &:before,
  &:after {
    content: '';
    display: block;
    width: 769px;
    height: 25px;
    position: absolute;
  }
  &:before {
    transform: skewX(45deg);
    left: -780px;
    top: 0;
    border: 1px solid rgb(0, 68, 195);
    border-left: 0;
    border-bottom: 0;
  }
  &:after {
    transform: skewX(-45deg);
    top: 0;
    right: -780px;
    border: 1px solid rgb(0, 68, 195);
    border-right: 0;
    border-bottom: 0;
  }
}
</style>
<style lang="scss" scoped>
.container {
  max-width: 100%;
  margin: 0;
  padding: 20px 30px;
}
</style>
