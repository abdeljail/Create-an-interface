export const Product = Vue.component("Product", {
  name: "Product",
  data() {
    return {
      isInfoShow: false,
      src: "../src/assets/images/product-description1.png",
      srcImages: {
        src1: "../src/assets/images/product-description1.png",
        src2: "../src/assets/images/product-description.png",
      },
    };
  },
  props: ["product", "like", "cart"],
  methods: {
    likeProduct(product) {
      if (this.like.includes(product.id)) {
        this.like.splice(this.like.indexOf(product.id), 1);
        this.removeLikelocalStorage(product.id);
        return;
      }
      this.like.push(product.id);
      this.addLikelocalStorage(product);
    },
    cartShop(product) {
      if (this.cart.includes(product.id)) {
        this.cart.splice(this.cart.indexOf(product.id), 1);
        this.removeCartlocalStorage(product.id);
        return;
      }
      this.cart.push(product.id);
      this.addCartlocalStorage(product);
    },
    addLikelocalStorage(product) {
      window.localStorage.setItem(
        `LikeProduct${product.id}`,
        JSON.stringify(product)
      );
    },
    addCartlocalStorage(product) {
      window.localStorage.setItem(
        `CartProduct${product.id}`,
        JSON.stringify(product)
      );
    },
    removeCartlocalStorage(id) {
      localStorage.removeItem(`CartProduct${id}`);
    },
    removeLikelocalStorage(id) {
      localStorage.removeItem(`LikeProduct${id}`);
    },
    changeImageInfo(src) {
      this.src = src;
    },
  },
  computed: {},
  created() {},
  mounted() {},
  /*html */
  template: `
            <div :data-set="product.id" class="pack overflow-hidden col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6 my-2 rounded border border-2 p-0">
                <div class="overflow-hidden position-relative">
                    <div class="overly position-absolute w-100 h-100 bg-muted">
                        <button @click="isInfoShow = true , changeImageInfo(srcImages.src2)" class="des position-absolute" >
                            <img :src=src width="16px" height="16px" alt="iimges">
                        </button>
                    </div>
                    <div @mouseleave="isInfoShow = false, changeImageInfo(srcImages.src1)" class="back-info position-absolute" :class="{'info-show':isInfoShow}">
                    </div>
                    <div class="info position-absolute h-50 text-center w-100" :class="{'info-str':isInfoShow}">
                        <h4 class="mt-2">{{product.description}}</h4>
                        <strong class="p-2 my-3 d-block m-auto w-25 rounded text-white">{{product.price}} $ </strong>
                    </div>
                    <img class="w-100 h-100" :src=product.img alt="" srcset="">
                </div>
                <div class="d-flex justify-content-between px-3 py-2">
                    <button @click="likeProduct(product)" v-bind="like" :class="{'btn-like-active':like.includes(product.id)}" class="d-flex justify-content-center rounded align-items-center btn-pack-like btn-pack p-2" type="button">
                        <i class="fas fa-heart" :class="{'icon-like-active':like.includes(product.id)}"></i>
                    </button>
                    <button @click="cartShop(product)" v-bind="cart" :class="{'btn-cart-active':cart.includes(product.id)}" class="d-flex justify-content-center rounded align-items-center btn-pack-cart btn-pack" type="button">
                        <i class="fas fa-shopping-cart" :class="{'icon-cart-active':cart.includes(product.id)}"></i>
                    </button>
                </div>
            </div>
            `,
});
