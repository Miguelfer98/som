<template>
  <main class="bg-green-800">
    <div class="flex justify-center h-screen">
      <div class="hidden lg:block lg:w-2/3">
        <div class="h-full w-full">
          <div class="h-full w-full flex flex-col justify-center items-center">
            <img class="h-[35rem]" src="../../public/img/logo-rio.png" />
          </div>
        </div>
      </div>
      <div class="flex items-center w-full max-w-md mx-auto lg:w-2/6">
        <div
          class="flex-1 bg-white p-5 h-[35rem] shadow-xl shadow-gray-800 rounded-xl flex flex-col justify-center"
        >
          <div class="text-center pb-8 px-10">
            <h2 class="text-[2.70rem] font-bold text-center text-gray-800">
              Bienvenido
            </h2>
            <p class="mt-3 text-gray-600">Ingrese usuario y contraseña.</p>
          </div>
          <div class="mt-8">
            <form>
              <label class="block mb-2 text-sm text-gray-600"
                >Nombre de usuario</label
              >
              <div class="relative flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-[1.1rem] w-[1.1rem] absolute mt-2 ml-1.5"
                >
                  <path
                    class="text-green-900"
                    d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"
                  />
                </svg>

                <input
                  v-model="comprobacion.Usernamne"
                  type="text"
                  class="block w-full px-7 py-2 mt-2 text-gray-800 border border-gray-600 rounded-md focus:bg-gray-100 bg-white"
                />
              </div>
              <div class="mt-6">
                <label class="block mb-2 text-sm text-gray-600"
                  >Contraseña</label
                >
                <div class="relative flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-[1.1rem] w-[1.1rem] absolute mt-2 ml-1.5"
                  >
                    <path
                      class="text-green-900"
                      fill-rule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <input
                    v-model="comprobacion.Password"
                    type="password"
                    class="block w-full px-7 py-2 mt-2 text-gray-800 border border-gray-600 rounded-md focus:bg-gray-100 bg-white"
                  />
                </div>
              </div>
              <div class="mt-8 flex justify-center">
                <button
                  type="submit"
                  @click.stop.prevent="BtnLogin"
                  class="w-[60%] py-2.5 tracking-wide text-gray-900 transition-colors duration-200 transform bg-gray-200 rounded-md hover:bg-gray-900 border border-gray-700 hover:text-white font-semibold"
                >
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
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
