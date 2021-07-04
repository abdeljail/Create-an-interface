import { Home } from "../views/home.js";
import { Like } from "../views/like.js";
import { Profil } from "../views/profil.js";
import { Sell } from "../views/sellShop.js";
import { Setting } from "../views/profile/setting.js";
import { notFoundPage } from "../err/notFound.js";
const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/Like", component: Like, name: "Like" },
  {
    path: "/Profil",
    component: Profil,
    name: "Profil",
    redirect: "/NotFound",
    children: [
      {
        path: "Setting",
        component: Setting,
      },
    ],
  },
  { path: "/Sell", component: Sell },
  { path: "/NotFound", component: notFoundPage, name: "notFoundPage" },
];
export const router = new VueRouter({ routes });
