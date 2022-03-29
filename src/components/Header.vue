<template>
    <header class="text-center bg-sky-500 text-white p-4 mb-10">
      <div class="text-3xl md:text-5xl font-bold mb-3 "><span><img :src="img" class="w-14 inline-block mb-2">ue</span> Covid-19 Tracker</div>

      <p>API By <span class="text-blue-200">covid19.api.com</span></p>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            img : '/logo.png'
        }
    },
    methods: {

    },
}
</script>