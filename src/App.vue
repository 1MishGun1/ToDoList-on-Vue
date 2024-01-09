<template>
  <header-list />
  <content-list />
</template>

<script>
import HeaderList from "./components/HeaderList.vue";
import ContentList from "./components/ContentList.vue";

export default {
  name: "App",
  components: {
    HeaderList,
    ContentList,
  },
};
</script>

<style></style>
