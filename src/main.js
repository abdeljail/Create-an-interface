import { router } from "./router/index.js";
import { App } from "./app.js"
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");