<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.getUserInfo();
    this.getCartCount();

    // console.log("access_token：" + this.$cookie.get("access_token"));
    // console.log("refresh_token：" + this.$cookie.get("refresh_token"));
  },
  methods: {
    getUserInfo() {
      this.request({
        url: "/Users/GetUserInfo",
        method: "get"
      }).then(response => {
        if (response != null) {
          this.$store.dispatch("saveNickName", response.nickName);
        }
      });
    },
    getCartCount() {
      this.request({
        url: "/ShoppingCart/GetMyCartCount",
        method: "get"
      }).then(response => {
        // console.log(response);
        this.$store.dispatch("saveCartCount", response);
      });
    }
  }
};
</script>

<style>
/* @import './assets/scss/config.scss'; */
@import "./assets/scss/reset.scss";
</style>
