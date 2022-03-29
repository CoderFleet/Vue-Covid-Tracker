<template>
  <section class="text-gray-600 body-font w-full">
    <div class="container px-5 mx-auto">
      <button
        type="button"
        class="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        @click="$router.go(-1)"
      >
        <svg
          transform="rotate(180)"
          class="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="flex flex-col text-center w-full mb-2">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Search Your Country 👇
        </h1>
        <div class="flex justify-center mt-8">
          <div class="mb-3 xl:w-96">
            <div
              class="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded"
            >
              <input
                type="search"
                class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
                v-model="search"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap -m-4">
        <div
          class="p-4 md:w-1/3 cursor-pointer"
          v-for="country in filteredCountry"
          :key="country.ID"
          @click="$router.push(`/countries/${country.ID}`)"
        >
          <div
            class="flex rounded-lg h-full bg-gray-200 p-8 flex-col hover:bg-gray-300"
          >
            <div class="flex items-center mb-3">
              <div
                class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0"
              >
                <ion-icon name="analytics" class="text-2xl"></ion-icon>
              </div>
              <h2 class="text-gray-900 text-lg title-font font-medium">
                {{ country.Country }}
              </h2>
            </div>
            <div class="">
              <button
                type="button"
                class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  class="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Countries",
  data() {
    return {
      countries: [],
      search: ''
    };
  },
  methods: {
    async fetchCovidData() {
      const res = await fetch("https://api.covid19api.com/summary");
      const data = await res.json();
      return data;
    },
  },
  computed: {
    filteredCountry(){
      return this.countries.filter(country => country.Country.toLowerCase().includes(this.search.toLowerCase()))
    }
  },
  async created() {
    const data = await this.fetchCovidData();
    this.countries = data.Countries;
    console.log(this.countries);
  },
};
</script>
