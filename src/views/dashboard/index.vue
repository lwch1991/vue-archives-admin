<template>
  <div class="dashboard-container">
    <v-row>
      <v-col cols="3" lg="3" md="12" sm="12">
        <v-card class="pa-2 item-1" outlined tile>
          <HotKeys />
        </v-card>
      </v-col>
      <v-col cols="6" lg="6" md="12" sm="12">
        <v-card class="pa-2 item-2" outlined tile>
          <SearchForm />
        </v-card>
      </v-col>
      <v-col cols="3" lg="3" md="12" sm="12">
        <v-card class="pa-2 item-1" outlined tile></v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" lg="6" md="12" sm="12">
        <v-card class="pa-2 item-1" outlined tile>
          <Approval />
        </v-card>
      </v-col>
      <v-col cols="6" lg="6" md="12" sm="12">
        <v-card class="pa-2 item-1" outlined tile></v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" lg="4" md="12" sm="12">
        <v-card class="pa-2 item-1" outlined tile></v-card>
      </v-col>
      <v-col cols="4" lg="4" md="12" sm="12">
        <v-card class="pa-2 item-1" outlined tile></v-card>
      </v-col>
      <v-col cols="4" lg="4" md="12" sm="12">
        <v-card class="pa-2 item-1" outlined tile></v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import './components'

export default {
  name: 'dashboard'
}
</script>
<style lang='scss' scoped>
.dashboard-container {
  background: transparent;
  .v-card {
    overflow: hidden;
  }
  .item-1 {
    height: 359px;
    border-radius: 5px;
    box-shadow: inset 0.5px 0.5px 40px 0px #002a6e;
    background: transparent;
  }
  .item-2 {
    height: 359px;
    background: rgba(0, 12, 39, 1);
    box-shadow: 2px 2px 15px 1px rgba(0, 10, 28, 0.48);
    border-radius: 6px;
  }
}
</style>