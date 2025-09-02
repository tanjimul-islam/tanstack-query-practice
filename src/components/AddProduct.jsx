const AddProduct = () => {
  return (
    <div className="flex flex-col justify-between bg-white">
      <form className="md:px-10 max-w-lg">
        <div className="flex flex-col gap-1 max-w-md mb-4">
          <label className="text-base font-medium" htmlFor="product-name">
            Product Name
          </label>
          <input
            id="product-name"
            type="text"
            placeholder="Product Name"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          />
        </div>
        <div className="flex flex-col gap-1 max-w-md mb-4">
          <label
            className="text-base font-medium"
            htmlFor="product-description"
          >
            Product Description
          </label>
          <textarea
            id="product-description"
            rows={4}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
            placeholder="Product Description"
          ></textarea>
        </div>
        <div className="flex flex-col gap-1 max-w-md mb-4">
          <label className="text-base font-medium" htmlFor="product-price">
            Product Price
          </label>
          <input
            id="product-price"
            type="number"
            placeholder="0"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          />
        </div>
        <div className="flex flex-col gap-1 max-w-md mb-4">
          <label className="text-base font-medium" htmlFor="thumbnail-url">
            Thumbnail URL
          </label>
          <input
            id="thumbnail-url"
            type="url"
            placeholder="Thumbnail URL"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          />
        </div>
        <button
          type="submit"
          className="px-8 py-2.5 bg-indigo-500 text-white font-medium rounded"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
