<template>
  <div class="grid md:grid-cols-2 gap-4">
    <!-- Box 1 -->
    <div class="shadow-md bg-sky-100 p-10 text-center rounded">
      <h3 class="text-3xl text-sky-900 font-bold mb-4">Cases😷</h3>

      <div class="text-2xl mb-4">
        <span class="font-bold">New:</span>
        {{ numberFormatter(stats.NewConfirmed) }}
      </div>
      <div class="text-2xl mb-4">
        <span class="font-bold">Total:</span>
        {{ numberFormatter(stats.TotalConfirmed) }}
      </div>
    </div>
    <!-- Box 2 -->
    <div class="shadow-md bg-red-100 p-10 text-center rounded">
      <h3 class="text-3xl text-sky-900 font-bold mb-4">Deaths💀</h3>

      <div class="text-2xl mb-4">
        <span class="font-bold">New:</span>
        {{ numberFormatter(stats.NewDeaths) }}
      </div>
      <div class="text-2xl mb-4">
        <span class="font-bold">Total:</span>
        {{ numberFormatter(stats.TotalDeaths) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataBoxes",
  props: ["stats"],
  data() {
    return {};
  },
  methods: {
    numberFormatter(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style scoped></style>
