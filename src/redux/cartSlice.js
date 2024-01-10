import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const isExist = state.products.some(
        (item) => item.id === action.payload.id
      );
      if (isExist) {
        state.products.map((item) =>
          item.id === action.payload.id
            ? { ...item, quan: (item.quan += action.payload.quan) }
            : { ...item }
        );
      } else {
        state.products.push(action.payload);
      }
    },

    increaseQuan: (state, action) => {
      state.products.map((item) =>
        item.id === action.payload.id
          ? { ...item, quan: (item.quan += 1) }
          : { ...item }
      );
    },

    decreaseQuan: (state, action) => {
      state.products.map((item) =>
        item.id === action.payload.id
          ? { ...item, quan: item.quan > 1 ? (item.quan -= 1) : item.quan }
          : { ...item }
      );
    },

    deleteProduct: (state, action) => {
      state.products.splice(action.payload, 1);
    },
  },
});

export default cartSlice.reducer;
