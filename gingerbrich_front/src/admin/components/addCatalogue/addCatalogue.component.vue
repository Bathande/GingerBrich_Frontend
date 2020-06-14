<template>
  <v-card>
    <v-text-field outlined flat dense v-model="name" label="Name">Name</v-text-field>
    <v-btn @click="back">Back</v-btn>
    <v-btn @click="submitCatelog">Add</v-btn>
  </v-card>
</template>
<style src="./addCatalogue.component.scss" scoped lang="scss"></style>
<script>
import { mapActions } from "vuex";
import router from "../../../router/index";
export default {
  name: "addCatalogue",
  data() {
    return {
      name: ""
    };
  },
  methods: {
    ...mapActions(["addCatelog"]),
    submitCatelog() {
      this.addCatelog({ name: this.name });
    },
    back() {
      router.push("/dashboard");
    }
  }
};
</script>