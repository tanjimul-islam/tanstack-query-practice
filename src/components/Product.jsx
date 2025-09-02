const Product = ({ product, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(product.id)}
      href="#"
      className="group w-56 mb-6 shadow-md p-4 rounded-md cursor-pointer"
    >
      <img
        className="rounded-lg w-full hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-center"
        src={product.thumbnail}
        alt="image"
      />
      <p className="text-sm mt-2">{product.title}</p>
      <p className="text-xl">$ {product.price}</p>
    </button>
  );
};

export default Product;
