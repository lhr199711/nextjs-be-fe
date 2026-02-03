import { useState } from 'react';

export function useGetUser() {
  const [user, setUser] = useState<string | null>(() => {
    if (typeof window === 'undefined') return null;
    const obj = localStorage.getItem('user');
    return obj ? (JSON.parse(obj) as string) : null;
  });
  return user;
}
