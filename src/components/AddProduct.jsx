import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const AddProduct = () => {
  const queryClient = useQueryClient();

  const [state, setState] = useState({
    id: crypto.randomUUID(),
    thumbnail: "",
    title: "",
    description: "",
    brand: "",
    price: "",
    stock: "",
    rating: 5,
  });
  const { mutate, isSuccess } = useMutation({
    mutationFn: (newProduct) => {
      axios.post(`http://localhost:5000/products`, newProduct);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    mutate(state);
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  isSuccess && (
    <h1 className="font-bold text-2xl text-green-500">
      Data Added Successfully
    </h1>
  );
  return (
    <div className="py-10 flex flex-col justify-between bg-white">
      <form onSubmit={handleSubmit} className="md:p-10 p-4 space-y-5 max-w-lg">
        <h1 className="text-3xl text-bold">Add Product</h1>

        <div>
          <div className="flex flex-col gap-1 max-w-md mt-2">
            <label className="text-base font-medium" htmlFor="product-image">
              Image URL
            </label>
            <input
              id="product-image"
              type="url"
              placeholder="Product Image URL"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              required
              name="thumbnail"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-name">
            Product Name
          </label>
          <input
            id="product-name"
            type="text"
            placeholder="Type here"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1 max-w-md">
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
            placeholder="Type here"
            name="description"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="text-base font-medium" htmlFor="brand">
            Brand
          </label>
          <input
            id="brand"
            type="text"
            placeholder="Brand"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
            name="brand"
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex-1 flex flex-col gap-1 w-32">
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
          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="product-stock">
              Stock
            </label>
            <input
              id="product-stock"
              type="number"
              placeholder="Stock"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              required
              name="stock"
              onChange={handleChange}
            />
          </div>
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
