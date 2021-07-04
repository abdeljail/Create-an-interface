export const app_header = Vue.component("app-header", {
  name: "app-header",
  data() {
    return {
      isHome: true,
      isProfil: false,
      isSell: false,
      isLike: false,
      isProfilBox: false,
    };
  },
  created() {},
  methods: {
    activeClass() {
      (this.isHome = false),
        (this.isProfil = false),
        (this.isSell = false),
        (this.isLike = false);
    },
  },
  computed: {},
  template:
    /* html */
    `
        <header class="bg-white border-bottom">
            <div class="container">
                <div class="content-header d-flex justify-content-between align-items-center py-2">
                    <div class="logo">
                    <router-link to="/" >
                            <img src="./public/logo.jpg" alt="logo app" width="60px" size="60px"  @click="activeClass(), isHome = true">
                    </router-link>
                    </div>
                    <div class="nav">
                        <nav>
                            <ul class="d-flex mb-0">
                                <li class="mx-3" :class="{active:isHome}"   @click="activeClass(), isHome = true" >
                                    <router-link  class="d-block p-2 rounded" exact to="/">
                                        <i class="fas fa-home display-6" :class="{'active-icon':isHome}"></i>
                                    </router-link>
                                </li>
                                <li class="mx-3" :class="{active:isLike}" @click="activeClass(), isLike = true">
                                    <router-link class="d-block p-2 rounded"   to="/Like">
                                        <i class="fas fa-heart" :class="{'active-icon':isLike}"></i>
                                    </router-link>
                                </li>
                                <li class="mx-3" :class="{active:isSell}" @click="activeClass(), isSell = true">
                                    <router-link class="d-block p-2 rounded"  to="/Sell">
                                        <i class="fas fa-shopping-cart" :class="{'active-icon':isSell}"></i>
                                    </router-link>
                                </li>
                                <li class="mx-3 position-relative" :class="{'active-last':isProfil}"  @click="activeClass(),isProfil = true">
                                    <button class="border-0 p-2 rounded bg-transparent "   @focus="isProfilBox = true" @blur="isProfil = false , isProfilBox = false">
                                        <i class="fas fa-user-alt" :class="{'active-icon':isProfil}"></i>
                                    </button>
                                    <div class="pofile-box p-2 bg-white position-absolute" :class="{'pofile-box-active' : isProfilBox}">
                                        <div>
                                            <router-link class="d-block p-2 rounded text-decoration-none"  to="/Profil/Setting">
                                                <i class="fas fa-cog align-middle"></i> <span class="mx-2">setting</span>
                                            </router-link>
                                        </div>
                                        <div>
                                            <router-link class="d-block p-2 rounded text-decoration-none"   to="/Profil/Setting">
                                            <i class="fas fa-sign-out-alt align-middle"></i><span class="mx-2">log Out</span>
                                            </router-link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
            `,
});
