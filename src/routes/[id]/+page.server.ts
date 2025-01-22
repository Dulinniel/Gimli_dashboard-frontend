import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => {
  const id = params.id;

  const response = await fetch(`http://localhost:8000/guilds/${id}`);
  if (response.ok) {
    const data = await response.json();
    return { data };
  }

  throw new Error('Failed to fetch resource');
};
