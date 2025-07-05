<script lang="ts">
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import Sidebar from "./Sidebar.svelte";
</script>

<div class="flex h-screen">
  <div class="flex bg-red-500">
    <Sidebar />
  </div>
  <main class="flex">
    <div class="flex bg-blue-500">
      <Header />
    </div>
    <div class="flex">
      <slot />
    </div>
    <div class="flex bg-black">
      <Footer />
    </div>
  </main>
</div>
