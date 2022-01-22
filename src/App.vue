<template>
  <div class="min-h-screen flex flex-col">
    <Header></Header>
    <router-view class="flex-1 " />
  </div>
</template>
<script>
import Header from "@/components/Utilities/Header";
export default {
  components: {
    Header,
  },
};
</script>
<style>
</style>
