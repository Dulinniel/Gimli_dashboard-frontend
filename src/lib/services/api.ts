export async function apiGet(url, token) 
{
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if ( !response.ok ) throw new Error(`API GET ${url} failed: ${response.statusText}`);

  return response.json();
}
