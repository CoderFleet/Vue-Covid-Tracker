<template>
  <Header />
  <div class="container">
    <router-view v-slot="{ Component }">
      <transition name="slide">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease-out;
}

.slide-enter-to {
  position: absolute;
  right: 0%;
}

.slide-enter-from {
  position: absolute;
  right: -100%;
}

.slide-leave-to {
  position: absolute;
  left: -100%;
}

.slide-leave-from {
  position: absolute;
  left: 0%;
}
</style>
