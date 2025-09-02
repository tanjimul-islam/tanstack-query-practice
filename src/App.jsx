import { useState } from "react";
import AddProduct from "./components/AddProduct";
import Pagination from "./components/Pagination";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(6);
  const handleSelectProduct = (productId) => {
    setSelectedProduct(productId);
  };
  return (
    <>
      <div className="py-10">
        <div className="grid grid-cols-10 mb-20">
          <div className="add-product col-span-2">
            <div className="fixed flex flex-col justify-start h-screen">
              <h1 className="text-3xl font-bold text-center mb-15">
                Add Product
              </h1>
              <AddProduct />
            </div>
          </div>
          <div className="products col-span-6">
            <h1 className="text-3xl font-bold text-center mb-15">
              All Products
            </h1>
            <Products onSelect={handleSelectProduct} />
          </div>
          <div className="col-span-2">
            <div className="product-details fixed flex flex-col justify-start h-screen ">
              <h1 className="text-3xl font-bold text-center mb-15">
                Product Details
              </h1>
              <ProductDetails selectedProductId={selectedProduct} />
            </div>
          </div>
        </div>
        <Pagination />
      </div>
    </>
  );
}

export default App;
