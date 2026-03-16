import { useQuery } from '@tanstack/react-query';
import { productsService } from '@features/products/services/products.service';

/** Query hook to manage products server-state lifecycle. */
export const useProducts = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: productsService.getProducts
  });
