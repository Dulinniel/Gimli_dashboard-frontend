<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let guilds = [];

  onMount(async () => {
    try {
      console.log('Envoi de la requête à l\'API avec les cookies...');
      const response = await fetch('http://localhost:8000/guilds/list', {
        method: 'GET',
        mode: 'cors',
        credentials: 'include'
      });

      if (response.ok) {
        const data = await response.json();
        guilds = data.guilds;
        console.log('Guilds chargées:', guilds);
      } else goto('/login');
    } catch (err) {
      console.error(err.message);
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
          <h2 class="font-semibold">{guild.name}</h2>
          <p class="text-sm text-gray-500">Owner : {guild.owner ? 'Y' : 'N'}</p>
        </li>
      {/each}
    </ul>
  </div>
{/if}
