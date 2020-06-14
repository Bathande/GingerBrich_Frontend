<template>
  <v-card>
    <v-form>
      <v-text-field class="w-25" outlined dense>Name</v-text-field>
      <v-radio-group v-model="radioGroup">
        <v-radio v-for="(n,index) in type" :key="index" :label="`${n}`" :value="n"></v-radio>
      </v-radio-group>
      <v-card >
        <v-checkbox v-for="(item,index) in type" :key="index"></v-checkbox>
      </v-card>
      <v-combobox class="w-25" dense autofocus outlined :items="brands" placeholder="Choose Brand"></v-combobox>
      <v-combobox class="w-25" dense autofocus outlined :items="brands" placeholder="Choose Brand"></v-combobox>
    </v-form>
  </v-card>
</template>
<style src="./AddProduct.component.scss" scoped lang="scss"></style>
<script>
import { mapActions } from "vuex";
export default {
  name: "addProduct",
  data() {
    return {
      name: "",
      brandName: "",
      size: "",
      color: "",
      stockLeft: "",
      discription: "",
      listProducts: [],
      listCatelog: [],
      
      //Temporal
      brands: ["Nike", "Adidas", "Puma", "LTD"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      type: ["Man", "Girls", "Boys", "Woman"],
      catelog: [""]
    };
  },
  methods: {
    ...mapActions["getdata"],
    created() {
      this.getdata();
    }
  }
};
</script>