<template>
  <div class="bg-green-800">
    <div class="flex justify-center h-screen">
      <div class="hidden lg:block lg:w-2/3 ">
        <div class="h-full w-full">
          <div class="h-full w-full flex flex-col justify-center items-center">
            <img class="h-[35rem]" src="../../public/img/logo-rio.png" />
          </div>
        </div>
      </div>
      <div class="flex items-center w-full max-w-md mx-auto lg:w-2/6">
        <div class="flex-1">
          <div class="text-center">
            <h2 class="text-4xl font-bold text-center text-white">
              Bienvenido
            </h2>
            <p class="mt-3 text-gray-300">Ingrese usuario y contraseña.</p>
          </div>
          <div class="mt-8">
            <form>
              <div>
                <label class="block mb-2 text-sm text-gray-200"
                  >Nombre de usuario</label
                >
                <input
                  v-model="comprobacion.Usernamne"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-200 rounded-md bg-white"
                />
              </div>

              <div class="mt-6">
                <div class="flex justify-between mb-2">
                  <label class="text-sm text-gray-200">Contraseña</label>
                </div>

                <input
                  v-model="comprobacion.Password"
                  type="password"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-200 rounded-md bg-white"
                />
              </div>

              <div class="mt-8 flex justify-center">
                <button
                  type="submit"
                  @click.stop.prevent="BtnLogin"
                  class="w-[70%] py-2.5 tracking-wide text-gray-900 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-900 hover:text-white font-semibold"
                >
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/useUserStore";

const user = useUserStore();

const comprobacion = {
  Usernamne: "",
  Password: "",
};

const BtnLogin = async () => {
  user.login(comprobacion.Usernamne, comprobacion.Password);
};
</script>

<style scoped></style>
