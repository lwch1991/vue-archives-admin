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
        primary: '#3f51b5',
        secondary: '#03a9f4',
        accent: '#00bcd4',
        error: '#f44336',
        warning: '#ffeb3b',
        info: '#607d8b',
        success: '#4caf50'
      },
      dark: {
        primary: '#3f51b5',
        secondary: '#03a9f4',
        accent: '#00bcd4',
        error: '#f44336',
        warning: '#ffeb3b',
        info: '#607d8b',
        success: '#4caf50'
      },
    },
    isDark: true
  },
})

export default vuetify