<template>
  <nav
    class="
      border-b
      font-sans
      flex flex-col
      text-center
      sm:flex-row sm:text-left sm:justify-between
      py-4
      px-6
      bg-white
      shadow
      sm:items-baseline
      w-full
    "
  >
    <div class="mb-2 sm:mb-0">
      <router-link
        :to="{ name: 'ContactList' }"
        class="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >Vue.js + Laravel CRUD</router-link
      >
    </div>
    <div>
      <router-link
        :to="{ name: 'ContactList' }"
        class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >Home</router-link
      >
      <router-link
        :to="{ name: 'ContactAdd' }"
        class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >Add Contact</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
</style>