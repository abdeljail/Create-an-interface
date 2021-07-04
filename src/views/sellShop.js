import { notFound } from "../components/views/notFound.js";
import { productLikeCart } from "../components/views/productLikeCart.js";
export const Sell = {
  name: "Sell",
  components: {
    productLikeCart,
    notFound,
  },
  data() {
    return {
      style: "../src/assets/css/Like.css",
      like: [],
      cart: [],
      products: [],
    };
  },
  mounted() {
    this.getDataCart;
  },
  created() {
    this.setAttributeLink;
  },
  methods: {
    emptyProduct() {
      if (this.cart.length != 0) return true;
      return false;
    },
  },
  computed: {
    getDataCart() {
      for (const object in localStorage) {
        let el = new String(localStorage[object]);
        if (!(el.startsWith('{"') && el.endsWith('"}'))) return;
        el = JSON.parse(el);
        if (object.startsWith("Cart")) {
          this.cart.push(el.id);
          this.products.push(el);
        }
        if (object.startsWith("Like")) {
          if (!this.products.filter((e) => e.id === el.id).length === 0) return;
          this.like.push(el.id);
        }
      }
    },
    setAttributeLink() {
      document.getElementById("link").href = this.style;
    },
  },
  watch: {},
  template: /*html */ `
            <div id="Like" class="py-3">
                <div class="container">
                    <div class="heading d-flex justify-content-between align-items-center py-2 m-0">
                        <h1 class="display-6 m-0"> Your Cart is empty wheer Products </h1>
                        <div>
                            <i id="iconLike" class="fas fa-shopping-cart"></i>
                        </div>
                    </div>
                </div>
                <hr class="hr border-0 bg-secondary">
                <div class="container">
                    <div class="content-like my-5 bg-white p-4 border border-2 rounded">
                      <notFound :value="emptyProduct" :message="'Browse our categories and discover our best offers'" :click="emptyProduct"></notFound>
                      <productLikeCart v-for=" (product,index) in products" :key="product.id" :product="product" :like="like" :cart="cart"></productLikeCart>
                    </div>
                </div>
            </div>
            `,
};
