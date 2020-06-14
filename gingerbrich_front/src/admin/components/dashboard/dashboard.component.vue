<template>
  <v-card fill-height class="dashboard d-flex">
    <v-btn>
      <router-link to="/addBrand">Brand</router-link>
    </v-btn>
    <v-btn>
      <router-link to="/addCatalogue">Category</router-link>
    </v-btn>
    <v-btn>
      <router-link to="/addProduct">Product</router-link>
    </v-btn>
  </v-card>
</template>
<style src="./dashboard.component.scss" scoped lang="scss"></style>
<script>
export default{
  name:"Dashboard"
}
</script>