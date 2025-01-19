<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let isLoggedIn = false;

  onMount(() => {
    isLoggedIn = !!localStorage.getItem('auth_token');
  });

  const logout = () => {
    localStorage.removeItem('auth_token');
    goto('/login');
  };
</script>

<nav class="p-4 bg-gray-800 text-white">
  <div class="flex justify-between">
    <a href="/" class="font-bold">Dashboard Bot</a>
    {#if isLoggedIn}
      <button on:click={logout} class="bg-red-500 px-3 py-2 rounded-lg">Déconnexion</button>
    {/if}
  </div>
</nav>

<slot />
