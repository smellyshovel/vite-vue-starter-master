<template>
  <button class="p-8 bg-red-500" @click="counter += 1">{{ counter }}</button>
</template>

<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useMainStore } from "../stores/main-store";

  const { counter } = storeToRefs(useMainStore());
</script>
