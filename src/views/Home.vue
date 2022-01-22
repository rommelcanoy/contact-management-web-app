<template>
  <div class="home">
    <ContactList msg="This is the contactlist"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactList from '@/components/Contacts/ContactList.vue'

export default {
  name: 'Home',
  components: {
    ContactList
  }
}
</script>
