export const Setting = Vue.component("Setting", {
  name: "Setting",
  data() {
    return {
      like: 0,
      cart: 0,
    };
  },
  created() {
    this.getDataCartLike();
  },
  methods: {
    getDataCartLike() {
      for (const object in localStorage) {
        if (object.startsWith("Like")) this.like++;
        if (object.startsWith("Cart")) this.cart++;
      }
    },
  },
  template: /*html */ `
            <div id="Setting" class="" >
                  <div>
                      <div class="container d-flex justify-content-center pt-5">
                        <div class="content-box d-flex justify-content-between align-items-baseline w-75 pt-5" style="height:100vh">
                            <div class="box-like p-4 border border-2 rounded bg-white" style="box-shadow: 0 0 100px #aaaaaa73; width:300px">
                                  <div class="header pb-4">
                                      <h2 class="text-capitalise display-7 h3 text-info  text-center">Products width like</h2>
                                  </div>
                                  <div class="body text-center">
                                    <p > Number count width Product like </p>
                                    <p  class="py-2 px-4 rounded bg-info text-white  d-inline">{{like}}</p>
                                  </div>
                            </div>
                            <div class="box-cart p-4 border border-2 rounded bg-white" style="box-shadow: 0 0 100px #aaaaaa73; width:300px">
                                  <div class="header pb-4">
                                      <h2 class="text-capitalise display-7 h3 text-warning  text-center">Products width cart</h2>
                                  </div>
                                  <div class="body text-center ">
                                    <p>Number count width Product cart</p>
                                    <p class="py-2 px-4 rounded bg-warning text-white d-inline">{{cart}}</p>
                                  </div>
                            </div>
                        </div>
                      </div>
                  </div>
            </div>
            `,
});
