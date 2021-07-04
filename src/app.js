import { app_header } from "./components/global/header.js";
export const App = {
  name: "App",
  data() {
    return {
    };
  },
  components: {
    app_header,
  },
  methods: {
    header() {
      this.head = false;
    },
  },
  template:
    /*html*/
    `
    <div id="app">
      <app-header></app-header>
      <router-view />
    </div>
    `,
};
