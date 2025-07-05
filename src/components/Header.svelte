<script lang="ts">
  import { authStore } from '../stores/auth';
  import { push } from 'svelte-spa-router';

  // Props from Layout component
  export let isOpen: boolean;
  export let toggleSidebar: () => void;

  function handleLogout() {
    authStore.logout();
    push('/');
  }
</script>

<header class="bg-white shadow-sm border-b px-6 py-4">
  <div class="flex items-center justify-between">
    <!-- Left side: Menu button + Title -->
    <div class="flex items-center space-x-3">
      <!-- Toggle sidebar button -->
      <button
        onclick={toggleSidebar}
        class="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition"
        aria-label="Toggle sidebar"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <h1 class="text-xl font-semibold text-gray-800">Client Management</h1>
    </div>
    
    <!-- Right side: Welcome + Logout -->
    <div class="flex items-center space-x-4">
      <span class="text-gray-600 hidden sm:block">Welcome back!</span>
      <button
        onclick={handleLogout}
        class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  </div>
</header>