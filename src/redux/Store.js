import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Cartslice";

const rootreducer = {
    cart : Cartslice.reducer,
}
const store = configureStore({
    reducer :rootreducer,
})
export default store;