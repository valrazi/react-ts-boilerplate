import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number().nonnegative(),
  createdAt: z.string()
});

export const ProductListSchema = z.array(ProductSchema);

export type Product = z.infer<typeof ProductSchema>;
