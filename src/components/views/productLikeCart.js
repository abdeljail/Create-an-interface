export const productLikeCart = Vue.component("productLikeCart", {
  name: "productLikeCart",
  data() {
    return {
      count: 0,
      isPlus: true,
      isMinus: true,
      totalCount: 0,
    };
  },
  created() {},
  mounted() {
    this.priceProduct;
    this.getDataCart;
  },
  props: ["product", "like", "cart"],
  methods: {
    IsCountPlus() {
      if (this.count >= 10) {
        this.isPlus = false;
        this.isMinus = true;
        return;
      }
      this.count++;
      this.totalCount += this.product.price;
      this.isPlus = true;
      this.isMinus = true;
      this.addRemoveQuantity();
    },
    IsCountMinus() {
      if (this.count <= 1) {
        this.isMinus = false;
        this.isPlus = true;
        return;
      }
      this.count--;
      this.totalCount -= this.product.price;
      this.isMinus = true;
      this.isPlus = true;
      this.addRemoveQuantity();
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
    likeProduct(product) {
      this.like.splice(this.like.indexOf(product.id), 1);
      this.removeLikelocalStorage(product.id);
      setTimeout((_) => this.$el.remove(), 500);
      this.deleteQuantity();
    },
    removeLikelocalStorage(id) {
      localStorage.removeItem(`LikeProduct${id}`);
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
    addRemoveQuantity() {
      localStorage.setItem(this.product.id, this.count);
    },
    deleteQuantity() {
      localStorage.removeItem(this.product.id);
    },
  },
  computed: {
    priceProduct() {
      this.totalCount = this.product.price;
    },
    getDataCart() {
      if (localStorage.getItem(this.product.id) === null) {
        this.count = 1;
        this.totalCount = this.product.price;
        return;
      }
      this.count = localStorage.getItem(this.product.id);
      this.totalCount = this.count * this.product.price;
    },
  },
  watch: {},
  template: /*html*/ `
            <div id="productCart" class="productCart h-100">
               <div class="content">
                    <div class="product rounded px-2 py-3">
                        <div class="information border-bottom border-2 px-3 d-flex justify-content-between align-items-center">
                            <div class="d-flex justify-content-start align-items-center">
                                <div class="image rounded overflow-hidden">
                                    <img :src="product.img" class="w-100 h-100"  alt="image product">
                                </div>
                                <div class="name">
                                        <h4 class="m-0">{{product.description}}</h4>
                                </div>
                            </div>
                            <div class="prix d-flex justify-content-start align-items-center">
                                <div class="">
                                    {{product.price}}$
                                </div>
                            </div>
                            <div class="quantity py-3 d-flex justify-content-start align-items-center">
                                <div class="d-flex justify-content-start align-items-center">
                                    <button @click="IsCountPlus()" :class="{'brn-not-click':!isPlus}" class="quantity-btn py-1 mx-2 d-flex justify-content-center rounded align-items-center btn-pack-cart btn-pack"  type="button">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                    <span class="mx-2 font-weight-bold">{{ count }}</span>
                                    <button @click="IsCountMinus()" :class="{'brn-not-click':!isMinus}" class="quantity-btn py-1 mx-2 d-flex justify-content-center rounded align-items-center" type="button">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="total d-flex justify-content-start align-items-center">
                                <div class="">
                                    {{totalCount}}$
                                </div>
                            </div>
                        </div>
                        <div class="cart-like d-flex justify-content-start align-items-center ">
                            <button @click="likeProduct(product)" v-bind="like" :class="{'btn-like-active':like.includes(product.id)}" class="py-1 mx-3 d-flex justify-content-center rounded align-items-center btn-pack-cart btn-pack-like  btn-pack"  type="button">
                                <i class="fas fa-heart"></i>
                            </button>
                            <button @click="cartShop(product)" v-bind="cart" :class="{'btn-cart-active':cart.includes(product.id)}" class="py-1 d-flex justify-content-center rounded align-items-center btn-pack-cart btn-pack" type="button">
                                <i class="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
               </div>
            </div>
            `,
});
