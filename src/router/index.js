import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/store/useUserStore";
import routes from "./routes";

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  const publicPage = ["/login"];
  const authRequire = !publicPage.includes(to.path);
  const user = useUserStore();
  if (authRequire && !user.user) {
    user.returnUrl = to.fullPath;
    return "/login";
  }
});