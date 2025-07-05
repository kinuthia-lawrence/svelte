<script lang="ts">
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import Sidebar from "./Sidebar.svelte";
  import { onMount } from "svelte";

  // Runes
  let isOpen = $state(false);

  // Initialize based on screen size after mount (avoid SSR issues)
  onMount(() => {
    isOpen = window.innerWidth >= 768;

    // Resize listener
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        isOpen = true;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const toggleSidebar = () => {
    isOpen = !isOpen;
  };
</script>

<div class="h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
  <!-- Dashboard Layout-->
  <div class="flex flex-1 overflow-hidden">
    <!-- Sidebar -->
    <div
      class={`
        ${isOpen ? "w-64" : "w-20"}
        transition-all duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        fixed md:relative z-30 h-[100vh] bg-white dark:bg-gray-950 shadow-lg
      `}
    >
      <!-- <Sidebar {isOpen} {toggleSidebar} /> -->
       <Sidebar/>
    </div>

    <!-- Main content area -->
    <div
      class={`flex flex-1 flex-col overflow-y-auto
        transition-all duration-300 ease-in-out
        w-full md:w-[calc(100%-${isOpen ? "16rem" : "5rem"})]
      `}
    >
      <!-- Header -->
      <div class="sticky top-0 z-10">
        <Header {isOpen} {toggleSidebar} />
      </div>

      <!-- Page content -->
      <main class="flex-1 p-6">
        <slot />
      </main>

      <!-- Footer -->
      <div class="mt-auto">
        <Footer />
      </div>
    </div>
  </div>
</div>
