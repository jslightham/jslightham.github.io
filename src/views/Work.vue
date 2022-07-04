<template>
    <section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          My Work
        </h1>
          <p>Check out some of my projects! I'm not yet done setting up each project on my VPS yet, so not every project is hosted.</p>
          <br>
          
        <div class="-my-8 divide-y-2 divide-gray-800">
        <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-white">Unity, C#</span>
              <span class="mt-1 text-gray-500 text-sm">April 2022</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-white title-font mb-2">
                Row Game
              </h2>
              <p class="leading-relaxed">
                Worked with a team to create a 2D game in unity for a Game Jam.
              </p>
              <a href="https://canarybenn.itch.io/row" class="text-blue-400 inline-flex items-center mt-4"
                >Play on itch.io
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-white">Vue, TailwindCSS</span>
              <span class="mt-1 text-gray-500 text-sm">March 2022</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-white title-font mb-2">
                Personal Website
              </h2>
              <p class="leading-relaxed">
                Used VueJS, and TailwindCSS to build a personal website to showcase my work experience and projects. 
              </p>
              <a href="https://github.com/jslightham/jslightham.github.io" class="text-blue-400 inline-flex items-center mt-4"
                >View on GitHub
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap"
          >
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-white">NodeJS, Express, Docker</span>
              <span class="mt-1 text-gray-500 text-sm">March 2022</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-white title-font mb-2">
                REST Remote Code Server
              </h2>
              <p class="leading-relaxed">
                Built a RESTful API that can compile and run code on a remote server in isolated docker containers. Easily add support for any language that can be compiled and run from a bash script.
              </p>
              <router-link to="/codeserver">
              <a class="text-blue-400 inline-flex items-center mt-4"
                >See Project
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              </router-link>
            </div>
          </div>
          <div
            class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap"
          >
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-white">NodeJS, Express, MongoDB</span>
              <span class="mt-1 text-gray-500 text-sm">Oct 2021</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-white title-font mb-2">
                Kno-Logic API
              </h2>
              <p class="leading-relaxed">
                  Built a backend with a REST interface for a news aggregation project. Assisted with integration into the frontend react native applicaton.
              </p>
              <a href="https://github.com/jslightham/kno-logic-api" class="text-blue-400 inline-flex items-center mt-4"
                >View on GitHub
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap"
          >
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-white">Java, NodeJS</span>
              <span class="mt-1 text-gray-500 text-sm">Aug 2021</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-white title-font mb-2">
                Brute Forced War Game
              </h2>
              <p class="leading-relaxed">
                An experiment to learn using crowdsourced computing and multithreaded programming in Java to brute force a solution.
              </p>
              <a href="https://github.com/jslightham/brute-forced-war-game" class="text-blue-400 inline-flex items-center mt-4"
                >View on GitHub
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap"
          >
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-white">Unity, C#</span>
              <span class="mt-1 text-gray-500 text-sm">Jul 2021</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-white title-font mb-2">
                Zero Waste Game
              </h2>
              <p class="leading-relaxed">
                A group project where we created a multiplayer space exploration game in Unity. This game is currently hosted in a private repository, thus I cannot provide a link.
              </p>
            </div>
          </div>
          <div
            class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap"
          >
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-white">NodeJS, Vue, TensorflowJS, Websockets</span>
              <span class="mt-1 text-gray-500 text-sm">Feb 2021</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-white title-font mb-2">
                Multiplayer Stick Figure Game
              </h2>
              <p class="leading-relaxed">
                A project for a hackathon, where my group created a multiplayer game. The game's input was the user's camera that used TensorflowJS to place a realtime virtual representation of them in the game. The player's positions were synchronized via websockets, which allowed games such as soccer and volleyball to be played virtually.
              </p>
              <a href="https://github.com/jslightham/multiplayer-stickfigure-game" class="text-blue-400 inline-flex items-center mt-4"
                >View on GitHub
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap"
          >
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-white">NodeJS, Vue, Handbrake, FFMPEG, Video.js, MongoDB</span>
              <span class="mt-1 text-gray-500 text-sm">Dec 2020</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-white title-font mb-2">
                NodeJS Video Streamer
              </h2>
              <p class="leading-relaxed">
                A simple clone project of the popular video sharing website YouTube. Automatically transcodes uploads, modern video player (Video.js), video and audio streaming from NodeJS backend, automatic thumbnail generation through FFmpeg, comment &amp; like system, and metadata storage in MongoDB.
              </p>
              <a href="https://github.com/jslightham/NodeJS-Video-Streamer" class="text-blue-400 inline-flex items-center mt-4"
                >View on GitHub
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap"
          >
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-white">HTML, Javascript</span>
              <span class="mt-1 text-gray-500 text-sm">Jun 2020</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-white title-font mb-2">
                Collision Simulator
              </h2>
              <p class="leading-relaxed">
                A javascript canvas collision simulation in 2D for a combined high school Physics and Computer Science final project.
              </p>
              <a href="https://jslightham.github.io/Collision-Simulator/" class="text-blue-400 inline-flex items-center mt-4"
                >See Project
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap"
          >
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-white">Vue, Bootstrap, NodeJS, Express, MongoDB</span>
              <span class="mt-1 text-gray-500 text-sm">Jun 2020</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-white title-font mb-2">
                MEVN Attendance System
              </h2>
              <p class="leading-relaxed">
                A group project for a school project, where we created an attendance system in MongoDB. 
              </p>
              <a href="https://github.com/jslightham/MEVN-Attendance-Tracker" class="text-blue-400 inline-flex items-center mt-4"
                >View on GitHub
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap"
          >
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-white">Java</span>
              <span class="mt-1 text-gray-500 text-sm">2019-2020</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-white title-font mb-2">
                MC Plugins
              </h2>
              <p class="leading-relaxed">
                Built a few Java edition Minecraft plugins to learn how to.
              </p>
              <a href="https://github.com/jslightham/MC-Plugins" class="text-blue-400 inline-flex items-center mt-4"
                >View on GitHub
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap"
          >
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-white">Firebase, Google Cloud, Keybase, NodeJS</span>
              <span class="mt-1 text-gray-500 text-sm">Sep 2019</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-white title-font mb-2">
                Translate Bot
              </h2>
              <p class="leading-relaxed">
                A project for a hackathon that won the best use of google cloud award. This project translated conversations in real time within the keybase application into a language that the user selects.
              </p>
              <a href="https://devpost.com/software/translatebot" class="text-blue-400 inline-flex items-center mt-4"
                >View on Devpost
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap"
          >
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-white">Java</span>
              <span class="mt-1 text-gray-500 text-sm">Jun 2019</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-white title-font mb-2">
                Zork
              </h2>
              <p class="leading-relaxed">
                A group project where we recreated the classic text based adventure game Zork in Java, with some extra functionality. 
              </p>
              <router-link to="/zork">
              <a class="text-blue-400 inline-flex items-center mt-4"
                >See Project
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    name: "WorkComponent",
};
</script>

<style>
</style>