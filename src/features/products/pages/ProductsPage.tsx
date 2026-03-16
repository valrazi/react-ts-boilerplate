import Loader from '@components/ui/Loader';
import { ProductCard } from '@features/products/components/ProductCard';
import { useProducts } from '@features/products/hooks/useProducts';

export default function ProductsPage() {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <Loader />;
  if (error) return <p className="text-red-700">Unable to load products.</p>;

  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold">Products</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {data?.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
}
