<script lang="ts">
  import { location } from 'svelte-spa-router';

  const menuItems = [
    { href: '/dashboard', label: 'Dashboard', icon: '📊' },
    { href: '/dashboard/clients', label: 'Clients', icon: '👥' },
    { href: '/dashboard/projects', label: 'Projects', icon: '📂' },
    { href: '/dashboard/settings', label: 'Settings', icon: '⚙️' },
  ];

  $: currentPath = $location;
</script>

<aside class="bg-gray-800 text-white w-64 min-h-screen p-4">
  <div class="mb-8">
    <h2 class="text-xl font-bold">CMS Dashboard</h2>
  </div>
  
  <nav>
    <ul class="space-y-2">
      {#each menuItems as item}
        <li>
          <a
            href={item.href}
            class="flex items-center space-x-3 p-3 rounded-lg transition {
              currentPath === item.href 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</aside>