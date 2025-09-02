import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const retrieveProduct = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:5000/${queryKey[0]}/${queryKey[1]}`
  );
  return response.data;
};
const ProductDetails = ({ selectedProductId }) => {
  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", selectedProductId],
    queryFn: retrieveProduct,
  });
  console.log(product, error, isLoading);
  return selectedProductId ? (
    <div className="w-full px-6">
      <div className="flex flex-col gap-6">
        <div className="flex gap-3">
          <div className="border border-gray-500/30 w-full rounded overflow-hidden">
            <img
              src={product?.thumbnail}
              alt="Selected product"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="text-sm w-full">
          <h1 className="text-3xl font-medium">{product?.name}</h1>
          <div className="mt-6">
            <p className="text-gray-500/70">MRP: ${product?.price}</p>
          </div>
          <p className="text-base font-medium mt-6">Product Description</p>
          <p>{product?.description}</p>
          <div className="flex items-center mt-10 gap-4 text-base">
            <button className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition">
              Add to Cart
            </button>
            <button className="w-full py-3.5 cursor-pointer font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full px-6">
      <h1 className="text-xs font-bold text-center">
        Select a product to show details!
      </h1>
    </div>
  );
};

export default ProductDetails;
