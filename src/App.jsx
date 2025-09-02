import AddProduct from "./components/AddProduct";
import Pagination from "./components/Pagination";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";

function App() {
  return (
    <>
      <div className="container mx-auto p-10">
        <div className="grid grid-cols-4 mb-20">
          <div className="add-product">
            <h1 className="text-3xl font-bold text-center mb-15">
              Add Product
            </h1>
            <AddProduct />
          </div>
          <div className="products col-span-2">
            <h1 className="text-3xl font-bold text-center mb-15">
              All Products
            </h1>
            <Products />
          </div>
          <div className="product-details">
            <h1 className="text-3xl font-bold text-center mb-15">
              Product Details
            </h1>
            <ProductDetails />
          </div>
        </div>
        <Pagination />
      </div>
    </>
  );
}

export default App;
