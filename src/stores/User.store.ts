import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    isLogin: false,
    userInfo: {},
  }),
  actions: {
    login() {
      this.$patch({
        isLogin: true,
        userInfo: {},
      });
    },
    logout() {
      this.$patch({
        isLogin: false,
        userInfo: {},
      });
    },
  },
});
