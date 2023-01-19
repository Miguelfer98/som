const routes = [
  {
    path: "/",
    name: "HomeView",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/CuadreDeCaja",
    name: "CuadreDeCaja",
    component: () => import("../views/cuadre_de_caja.vue"),
  },
  {
    path: "/Resumen_De_Caja",
    name: "Resumen_De_Caja",
    component: () => import("../views/Resumen_De_Caja.vue"),
  },
];

export default routes;
