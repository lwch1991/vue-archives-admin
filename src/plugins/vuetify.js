import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'
import 'vuetify/src/styles/styles.sass'
Vue.use(Vuetify, {
  // iconfont: 'md',
});


const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#021132',
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
      dark: {
        primary: colors.blue.lighten3,
      },
    },
  },
})

export default vuetify