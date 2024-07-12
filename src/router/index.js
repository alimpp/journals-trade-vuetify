import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "journals",
    redirect: "/journals",
    component: () => import("@/layouts/main.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: function () {
          return import("@/pages/dashboard.vue");
        },
      },
      {
        path: "/journals",
        name: "journals",
        component: function () {
          return import("@/pages/journals.vue");
        },
      },
      {
        path: "/journals/:id",
        name: "editJournal",
        component: function () {
          return import("@/pages/editJournal.vue");
        },
      },
      {
        path: "/profile",
        name: "profile",
        component: function () {
          return import("@/pages/profile.vue");
        },
      },
      {
        path: "/create-journal",
        name: "createJournal",
        component: function () {
          return import("@/pages/createJournal.vue");
        },
      },
      {
        path: "/coin-list",
        name: "coinList",
        component: function () {
          return import("@/pages/coinList.vue");
        },
      },
      {
        path: "/watch-list",
        name: "watchList",
        component: function () {
          return import("@/pages/watchList.vue");
        },
      },
      {
        path: "/holder",
        name: "holder",
        component: function () {
          return import("@/pages/holder.vue");
        },
      },
    ],
  },
  {
    path: "/create-profile",
    name: "createProfile",
    component: function () {
      return import("@/pages/createProfile.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
