import Home from "../pages/Home.vue"
import ProductDetails from "../components/ProductDetails.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/product/:id", component: ProductDetails },
]

export default routes
