<script lang="ts">
  import { push } from 'svelte-spa-router';
</script>

<div class="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700">
  <!-- Hero Section -->
  <div class="container mx-auto px-4 py-20">
    <div class="text-center text-white">
      <h1 class="text-5xl font-bold mb-6">Client Management System</h1>
      <p class="text-xl mb-8 opacity-90">
        Streamline your client relationships with our powerful management platform
      </p>
      
      <div class="space-x-4">
        <button 
          class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          onclick={() => push('/login')}
        >
          Sign In
        </button>
        <button 
          class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
          onclick={() => push('/register')}
        >
          Get Started
        </button>
      </div>
    </div>
  </div>

  <!-- Features Section -->
  <div class="bg-white py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Why Choose Our Platform?</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-blue-600 text-2xl">👥</span>
          </div>
          <h3 class="text-xl font-semibold mb-2">Client Management</h3>
          <p class="text-gray-600">Organize and track all your client information in one place</p>
        </div>
        <div class="text-center">
          <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-green-600 text-2xl">📊</span>
          </div>
          <h3 class="text-xl font-semibold mb-2">Analytics</h3>
          <p class="text-gray-600">Get insights into your business performance</p>
        </div>
        <div class="text-center">
          <div class="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-purple-600 text-2xl">🔒</span>
          </div>
          <h3 class="text-xl font-semibold mb-2">Secure</h3>
          <p class="text-gray-600">Enterprise-grade security for your data</p>
        </div>
      </div>
    </div>
  </div>
</div>