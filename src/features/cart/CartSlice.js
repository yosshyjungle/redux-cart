import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItems: cartItems,
    amount: 4,
    total: 0, 
}

const cartSlice = createSlice({
    // useSelectorで呼び出すSliceの名前
    name: "cart",
    // SliceのState
    initialState,
    // Sliceのreducer(Action CreatorはReducerに含まれる)
    reducers: {}
})

export default cartSlice.reducer