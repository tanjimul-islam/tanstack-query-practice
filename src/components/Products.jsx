import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import Pagination from "./Pagination";
import Product from "./Product";

const retrieveProducts = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:5000/${queryKey[0]}/?_page=${queryKey[1].page}&_per_page=8`
  );
  return response.data;
};

const Products = ({ onSelect }) => {
  const [page, setPage] = useState(1);
  const handleSetPage = (pageId) => {
    setPage(pageId);
  };

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", { page }],
    queryFn: retrieveProducts,
    retry: false,
    refetchInterval: 2000,
  });

  return (
    <>
      <section>
        <div className="grid grid-cols-4 mb-6">
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
          {products?.data &&
            products.data.map((product) => (
              <Product onSelect={onSelect} key={product.id} product={product} />
            ))}
        </div>
        <Pagination products={products} handleSetPage={handleSetPage} />
      </section>
    </>
  );
};

export default Products;
