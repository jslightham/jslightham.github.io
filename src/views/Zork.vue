<template>
  <section class="text-gray-400 bg-gray-900 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          Zork Project
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          The first big group project that I worked on. This project is a text
          based adventure game, similar to the game Zork. The game was written in Java for a High School summative project.
        </p>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          <br>
          Check out this project on <a href="https://github.com/jslightham/zork">GitHub</a>! The <a href="https://github.com/jslightham/Zork/wiki">GitHub Wiki</a> includes a lot of information to assist with gameplay.
        </p>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          <br />
          Play the game below. The game is run in a docker container that will be removed when the page closes. The output is cleared every time that you press "Run" to make the content easier to read. This is managed by a modified version of the <router-link to="/codeserver"><a>REST Remote Code Server</a></router-link> (Using socket.io instead of REST) project I made.
        </p>

        <div class="bg-zinc-800 align-left" style="margin-top: 15px">
          Output:
          <code id="output" style="margin-bottom: 20px;">
          </code>
          <center>
            <form v-on:submit.prevent="sendInput">
            <input type="text" id="input" style="width: 50%; margin-right: 15px; padding 100px; height: 40px;" v-model="code">
            <button
              class="
                bg-blue-500
                hover:bg-blue-700
                text-white
                font-bold
                py-2
                px-4
                rounded
                width:
                100%
              "
            >
              Run
            </button>
            </form>
          </center>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const { io } = require("socket.io-client");

export default {
  name: "ZorkComponent",
  components: {},
  created() {
    if (!this.loaded) {
      this.loaded = true;
      console.log("Here");
      this.socket = io.connect("localhost:4000");
      this.runCode();
    }
  },
  data() {
    return {
      code: "",
      selected: "",
      data: [],
      socket: {},
      loaded: false,
    };
  },
  methods: {
    async runCode() {
      this.socket.on("output", function (msg) {
        console.log(msg);
        const newP = document.createElement("p");
        const newContent = document.createTextNode(msg);
        newP.appendChild(newContent);
        document.getElementById("output").appendChild(newP);
      });
    },
    sendInput () {
      this.socket.emit("input", this.code);
      this.code = "";
      const c = document.getElementById("output");
      c.innerHTML = '';
    }
  },
};
</script>

<style>
/* required class */
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  color: #ccc;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
.align-left {
  text-align: left;
  padding: 10px;
}

#output {
  white-space: pre-wrap;
}
</style>