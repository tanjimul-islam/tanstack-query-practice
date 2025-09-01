import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Product from "./Product";
const retrieveProducts = async ({ queryKey }) => {
  const response = await axios.get(`http://localhost:5000/${queryKey[0]}`);
  return response.data;
};
export default function Products({ handleProductId }) {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: retrieveProducts,
    refetchInterval: 1000,
  });
  if (isLoading) return <h1 className="text-2xl">Fetching Products</h1>;
  if (error)
    return (
      <h1 className="text-2xl text-red-500">
        An error occurred ${error.message}
      </h1>
    );
  return (
    <>
      <section className="flex flex-wrap  gap-6">
        {products.map((product) => (
          <Product
            handleProductId={handleProductId}
            key={product.id}
            product={product}
          />
        ))}
      </section>
    </>
  );
}
