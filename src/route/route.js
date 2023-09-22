import Home from "../pages/Home.vue"
import ProductDetails from "../pages/ProductDetails.vue"
import Categories from "../pages/Categories.vue";
import ProductByCategory from "../pages/ProductsByCategory.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/product/:id", component: ProductDetails },
  { path: "/categories", component: Categories},
  { path: "/categories/:category", component: ProductByCategory},
]

export default routes
