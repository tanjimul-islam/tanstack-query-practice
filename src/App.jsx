import { useState } from "react";
import AddProduct from "./components/AddProduct";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";

function App() {
  const [productId, setProductId] = useState(null);
  const handleProductId = (id) => {
    setProductId(id);
  };
  return (
    <>
      <div className="container mx-auto  p-10">
        <AddProduct />
        <div className="grid grid-cols-6 gap-10">
          <div className="col-span-4">
            <Products handleProductId={handleProductId} />
          </div>
          <div className="col-span-2 fixed top-0 right-0">
            <ProductDetails id={productId} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
