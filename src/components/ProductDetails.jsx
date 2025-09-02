const ProductDetails = () => {
  return (
    <div className="max-w-6xl w-full px-6">
      <div className="flex flex-col gap-6 mt-4">
        <div className="flex gap-3">
          <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
            <img
              src="https://placehold.co/400x400"
              alt="Selected product"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="text-sm w-full">
          <h1 className="text-3xl font-medium">Name</h1>
          <div className="mt-6">
            <p className="text-gray-500/70">MRP: $ 59</p>
          </div>

          <p className="text-base font-medium mt-6">Product Description</p>
          <p>description</p>

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
  );
};

export default ProductDetails;
