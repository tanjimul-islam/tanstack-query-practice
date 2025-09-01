const Product = ({ product, handleProductId }) => {
  return (
    <div className="rounded-lg group shadow-xl p-4 hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all w-56">
      <button
        onClick={() => {
          handleProductId(product.id);
        }}
        className="cursor-pointer"
      >
        <img
          className=" w-full h-72 object-cover object-center"
          src={product.thumbnail}
          alt="image"
        />
        <p className="text-sm mt-2">{product.title}</p>
      </button>
      <p className="text-xl">$ {product.price}</p>
      <p className="text-xs">
        <b>Rating: </b> {product.rating}
      </p>
      <p className="text-xs">
        <b>Stock: </b> {product.stock}
      </p>
    </div>
  );
};

export default Product;
