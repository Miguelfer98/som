<template>
  <main class="h-full w-full flex flex-row">
    <SideBar class="z-50" />
    <div
      class="min-h-screen w-full flex flex-col justify-center items-end p-5 px-7"
    >
    <headbar text="Bienvenido" />
      <div
        class="h-[88%] w-[100%] text-white flex flex-col items-center justify-center text-center"
      >
        <div class="flex bg-white h-full rounded-xl w-[100%]">
          <div
            class="flex items-center rounded-xl text-center lg:text-left px-4 md:px-12 w-1/2"
          >
            <div>
              <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">
                Bienvenido a <a href=""></a>
                <span class="text-green-800">SOM</span>
              </h2>
              <p class="mt-2 text-sm text-gray-500 md:text-base">
                Tu sistema de asistencia para la administración empresarial,
                para facilitar la gestión y supervisión del comportamiento de
                las cajas.
              </p>
              <div class="flex justify-center lg:justify-start mt-6">
                <button class="w-auto bg-orange-500">
                  <router-link
                    class="px-[5.4rem] py-3 bg-gray-900 text-gray-100 text-xs font-semibold rounded hover:bg-gray-700"
                    to="#"
                    >Vamos</router-link
                  >
                </button>
              </div>
            </div>
          </div>
          <div
            class="hidden lg:block lg:w-1/2"
            style="clip-path: polygon(10% 0, 100% 0%, 100% 100%, 0 100%)"
          >
            <div
              class="h-full object-cover fondo rounded-tr-xl rounded-br-xl"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import SideBar from "../components/SideBar.vue";
import headbar from "../components/headbar.vue";
</script>

<style>
.fondo {
  background-image: url("../../public/img/shop-welcome.png");
  background-position: center;
  background-size: cover;
}
</style>
