<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let isLoggedIn = false;

  onMount(async () => {
    const response = await fetch('http://localhost:8000/auth/check', {
      method: 'GET',
      credentials: 'include',
    });

    if (response.ok) isLoggedIn = true

  });

  const logout = () => {
    localStorage.removeItem('auth_token');
    goto('/login');
  };
</script>

<nav class="p-4 bg-gray-800 text-white">
  <div class="flex justify-between">
    <a href="/" class="font-bold">Gimli Dashboard</a>
    {#if isLoggedIn}
      <button on:click={logout} class="bg-red-500 px-3 py-2 rounded-lg">Déconnexion</button>
    {/if}
  </div>
</nav>

<slot />
