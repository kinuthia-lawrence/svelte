<script lang="ts">
  import { push } from 'svelte-spa-router';

  let name = '';
  let email = '';
  let password = '';
  let confirmPassword = '';
  let isLoading = false;
  let error = '';

  async function handleRegister() {
    if (!name || !email || !password || !confirmPassword) {
      error = 'Please fill in all fields';
      return;
    }

    if (password !== confirmPassword) {
      error = 'Passwords do not match';
      return;
    }

    isLoading = true;
    error = '';

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful registration
      push('/login');
    } catch (err) {
      error = 'Registration failed. Please try again.';
    } finally {
      isLoading = false;
    }
  }
</script>

<div class="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
  <div class="max-w-md w-full space-y-8">
    <div>
      <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">
        Create your account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Or
        <a href="/login" class="font-medium text-blue-600 hover:text-blue-500">
          sign in to existing account
        </a>
      </p>
    </div>
    
    <form class="mt-8 space-y-6" on:submit|preventDefault={handleRegister}>
      <div class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            bind:value={name}
            required
            class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your full name"
          />
        </div>
        
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            bind:value={email}
            required
            class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
            class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>
        
        <div>
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            bind:value={confirmPassword}
            required
            class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Confirm your password"
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
          class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {#if isLoading}
            Creating account...
          {:else}
            Create account
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