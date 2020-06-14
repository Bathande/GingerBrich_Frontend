<template>
  <v-card flat>
    <v-form class="d-flex flex-column mt-5">
      <v-toolbar-title class="align-self-start mb-2">Add Brand</v-toolbar-title>
      <v-text-field flat outlined v-model="name" label="Name" class="w-25"></v-text-field>
      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="est"
            label="Picker without buttons"
            prepend-icon="event"
            readonly
            class="w-25"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="est" @input="menu2 = false"></v-date-picker>
      </v-menu>
      <v-textarea v-model="slogan" auto-grow solo outlined filled label="Slogan" rows="5"></v-textarea>
      <v-card flex outlined>
        <v-btn @click="back">Back</v-btn>
        <v-btn @click="addbrandFunc" class="align-self-start">Add</v-btn>
      </v-card>
      
    </v-form>
  </v-card>
</template>
<style src="./addBrand.component.scss" scoped lang="scss"></style>
<script>
import { mapActions } from "vuex";
import router from "../../../router/index";
export default {
  name: "addBrand",
  data() {
    return {
      name: "",
      est: new Date().toISOString().substr(0, 10),
      slogan: "",
      menu2: false
    };
  },
  methods: {
    ...mapActions(["addbrand"]),
    addbrandFunc() {
        const formData ={
            name:this.name,
            est:this.est,
            slogan:this.slogan
        }
      this.addbrand(formData);
    },
    back(){
      router.push("/dashboard")
    }
  }
};
</script>