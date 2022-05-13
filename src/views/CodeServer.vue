<template>
  <section class="text-gray-400 bg-gray-900 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          REST Remote Code Server Project
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Built a RESTful API that can compile and run code on a remote server
          in isolated docker containers. Easily add support for any language
          that can be compiled and run from a bash script. The code editor on this page is a simple editor powered by Prism syntax highlighting.
        </p>
        <p>
          <br>
          Check out this project on <a href="https://github.com/jslightham/rest-remote-code-server">GitHub</a>!
        </p>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
        <br>
          The demo below is hosted on a RaspberryPi and may take a while to compile &amp; run. After 10 seconds, your docker instance will be automatically killed and removed. Java will compile the "Main" class, and thus your main method needs to be placed in the Main class. Start by selecting a language from the dropdown.
        </p>
        <div class="bg-zinc-800 align-left" style="margin-top: 15px">
          Code:
          <prism-editor
            class="my-editor bg-zinc-800"
            v-model="code"
            :highlight="highlighter"
            line-numbers
          ></prism-editor>
          Output:
          <code style="">
            <p
              v-for="item in data"
              :key="item.message"
              style="padding-left: 15px"
            >
              {{ item }}
            </p>
          </code>
          <center>
            <button
              v-on:click="runCode"
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
              Run Code
            </button>

            <div class="relative inline w-full text-gray-700" style="margin-left: 20px;">
              <select
                class="
                  h-10
                  pl-3
                  pr-6
                  text-base
                  placeholder-gray-600
                  border
                  rounded-lg
                  appearance-none
                  focus:shadow-outline
                "
                v-model="selected"
                placeholder="Select Language"
              >
                <option v-for="language in languages" :key="language">
                  {{ language }}
                </option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center px-2">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import Prism Editor
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles

export default {
  name: "CodeServerComponent",
  components: {
    PrismEditor,
  },
  created() {
    this.getLanguages();
  },
  data() {
    return {
      data: [],
      code: "",
      languages: [],
      selected: "",
    };
  },
  methods: {
    async runCode() {
      this.data = [];
      let res = await fetch("http://jslightham.com:8000/run/run", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: this.code, language: this.selected }),
      });
      // Retrieve its body as ReadableStream

      const reader = res.body.getReader();
      let isDone = false;
      while (!isDone) {
        const response = await reader.read();
        isDone = response.done;
        if (isDone) {
          return;
        }
        console.log(response);
        let str = "";
        for (let i = 8; i < response.value.length; i++) {
          str += String.fromCharCode(response.value[i]);
        }
        console.log(str);
        this.data.push(str);
      }
    },
    highlighter(code) {
      return highlight(code, languages.js); // languages.<insert language> to return html with markup
    },
    async getLanguages() {
      let res = await fetch("http://jslightham:8000/run/languages");
      this.languages = await res.json();
    },
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
p a {
  color: #fff;
  text-decoration: underline;
}
</style>