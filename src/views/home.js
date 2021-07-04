// import { contentHome} from "../contentViews/home.js"
import { notFound } from "../components/views/notFound.js";
import { Product } from "../components/views/product.js";
export const Home = {
  name: "Home",
  components: {
    Product,
    notFound,
  },
  data() {
    return {
      style: "../src/assets/css/Home.css",
      products: [
        {
          id: 1,
          description: "Quarz Luxe",
          price: 12,
          img: "../src/assets/images/quarz-luxe.JPG",
        },
        {
          id: 24,
          description: "Mesh Genova",
          price: 6,
          img: "../src/assets/images/brand-nike1.JPG",
        },
        {
          id: 2,
          description: "Curren Business",
          price: 20,
          img: "../src/assets/images/curren-business.JPG",
        },
        {
          id: 3,
          description: "Curren Sport",
          price: 5,
          img: "../src/assets/images/curren-sport.JPG",
        },
        {
          id: 4,
          description: "Jaragar Racing",
          price: 8,
          img: "../src/assets/images/jaragar-racing.JPG",
        },
        {
          id: 14,
          description: "Nike Air Max 2010",
          price: 20,
          img: "../src/assets/images/brand-nike2.JPG",
        },
        {
          id: 5,
          description: "Liges Hommes",
          price: 3,
          img: "../src/assets/images/liges-hommes.JPG",
        },
        {
          id: 25,
          description: "Hip Hop Gold",
          price: 87,
          img: "../src/assets/images/brand-nike1.JPG",
        },
        {
          id: 6,
          description: "Maserati Mechanical",
          price: 65,
          img: "../src/assets/images/maserati-mechanical.JPG",
        },
        {
          id: 7,
          description: "Montre Mecanique",
          price: 25,
          img: "../src/assets/images/montre-mecanique.JPG",
        },
        {
          id: 17,
          description: "Liges Hommes",
          price: 3,
          img: "../src/assets/images/brand-nike1.JPG",
        },
        {
          id: 8,
          description: "Brand Designer",
          price: 28,
          img: "../src/assets/images/brand-designer.JPG",
        },
        {
          id: 9,
          description: "Relogio Masculino",
          price: 4,
          img: "../src/assets/images/relogio-masculino.JPG",
        },
        {
          id: 10,
          description: "Tissot Multifunction",
          price: 29,
          img: "../src/assets/images/tissot-multifunction.JPG",
        },
        {
          id: 11,
          description: "Hip Hop Gold",
          price: 87,
          img: "../src/assets/images/hiphop-gold.JPG",
        },
        {
          id: 12,
          description: "Mesh Genova",
          price: 6,
          img: "../src/assets/images/mesh-genova.JPG",
        },
        {
          id: 13,
          description: "Nike Air Max 2090",
          price: 12,
          img: "../src/assets/images/brand-nike1.JPG",
        },
        {
          id: 15,
          description: "Sneakers Nike",
          price: 5,
          img: "../src/assets/images/brand-nike3.JPG",
        },
        {
          id: 16,
          description: "Sélection Nike  Chaussures  Vêtements  Accessoires",
          price: 8,
          img: "../src/assets/images/brand-nike4.JPG",
        },
        {
          id: 18,
          description: "Maserati Mechanical",
          price: 65,
          img: "../src/assets/images/brand-nike1.JPG",
        },
        {
          id: 19,
          description: "Montre Mecanique",
          price: 25,
          img: "../src/assets/images/brand-nike1.JPG",
        },
        {
          id: 20,
          description: "Brand Designer",
          price: 28,
          img: "../src/assets/images/brand-nike1.JPG",
        },
        {
          id: 21,
          description: "Relogio Masculino",
          price: 4,
          img: "../src/assets/images/brand-nike1.JPG",
        },
        {
          id: 22,
          description: "Tissot Multifunction",
          price: 29,
          img: "../src/assets/images/brand-nike1.JPG",
        },
        {
          id: 23,
          description: "Tissot Multifunction",
          price: 29,
          img: "../src/assets/images/brand-nike1.JPG",
        },
      ],
      like: [],
      cart: [],
      search: "",
    };
  },
  created() {
    this.setAttributeLink;
  },
  mounted() {
    this.getDataCart;
  },
  methods: {
    emptyInput() {
      this.search = "";
    },
    check() {
      if (this.search && !this.searchProduct.length >= 1) return false;
      return true;
    }
  },
  computed: {
    searchProduct() {
      const result = new RegExp(this.search, "i");
      return this.products.filter((product) => {
        return product.description.match(result);
      });
    },
    getDataCart() {
      for (const object in localStorage) {
        let el = new String(localStorage[object]);
        if (!(el.startsWith('{"') && el.endsWith('"}'))) return;
        el = JSON.parse(el);
        if (object.startsWith("Like")) this.like.push(el.id);
        if (object.startsWith("Cart")) this.cart.push(el.id);
      }
    },
    setAttributeLink() {
      document.getElementById("link").href = this.style;
    },
  },
  watch: {},
  template: /*html */ `
        <div id="Home" class="py-3">
            <div class="container">
                <div class="content">
                    <div class="input-seaech">
                        <div class="content-in text-center d-flex justify-content-center">
                            <input v-model="search" type="text" class="input w-50 px-2 py-1 rounded-left">
                            <button  class="search px-2 py-1">
                                <i class="fas fa-search text-white"></i>
                            </button>
                        </div>
                    </div>
                    <notFound :btn="true" :value="check" :message="'No result found'" :click="emptyInput"></notFound>
                    <div class="prodact pt-5">
                        <div class="content-prodact">
                            <div class="box-prodact row">
                                <Product v-for="product in searchProduct" :key="product.id" :product="product" :like="like" :cart="cart"></Product>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `,
};
