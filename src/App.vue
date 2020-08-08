<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import jwt_decode from "jwt-decode";
  export default {
    name: "app",
    created() {
      if (localStorage.eleToken) {
        const decode = jwt_decode(localStorage.eleToken);
        this.$store.dispatch("setIsAuthenticated", !this.isEmpty(decode));
        this.$store.dispatch("setUser", decode);
      }
    },
    methods: {
      isEmpty(value) {
        return (
            value === undefined ||
            value === null ||
            (typeof value === "object" && Object.keys(value).length === 0) ||
            (typeof value === "string" && value.trim().length === 0)
        );
      }
    }
  };
</script>

<style>
html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
