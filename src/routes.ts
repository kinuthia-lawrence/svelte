import Dashboard from "./pages/dashboard/Dashboard.svelte";
import Landing from "./pages/home/Landing.svelte";
import Login from "./pages/home/Login.svelte";
import Register from "./pages/home/Register.svelte";

export default {
  "/": Landing,
  "/login": Dashboard,
  "/register": Register,

  // Dashboard pages
  "/dashboard": Dashboard,
};
