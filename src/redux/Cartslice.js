import { createSlice } from "@reduxjs/toolkit";
const Cartslice = createSlice({
  name: "Cart",
  initialState: {
    cartproductsid: {},
    cartproducts: [],
    totalprice: 0,
    cartcount: 0,
  },
  reducers: {
    Addtocart(state, action) {
      (state.cartproductsid[action.payload.id] = true),
        state.cartproducts.push(action.payload),
        (state.totalprice = Math.floor(Math.floor(state.totalprice) +Math.floor(action.payload.price))),
        state.cartcount++;
    },
    incrementqnty(state, action) {
      state.cartproducts.forEach((item) => {
        if (item.id === action.payload.id) {
          item.qnty++;
        }
      });
      state.totalprice = Math.floor(Math.floor(state.totalprice )+ Math.floor(action.payload.price));
    },
    decrementqnty(state, action) {
      state.cartproducts.forEach((item) => {
        if (item.id === action.payload.id) {
          item.qnty--;
        }
      });
      state.totalprice = Math.floor(Math.floor(state.totalprice) - Math.floor(action.payload.price));
    },
    remove(state, action) {
      state.cartproducts = state.cartproducts.filter((e) => {
        if (e.id !== action.payload.id) {
          return e;
        }
      });
      state.cartcount--;
      state.totalprice =
        Math.floor(Math.floor(state.totalprice) - Math.floor(action.payload.price)* Math.floor(action.payload.qnty));
        state.cartproductsid[action.payload.id] = false;
    },
  },
});

export const CartActions = Cartslice.actions;

export default Cartslice;
