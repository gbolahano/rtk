import { useSelector, useDispatch } from "react-redux";

import { addToCart } from "../cart/cartSlice";

const Products = () => {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(addToCart(id));
  };

  return (
    <div className="bg-gray-100 w-2/3 p-10 ">
      <h2 className="text-5xl mb-3 font-medium">Items</h2>
      <div className="grid grid-cols-3 gap-3">
        {products.map((product) => {
          return (
            <div className="space-y-2">
              <img className="h-32 w-full" src={product.imgUrl} alt="asd" />
              <p className="text-xl">{product.name}</p>
              <p className="text-3xl font-semibold">${product.price}</p>
              <button
                onClick={() => handleClick(product.id)}
                className="py-2 px-3 rounded-md bg-indigo-500 text-white"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
