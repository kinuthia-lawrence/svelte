<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
</script>

<main class="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
  <div class="flex space-x-8 mb-8">
    <a href="https://vite.dev" target="_blank" rel="noreferrer" class="transition-transform hover:scale-110">
      <img src={viteLogo} class="h-24 w-24" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer" class="transition-transform hover:scale-110">
      <img src={svelteLogo} class="h-24 w-24" alt="Svelte Logo" />
    </a>
  </div>
  
  <h1 class="text-4xl font-bold text-gray-800 mb-8">Vite + Svelte</h1>

  <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
    <Counter />
  </div>

  <p class="text-center text-gray-600 mb-4 max-w-md">
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer" class="text-blue-600 hover:text-blue-800 underline">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="text-sm text-gray-500 text-center">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<!-- Tailwind CSS handles all styling -->
