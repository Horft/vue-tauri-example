<template>
  <div class="home">
    TEST
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="$t('welcomeMessage')" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
