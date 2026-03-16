/** Centralized environment variable access and validation. */
const required = ['VITE_API_BASE_URL', 'VITE_APP_NAME'] as const;

type RequiredEnv = (typeof required)[number];

const validateEnv = (): Record<RequiredEnv, string> => {
  const output = {} as Record<RequiredEnv, string>;

  required.forEach((key) => {
    const value = import.meta.env[key];
    if (!value) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
    output[key] = value;
  });

  return output;
};

export const env = validateEnv();
