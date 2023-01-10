import { defineStore } from "pinia";
/* import seguridad from "../services/SeguridadServices"; */
import { router } from "../router/index";
import Swal from "sweetalert2";

export const useUserStore = defineStore({
  id: "userStore",
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")),
    returnUrl: null,
  }),
  getters: {
    getUser:(state)=> state.user,
  },
  actions: {
    async login(username, password) {
      try {
        const seguro = await seguridad.login(username, password);

        if (seguro.data) {
          this.user = seguro.data;
          localStorage.setItem("user", JSON.stringify(seguro.data));
          //router.push("/")
          router.push(this.returnUrl || "/");
        } else {
          Swal.fire({ customClass:"swal-color", color: "black", title: "Usuario o clave inválida", confirmButtonColor: "#087334"  });
        }
      } catch (e) {}
    },
    logout() {
      this.user = null;
      localStorage.removeItem("user");
      router.push("/login");
    },
  },
});