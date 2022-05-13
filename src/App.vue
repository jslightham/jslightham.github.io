<template>
 <div class="md:container md:mx-auto">
  <div class="text-gray-400 bg-gray-900 body-font app">
    <header class="text-gray-400 bg-gray-900 body-font">
      <div
        class="
          container
          mx-auto
          flex flex-wrap
          p-5
          flex-col
          md:flex-row
          items-center
        "
      >
        <a
          class="
            flex
            title-font
            font-medium
            items-center
            text-white
            mb-4
            md:mb-0
          "
        >
          <span class="ml-3 text-xl">Johnathon Slightham</span>
        </a>
        <nav
          class="
            md:ml-auto md:mr-auto
            flex flex-wrap
            items-center
            text-base
            justify-center
          "
        >
          <router-link to="/"
            ><a class="mr-5 hover:text-white">Home</a></router-link
          >
          <router-link to="Work"
            ><a class="mr-5 hover:text-white">Work</a></router-link
          >
          <router-link to="/resume"> <a class="mr-5 hover:text-white">Resume</a> </router-link>
        </nav>
        <a href="https://github.com/jslightham">
        <button
          class="
            inline-flex
            items-center
            bg-gray-800
            border-0
            py-1
            px-3
            focus:outline-none
            hover:bg-gray-700
            rounded
            text-base
            mt-4
            md:mt-0
          "
        >
          GitHub
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
        </a>
      </div>
    </header>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.app {
  min-height: 100vh;
  height: 100%;
  background: #f7f7f7;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}


</style>