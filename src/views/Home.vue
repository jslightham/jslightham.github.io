<template>
    <ProfileComponent></ProfileComponent>
</template>

<script>
import ProfileComponent from '@/components/ProfileComponent.vue'
export default {
  name: "HomeComponent",
  props: {
    msg: String,
  },
  components: {
    ProfileComponent,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>
