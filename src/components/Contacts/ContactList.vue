<template>
  <div class="bg-gray-50 p-5 h-full">
    <div
      class="
        mt-12
        w-full
        max-w-6xl
        mx-auto
        bg-white
        shadow-lg
        rounded-sm
        border border-gray-200
      "
    >
      <header class="px-5 py-4 border-b border-gray-100">
        <h2 class="font-semibold text-gray-800">Contacts</h2>
      </header>
      <div class="p-3">
        <div class="overflow-x-auto">
          <table class="table-auto w-full">
            <thead
              class="text-xs font-semibold uppercase text-gray-400 bg-gray-50"
            >
              <tr>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">#</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">Name</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">Email</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">Designation</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">Contact No.</div>
                </th>
              </tr>
            </thead>
            <tbody class="text-sm divide-y divide-gray-100">
              <tr v-for="contact in contacts" :key="contact.id">
                <td class="p-2 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="font-medium text-gray-800">
                      {{ contact.id }}
                    </div>
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="font-medium text-gray-800">
                      {{ contact.name }}
                    </div>
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left">{{ contact.email }}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left font-medium text-green-500">
                    {{ contact.designation }}
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="font-medium text-gray-800">
                      {{ contact.contact_no }}
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ContactList",
  data() {
    return {
      contacts: [],
    };
  },
  created() {
    this.getContacts();
  },
  methods: {
    async getContacts() {
      let url = "http://127.0.0.1:8000/api/contacts";
      await axios
        .get(url)
        .then((response) => {
          this.contacts = response.data.contacts;
          console.log(this.contacts);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    console.log("Contact list component mounted");
  },
};
</script>

<style lang="scss" scoped>
</style>