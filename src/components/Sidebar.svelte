<script lang="ts">
  import { location } from 'svelte-spa-router';
  import { 
    LayoutDashboard, 
    Users, 
    FolderOpen, 
    Settings,
    BarChart3,
    FileText
  } from 'lucide-svelte';

  // Props from Layout component
  export let isOpen: boolean;
  export let toggleSidebar: () => void;

  const menuItems = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/dashboard/clients', label: 'Clients', icon: Users },
    { href: '/dashboard/projects', label: 'Projects', icon: FolderOpen },
    { href: '/dashboard/analytics', label: 'Analytics', icon: BarChart3 },
    { href: '/dashboard/documents', label: 'Documents', icon: FileText },
    { href: '/dashboard/settings', label: 'Settings', icon: Settings },
  ];

  $: currentPath = $location;
</script>

<aside class="bg-gray-800 text-white h-full">
  <!-- Sidebar Header -->
  <div class="p-4 border-b border-gray-700">
    {#if isOpen}
      <h2 class="text-xl font-bold">CMS Dashboard</h2>
    {:else}
      <div class="text-center">
        <span class="text-lg font-bold">CMS</span>
      </div>
    {/if}
  </div>
  
  <!-- Navigation Menu -->
  <nav class="p-4">
    <ul class="space-y-2">
      {#each menuItems as item}
        <li>
          <a
            href={item.href}
            class="flex items-center {isOpen ? 'space-x-3' : 'justify-center'} p-3 rounded-lg transition {
              currentPath === item.href 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }"
            title={isOpen ? '' : item.label}
          >
            <svelte:component this={item.icon} size="20" />
            {#if isOpen}
              <span>{item.label}</span>
            {/if}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</aside>