import { apiClient, type ApiResponse } from '../../../api/axios';
import { SchemaValidationError } from '@schemas/errors';
import { ProductListSchema, type Product } from '@features/products/schemas/product.schema';

/** Products API service with strict runtime schema validation. */
export const productsService = {
  async getProducts(): Promise<Product[]> {
    const response = await apiClient.get<ApiResponse<unknown>>('/products');
    const parsed = ProductListSchema.safeParse(response.data.data);

    if (!parsed.success) {
      throw new SchemaValidationError(parsed.error.message);
    }

    return parsed.data;
  }
};
