import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const AddProduct = () => {
  const [data, setData] = useState({
    id: crypto.randomUUID(),
    title: "",
    description: "",
    price: "",
    thumbnail: "",
  });
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newProduct) =>
      axios.post(`http://localhost:5000/products`, newProduct),
    onSuccess: () => {
      queryClient.invalidateQueries([`products`]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(data);
    setData({
      id: crypto.randomUUID(),
      title: "",
      description: "",
      price: "",
      thumbnail: "",
    });
  };
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col w-full bg-white">
      <form onSubmit={handleSubmit} className="md:px-10 ">
        <div className="flex flex-col gap-1 mb-4">
          <label className="text-base font-medium" htmlFor="product-name">
            Product Name
          </label>
          <input
            id="product-name"
            type="text"
            placeholder="Product Name"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1 mb-4">
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
            name="description"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label className="text-base font-medium" htmlFor="product-price">
            Product Price
          </label>
          <input
            id="product-price"
            type="number"
            placeholder="0"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
            name="price"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label className="text-base font-medium" htmlFor="thumbnail-url">
            Thumbnail URL
          </label>
          <input
            id="thumbnail-url"
            type="url"
            placeholder="Thumbnail URL"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
            name="thumbnail"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="px-8 py-2.5 bg-indigo-500 text-white font-medium rounded"
        >
          ADD
        </button>
        {mutation.isPending && (
          <p className="text-sm font-bold">Adding new Product</p>
        )}
      </form>
    </div>
  );
};

export default AddProduct;
