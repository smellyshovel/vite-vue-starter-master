<template>
  <h1>{{ t("vite-vue-starter-master") }}</h1>
  <h2>{{ t("child-component") }}</h2>

  <p>Below is included component from the slave lib. Check out the source code to see typed props in action.</p>
  <slave-component v-bind="slaveComponentProps" />

  <p>Below is the slave lib's imported plain TS function invocation result</p>
  <p>{{ sumOfNumbers }}</p>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { SlaveComponent, utils } from "vite-vue-starter-slave";
  import { useI18n } from "vue-i18n";

  const { t } = useI18n();

  // this is how you can extract the package's components' props
  const slaveComponentProps = ref<InstanceType<typeof SlaveComponent>["$props"]>({
    greeting: "I can't be anything but string - TS won't allow",
  });

  const sumOfNumbers = utils.sum(3, 4);
</script>
