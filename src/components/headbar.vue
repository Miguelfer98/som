<template>
  <div
    class="h-auto w-[100%] mb-4 rounded-xl p-4 px-4 md:px-12 bg-white z-40 flex flex-row justify-between"
  >
    <div>
      <h1 class="font-semibold text-[1.3rem]">SOM</h1>
      <p class="text-green-800 font-medium text-[1.1rem]">{{ props.text }}</p>
    </div>
    <div class="flex flex-row items-center w-auto h-auto">
      <div
        class="flex border-2 h-[2.5rem] md:w-[12rem] lg:w-[15rem] xl:w-[20rem] border-gray-300 rounded-2xl focus-within:border-none focus-within:border-transparent focus-within:ring ring-green-700"
      >
        <input
          type="text"
          class="w-full px-2 py-2 rounded-xl text-sm text-gray-600 focus:outline-none"
          placeholder="Buscar"
        />
        <button class="px-2 py-2 hidden md:block">
          <svg
            class="w-5 h-5 fill-current"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div class="pl-8 flex items-center">
        <div class="border-2 border-gray-400 rounded-3xl h-8 w-8 mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-full h-full"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <h1 class="font-semibold">name_user</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "nepe",
  },
});
</script>
