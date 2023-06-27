<script setup>
import {useUserstore} from "./components/stores/pinia"

import {ref,computed} from "vue";
const store =useUserstore();
const nameInput =ref("");
const nombre = () =>{
    store.changename(nameInput.value);
}
</script>


<template>
  <h1>yo soy {{store.user.name}} </h1>
  <h2>mi email {{ store.user.email }}</h2>
  <H2>website is {{ store.website }}</H2>
  <input
  type="text"
  placeholder="New Name"
  v-model="nameInput"
  />
  <button @click="nombre">change name</button>
</template>

<style scoped>

</style>
./stores/pinia