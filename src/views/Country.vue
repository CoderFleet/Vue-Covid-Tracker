<template>
  <section class="text-gray-600 body-font w-full">
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
    <div class="container px-5 py-24 mx-auto">
      <h1
        class="text-3xl font-medium title-font text-gray-900 mb-12 text-center"
      >
        {{ country.Country }}
      </h1>
      <div class="grid md:grid-cols-2 gap-4">
        <!-- Box 1 -->
        <div class="shadow-md bg-sky-100 p-10 text-center rounded">
          <h3 class="text-3xl text-sky-900 font-bold mb-4">Cases😷</h3>

          <div class="text-2xl mb-4">
            <span class="font-bold">New:</span>
            {{ numberFormatter(country.NewConfirmed) }}
          </div>
          <div class="text-2xl mb-4">
            <span class="font-bold">Total:</span>
            {{ numberFormatter(country.TotalConfirmed) }}
          </div>
        </div>
        <!-- Box 2 -->
        <div class="shadow-md bg-red-100 p-10 text-center rounded">
          <h3 class="text-3xl text-sky-900 font-bold mb-4">Deaths💀</h3>

          <div class="text-2xl mb-4">
            <span class="font-bold">New:</span>
            {{ numberFormatter(country.NewDeaths) }}
          </div>
          <div class="text-2xl mb-4">
            <span class="font-bold">Total:</span>
            {{ numberFormatter(country.TotalDeaths) }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Country",
  data() {
    return {
      country: {},
    };
  },
  methods: {
    async fetchCovidData() {
      const res = await fetch("https://api.covid19api.com/summary");
      const data = await res.json();
      return data;
    },
    numberFormatter(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  async created() {
    const data = await this.fetchCovidData();
    const countries = data.Countries;
    let obj = countries.find((o) => o.ID === this.$route.params.id);
    this.country = obj;
  },
};
</script>
