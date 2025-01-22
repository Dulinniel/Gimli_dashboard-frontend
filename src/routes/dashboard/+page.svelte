<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let guilds = [];

  onMount(async () => {
    const response = await fetch('http://localhost:8000/auth/check', {
      method: 'GET',
      credentials: 'include',
    });

    if (response.ok) {
      const userData = await response.json();
      const guildsResponse = await fetch('http://localhost:8000/guilds/list', {
        method: 'GET',
        credentials: 'include',
      });

      if (guildsResponse.ok) {
        const data = await guildsResponse.json();
        guilds = data.guilds;
      }
    } else {
      console.error('Authentication failed');
      goto('/login');
    }
  });
</script>

{#if guilds.length > 0}
  <div class="p-6">
    <h1 class="text-2xl font-bold">Guilds:</h1>
    <ul class="mt-4 space-y-3">
      {#each guilds as guild}
        <li class="p-4 bg-gray-50 rounded-lg shadow">
          <h2 class="font-semibold"><a href={guild.id}>{guild.name}</a></h2>
          {#if guild.icon}
          <img alt="" src="https://cdn.discordapp.com/icons/{guild.id}/{guild.icon}.webp" />
          {:else}
          <img alt="" src="assets/no-image.webp" />
          {/if}
        </li>
      {/each}
    </ul>
  </div>
{/if}
