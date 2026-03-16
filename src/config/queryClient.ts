import { QueryClient } from '@tanstack/react-query';

/** Shared React Query configuration for caching, retries and global error handling. */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 1000 * 60,
      refetchOnWindowFocus: false
    },
    mutations: {
      retry: 1
    }
  }
});
