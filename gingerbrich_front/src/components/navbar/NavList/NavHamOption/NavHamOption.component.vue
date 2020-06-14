<template>
  <v-card tile>
    <v-list dense nav flat v-model="Item" class="nav-ham-option" inactive>
      <v-list-item v-for="(item,i) in Item" :key="i">
        <v-list-item-title>
          <router-link :to="'/'+ item">{{item}}</router-link>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<style src="./NavHamOption.component.scss" scoped lang="scss"></style>
<script>
export default {
  name: "NavHamOption.component",
  data() {
    return {
      Item: ["Register", "Login"]
    };
  }
};
</script>