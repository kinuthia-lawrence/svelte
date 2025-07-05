<script lang="ts">
  import { onMount } from "svelte";
  import Layout from "../../components/Layout.svelte";
  import { isLoggedIn } from "../../stores/auth";
  import { push } from "svelte-spa-router";

  let loggedIn;
  $: loggedIn = $isLoggedIn;

  onMount(() => {
    if (!loggedIn) {
      push("/login");
    }
  });
</script>

<Layout>
  <h1 class="text-3xl font-bold mb-6">Dashboard</h1>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Dashboard content -->
    <div class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-xl font-semibold">Total Clients</h2>
      <p class="text-3xl font-bold text-blue-600">124</p>
    </div>
    <!-- More dashboard widgets -->
  </div>
</Layout>
