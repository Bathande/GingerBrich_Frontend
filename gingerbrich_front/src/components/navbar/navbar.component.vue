<template>
  <v-card flat height="49px">
    <v-toolbar dense>
      <v-menu d-flex offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </v-btn>
        </template>
        <NavHamOption></NavHamOption>
      </v-menu>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title>GINGERBRICH</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
  </v-card>
</template>
<style src="./navbar.component.scss" scoped lang="scss"></style>

<script>
import NavHamOption from "./NavList/NavHamOption/NavHamOption.component"
export default {
    name:"navBar",
    components:{
        NavHamOption 
    }
}

</script>