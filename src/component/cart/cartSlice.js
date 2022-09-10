import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      let orderItem = {
        id,
        quantity: 1,
      };

      let itemExists = state.findIndex((product) => product.id === id);

      if (itemExists === -1) {
        state.push(orderItem);
        return;
      }

      state[itemExists].quantity += 1;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      return state.filter((cart) => cart.id !== id);
    },
    clearCart: (state, action) => {
      return state = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
