import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => 
{

  const token = event.cookies.get('auth_token');

  if (!token && event.url.pathname !== '/login') 
  {
    return new Response(null, {
      status: 302,
      headers: { Location: '/login' },
    });
  }

  if ( token ) 
  {
    const response = await fetch('http://localhost:8000/auth/check', {
      method: 'GET',
      headers: { 
        Authorization: `Bearer ${token}` 
      },
      credentials: 'include',
    });

    if ( !response.ok && event.url.pathname !== '/login' ) 
    {
      return new Response(null, {
        status: 302,
        headers: { Location: '/login' },
      });
    }
  }

  return await resolve(event);
};
