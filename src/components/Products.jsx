import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Product from "./Product";

const retrieveProducts = async ({ queryKey }) => {
  const response = await axios.get(`http://localhost:5000/${queryKey[0]}`);
  return response.data;
};

const Products = ({ onSelect }) => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: retrieveProducts,
    retry: false,
    refetchInterval: 2000,
  });

  return (
    <>
      <section className="grid grid-cols-4 mb-6">
        {isLoading && (
          <h1 className="text-center font-bold text-sm col-span-4">
            Loading Products...
          </h1>
        )}
        {error && (
          <h1 className="text-center font-bold text-sm text-red-600 col-span-4">
            Something went wrong: {error.message}
          </h1>
        )}
        {products &&
          products.map((product) => (
            <Product onSelect={onSelect} key={product.id} product={product} />
          ))}
      </section>
    </>
  );
};

export default Products;
