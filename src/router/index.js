import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    // redirect: "Login",
    redirect: "HomeView",
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/account/LoginView.vue"),
  },
  {
    path: "/chatroom",
    name: "ChatRoom",
    component: () =>
      import(/* webpackChunkName: "ChatRoom" */ "../views/ChatRoom.vue"),
  },
  {
    path: "/homeview",
    name: "HomeView",
    component: () =>
      import(/* webpackChunkName: "HomeView" */ "../views/HomeView.vue"),
  },
  {
    path: "/uploadview",
    name: "UploadView",
    component: () =>
      import(/* webpackChunkName: "UploadView" */ "../components/UploadView.vue"),
  },
  {
    path: "/screenview",
    name: "ScreenView",
    component: () =>
      import(/* webpackChunkName: "ScreenView" */ "../views/ScreenView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
