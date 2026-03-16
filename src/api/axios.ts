import axios, { AxiosError } from 'axios';
import { env } from '@config/env';
import { useAuthStore } from '@features/auth/store/useAuthStore';

export type ApiError = {
  message: string;
  statusCode?: number;
  details?: unknown;
};

export type ApiResponse<T> = {
  data: T;
  message?: string;
};

/** Central axios instance with auth + safe error normalization. */
export const apiClient = axios.create({
  baseURL: env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

apiClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string; errors?: unknown }>) => {
    const normalized: ApiError = {
      message: error.response?.data?.message ?? 'Unexpected server error',
      statusCode: error.response?.status,
      details: error.response?.data?.errors
    };

    return Promise.reject(normalized);
  }
);
