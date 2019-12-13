<template>
  <div class="search-from-container">
    <v-form ref="form" v-model="valid" lazy-validation>
      <div class="stab">
        <ul class="clearfix">
          <li
            v-for="(el,i) in stabls"
            @click="activeHandle(i)"
            :class="i == isActive ? 'active' :''"
            :key="i"
            v-text="el.text"
          ></li>
        </ul>
      </div>

      <v-row class="sipt">
        <v-col cols="10">
          <v-row no-gutters class="boxs">
            <v-col cols="2">
              <v-select v-model="select" :items="items" filled label="Filled style"></v-select>
            </v-col>
            <v-col cols="8"></v-col>
            <v-col cols="2"></v-col>
          </v-row>
        </v-col>
        <v-col cols="2">
          <v-btn text="true">高级检索</v-btn>
        </v-col>
      </v-row>

      <v-row class="menuNav">
        <v-col cols="2" lg="2">1</v-col>
        <v-col cols="2" lg="2">2</v-col>
        <v-col cols="2" lg="2"></v-col>
        <v-col cols="2" lg="2"></v-col>
        <v-col cols="2" lg="2"></v-col>
        <v-col cols="2" lg="2"></v-col>
      </v-row>
    </v-form>
  </div>
</template>


<script>
export default {
  name: 'SearchForm',
  data() {
    return {
      valid: false,
      isActive: 0,
      select: null,
      stabls: [
        { text: '文书' },
        { text: '审计' },
        { text: '基建' },
        { text: '会计' },
        { text: '音像' },
        { text: '荣誉资质' }
      ],
      items: ['全文', '题名', '责任者', '归档单位']
    }
  },
  created() {},
  methods: {
    activeHandle(i) {
      this.isActive = i
    }
  }
}
</script>
<style lang='scss' scoped>
.search-from-container {
  padding: 22px 22px 34px;
  height: 100%;
  box-sizing: border-box;
  .stab {
    padding-bottom: 19px;
    li {
      color: #2082a7;
      padding: 0 16px;
      cursor: pointer;
      float: left;
    }
    .active {
      color: #1aa7dc;
    }
  }
  .sipt {
    // width: 779px;
    height: 53px;
    color: #2082a7;
    .row,
    .col-10 {
      height: 100%;
      padding: 0;
      .boxs {
        height: 53px;
        .col {
          height: 100%;
        }
      }
    }
  }
  .v-btn {
    color: #2082a7;
  }
  .menuNav {
    height: 117px;
    margin-top: 101px;
    .col {
      background-color: #011c71;
    }
  }
}
</style>

