import { memo } from 'react';
import Card from '@components/ui/Card';
import type { Product } from '@features/products/schemas/product.schema';

function ProductCardBase({ product }: { product: Product }) {
  return (
    <Card>
      <h3 className="font-semibold">{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <p className="text-xs text-slate-500">Created: {new Date(product.createdAt).toLocaleDateString()}</p>
    </Card>
  );
}

export const ProductCard = memo(ProductCardBase);
