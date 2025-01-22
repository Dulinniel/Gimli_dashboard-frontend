<script>
  export let data;
</script>

<div>
  <h1>Dashboard for ID: {data.id}</h1>
  <pre>{JSON.stringify(data, null, 2)}</pre>
</div>
