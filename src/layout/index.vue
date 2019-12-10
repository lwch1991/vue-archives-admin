<template>
  <v-app id="inspire">
    <component :is="transition !== 'None' ? `v-${transition}` : 'div'" hide-on-leave>
      <v-skeleton-loader
        ref="skeleton"
        :boilerplate="boilerplate"
        :type="type"
        :tile="tile"
        width="536px"
        height="39px"
        v-if="loading"
        class="mx-auto"
      ></v-skeleton-loader>
      <header v-else>
        <div class="header-left"></div>
        <div class="header-middle">
          <h1>山西省审计厅综合管理平台</h1>
        </div>
        <div class="header-right"></div>
      </header>
    </component>
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
    transition: 'scale-transition',
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
    this.types = Object.keys(this.$refs.skeleton.rootTypes)
  }
}
</script>
<style lang="scss">
.v-skeleton-loader__heading {
  margin: 0 auto;
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
      font-size: 33px;
      padding-top: 50px;
      background: linear-gradient(180deg, #f6fcfe, #0db0eb 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
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
</style>
