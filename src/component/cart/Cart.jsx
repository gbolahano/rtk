import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "./cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const renderCartItems = (products, cartItems) => {
    return cartItems?.map((item) => {
      const product = products?.find((product) => product.id === item.id);
      return (
        <div className="flex space-x-3">
          <img className="h-10 w-10" src={product.imgUrl} alt="asd" />
          <div className="w-full">
            <p className="text-xl font-medium">{product.name}</p>
            <p className="text-sm font-medium">quantity: {item.quantity} x {product.price}</p>
            <p className="text-xl font-semibold">
              ${item.quantity * product.price}
            </p>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="py-1 px-2 text-xs rounded-md bg-red-500 text-white"
            >
              Remove from cart
            </button>
          </div>
        </div>
      );
    });
  };

  const calculateTotal = () => {
    let total = cartItems.reduce((prevState, currState) => {
      let quantity = currState.quantity;
      let productId = currState.id;

      const product = products.find((product) => product.id === productId);

      let total = prevState + product.price * quantity;
      return total;
    }, 0);

    return (
      <div>
        <p className="text-base">Total:</p>
        <p className="text-2xl font-semibold">${total}</p>
      </div>
    );
  };

  return (
    <div className="w-2/3 bg-gray-200 p-10">
      <h1 className="text-2xl font-medium">Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          <button
            onClick={() => dispatch(clearCart())}
            className="py-1 px-2 my-3 text-xs rounded-md bg-red-500 text-white"
          >
            Clear cart
          </button>
        </div>
      ) : (
        <></>
      )}
      <div className="space-y-3">{renderCartItems(products, cartItems)}</div>
      {cartItems.length > 0 ? <div>{calculateTotal()}</div> : <></>}
    </div>
  );
};

export default Cart;
