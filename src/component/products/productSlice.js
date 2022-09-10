import { createSlice } from "@reduxjs/toolkit";

const products = [
  {
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTIlMjBwcm98ZW58MHx8MHx8&w=1000&q=80",
    name: "iphone 13",
    price: 20,
  },
  {
    id: 2,
    imgUrl:
      "https://cdn.pocket-lint.com/r/s/x1920/assets/images/145854-phones-news-buyer-s-guide-best-samsung-phones-galaxy-s-note-and-a-compared-image26-bkpozjv71s.jpg",
    name: "samsung",
    price: 30,
  },
  {
    id: 3,
    imgUrl:
      "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/xiaomi_12_pro_purple.jpg",
    name: "xiaomi",
    price: 40,
  },
  // {
  //   id: 4,
  //   imgUrl:
  //     "https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTIlMjBwcm98ZW58MHx8MHx8&w=1000&q=80",
  //   name: "iphone 14",
  //   price: 20,
  // },
];

const productSlice = createSlice({
  name: "products",
  initialState: products,
  reducers: {},
});


export default productSlice.reducer
