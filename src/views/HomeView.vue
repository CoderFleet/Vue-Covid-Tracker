<template>
  <main v-if="!loading" style="w-full">
    <DataTitle :text="title" :dataDate="dataDate" />
    <DataBoxes :stats="stats" />
    <div class="flex items-center my-12 justify-center">
      <button
        class="bg-sky-500 hover:bg-sky-600 px-5 py-4 text-2xl rounded-full font-semibold text-white hover:scale-125 ease-in duration-150 active:bg-sky-800 focus:ring focus:ring-sky-300 focus:outline-none"
        @click="goToCountries"
      >
        Go To Countries
      </button>
    </div>
  </main>

  <main class="flex flex-col align-center justify-center text-center" v-else>
    <div class="text-gray-500 text-3xl mt-10 mb-6">Fetching Data📦...</div>
  </main>
</template>

<script>
import DataTitle from '../components/DataTitle.vue';
import DataBoxes from "../components/DataBoxes.vue";
export default {
  name: "HomeView",
  components: {
    DataTitle,
    DataBoxes,
  },
  data() {
    return {
      loading: true,
      title: "Global",
      dataDate: "",
      stats: {},
      countries: [],
    };
  },
  methods: {
    async fetchCovidData() {
      const res = await fetch("https://api.covid19api.com/summary");
      const data = await res.json();
      return data;
    },
    async clearCountryData() {
      this.loading = true;
      const data = await this.fetchCovidData();
      this.title = "Global";
      this.stats = data.Global;
      this.loading = false;
    },
    goToCountries() {
      this.$router.push("/countries");
    },
  },
  async created() {
    const data = await this.fetchCovidData();
    this.dataDate = data.Date;
    this.stats = data.Global;
    this.countries = data.Countries;
    this.loading = false;
  },
};
</script>
