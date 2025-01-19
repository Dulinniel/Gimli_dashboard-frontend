<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  const redirectToAuth = () => 
  {
    window.location.href = 'http://localhost:8000/auth';
  };

  onMount(() => 
  {
    const token = localStorage.getItem('auth_token');
    if ( token ) goto('/dashboard');
  });
</script>

<div class="flex items-center justify-center min-h-screen bg-gray-100">
  <div class="text-center">
    <h1 class="text-3xl font-bold">Welcome !</h1>
    <button
      on:click={redirectToAuth}
      class="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    >
      Login with Discord
    </button>
  </div>
</div>
