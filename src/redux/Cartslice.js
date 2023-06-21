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
        (state.totalprice = state.totalprice + action.payload.price),
        state.cartcount++;
    },
    incrementqnty(state, action) {
      state.cartproducts.forEach((item) => {
        if (item.id === action.payload.id) {
          item.qnty++;
        }
      });
      state.totalprice = state.totalprice + action.payload.price;
    },
    decrementqnty(state, action) {
      state.cartproducts.forEach((item) => {
        if (item.id === action.payload.id) {
          item.qnty--;
        }
      });
      state.totalprice = state.totalprice - action.payload.price;
    },
    remove(state, action) {
      state.cartproducts = state.cartproducts.filter((e) => {
        if (e.id !== action.payload.id) {
          return e;
        }
      });
      state.cartcount--;
      state.totalprice =
        state.totalprice - action.payload.price * action.payload.qnty;
        state.cartproductsid[action.payload.id] = false;
    },
  },
});

export const CartActions = Cartslice.actions;

export default Cartslice;
