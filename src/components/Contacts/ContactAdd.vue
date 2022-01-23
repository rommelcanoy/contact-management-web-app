<template>
  <div class="bg-gray-50 p-5 h-full flex justify-center items-center">
    <div
      class="
        block
        p-6
        rounded-lg
        shadow-lg
        bg-white
        w-full
        md:w-1/2 md:max-w-md
      "
    >
      <header class="py-4 border-b border-gray-100">
        <h2 class="font-semibold text-gray-800">Add Contact</h2>
      </header>
      <div
        class="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3"
        role="alert"
        v-if="errors.length"
      >
        <ul>
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </div>
      <form @submit.prevent="saveContact" noValidate>
        <div class="form-group my-6">
          <label for="name" class="form-label inline-block mb-2 text-gray-700"
            >Name</label
          >
          <input
            type="text"
            class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700
              focus:bg-white
              focus:border-blue-600
              focus:outline-none
            "
            id="name"
            v-model="contact.name"
            placeholder="Enter name"
          />
        </div>

        <div class="form-group mb-6">
          <label for="email" class="form-label inline-block mb-2 text-gray-700"
            >Email address</label
          >
          <input
            v-model="contact.email"
            type="email"
            class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700
              focus:bg-white
              focus:border-blue-600
              focus:outline-none
            "
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group mb-6">
          <label
            for="exampleInputPassword2"
            class="form-label inline-block mb-2 text-gray-700"
            >Designation</label
          >
          <input
            v-model="contact.designation"
            type="text"
            class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700
              focus:bg-white
              focus:border-blue-600
              focus:outline-none
            "
            id="designation"
            placeholder="Enter designation"
          />
        </div>
        <div class="form-group mb-6">
          <label
            for="exampleInputPassword2"
            class="form-label inline-block mb-2 text-gray-700"
            >Contact No.</label
          >
          <input
            v-model="contact.contact_no"
            type="number"
            class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700
              focus:bg-white
              focus:border-blue-600
              focus:outline-none
            "
            id="contact_no"
            placeholder="Enter contact no."
          />
        </div>

        <button
          type="submit"
          class="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out
          "
        >
          Add Contact
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ContactAdd",
  data() {
    return {
      contact: {},
      // name: "",
      // email: "",
      // designation: "",
      // contact_no: "",
      errors: [],
    };
  },
  methods: {
    async saveContact() {
      this.errors = [];
      if (!this.contact.name) {
        this.errors.push("Name is required");
      }
      if (!this.contact.email) {
        this.errors.push("Email is required");
      }
      if (!this.contact.designation) {
        this.errors.push("Designation is required");
      }
      if (!this.contact.contact_no) {
        this.errors.push("Contact no. is required");
      }

      if (!this.errors.length) {
        let formData = new FormData();
        formData.append("name", this.contact.name);
        formData.append("email", this.contact.email);
        formData.append("designation", this.contact.designation);
        formData.append("contact_no", this.contact.contact_no);

        let url = "http://127.0.0.1:8000/api/save_contact";

        await axios
          .post(url, formData)
          .then((response) => {
            console.log(response);
            if (response.status == 200) {
              this.contact.name = "";
              this.contact.email = "";
              this.contact.designation = "";
              this.contact.contact_no = "";
              this.$toast.open({
                message: response.data.message,
                type: "success",
                position: "top",
                // all of other options may go here
              });
            }
            // else {
            //   console.log("There's something wrong with the request");
            // }
          })
          .catch((error) => {
            console.error(error.response);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>