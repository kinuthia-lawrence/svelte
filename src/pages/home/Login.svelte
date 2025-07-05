<script lang="ts">
  import { push } from 'svelte-spa-router';
  import { authStore } from '../../stores/auth';

  let email = '';
  let password = '';
  let isLoading = false;
  let error = '';

  async function handleLogin() {
    if (!email || !password) {
      error = 'Please fill in all fields';
      return;
    }

    isLoading = true;
    error = '';

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      const user = {
        id: '1',
        email,
        name: 'John Doe',
        role: 'admin'
      };
      
      authStore.login(user, 'mock-jwt-token');
      push('/dashboard');
    } catch (err) {
      error = 'Login failed. Please try again.';
    } finally {
      isLoading = false;
    }
  }
</script>

<div class="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
  <div class="max-w-md w-full space-y-8">
    <div>
      <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">
        Sign in to your account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Or
        <a href="/register" class="font-medium text-blue-600 hover:text-blue-500">
          create a new account
        </a>
      </p>
    </div>
    
    <form class="mt-8 space-y-6" on:submit|preventDefault={handleLogin}>
      <div class="rounded-md shadow-sm space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            bind:value={email}
            required
            class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
        
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            bind:value={password}
            required
            class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>
      </div>

      {#if error}
        <div class="text-red-600 text-sm text-center">{error}</div>
      {/if}

      <div>
        <button
          type="submit"
          disabled={isLoading}
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {#if isLoading}
            Signing in...
          {:else}
            Sign in
          {/if}
        </button>
      </div>

      <div class="text-center">
        <a href="/" class="text-blue-600 hover:text-blue-500 text-sm">
          ← Back to home
        </a>
      </div>
    </form>
  </div>
</div>