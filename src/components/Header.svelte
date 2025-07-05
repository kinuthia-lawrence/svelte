<script lang="ts">
  import { authStore } from '../stores/auth';
  import { push } from 'svelte-spa-router';

  function handleLogout() {
    authStore.logout();
    push('/');
  }
</script>

<header class="bg-white shadow-sm border-b px-6 py-4">
  <div class="flex items-center justify-between">
    <h1 class="text-xl font-semibold text-gray-800">Client Management</h1>
    
    <div class="flex items-center space-x-4">
      <span class="text-gray-600">Welcome back!</span>
      <button
        onclick={handleLogout}
        class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  </div>
</header>