<template>
  <section class="text-gray-400 bg-gray-900 body-font">
    <div
      class="
        container
        mx-auto
        flex
        px-5
        py-24
        md:flex-row
        flex-col
        items-center
      "
    >
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
        <img
          class="object-cover object-center rounded"
          style="max-height: 350px;"
          alt="hero"
          :src="profile"
        />
      </div>
      <div
        class="
          lg:flex-grow
          md:w-1/2
          lg:pl-24
          md:pl-16
          flex flex-col
          md:items-start md:text-left
          items-center
          text-center
        "
      >
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Johnathon Slightham
        </h1>
        <p class="mb-8 leading-relaxed">
          I am a computer engineering student at the University of Waterloo. I have a passion for machine learning, and love working on open source projects.
          <br><br>
          Browse my website to check out some of my projects or connect with me!
        </p>
        <div class="flex justify-center">
          <router-link to="/resume">
          <button
            class="
              inline-flex
              text-white
              bg-blue-500
              border-0
              py-2
              px-6
              focus:outline-none
              hover:bg-blue-600
              rounded
              text-lg
            "
          >
            Resume
          </button>
          </router-link>
          <a href="https://ca.linkedin.com/in/johnathon-slightham-5123a4201">
          <button
            class="
              ml-4
              inline-flex
              text-gray-400
              bg-gray-800
              border-0
              py-2
              px-6
              focus:outline-none
              hover:bg-gray-700 hover:text-white
              rounded
              text-lg
            "
          >
            LinkedIn
          </button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      profile: require('@/assets/profile.jpg'),
    }
  }
};
</script>

<style>
</style>