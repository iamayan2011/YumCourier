import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  cartItems: [],
  
  totalQuantity: 0,
  totalAmount: 0,
  totalAmount2: 0,
  category:""
};





export const cartSlice = createSlice({

    
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      
      const newItem = action.payload;
     
      const existingItem = state.cartItems.find(
        (item) => ((item._id === newItem._id) && (item.size === newItem.size))
      );
      
      const totalPriceItem = newItem.qty*newItem.finalPrice
   
      
      
      if (!existingItem) {
        state.cartItems.push({
          _id: newItem._id,
          title: newItem.name,
          image01: newItem.img,
          qty: newItem.qty,
          size: newItem.size,
          option: newItem.options,
          price: newItem.finalPrice,
          totalPrice: totalPriceItem  
          
        });

        

        

      }
     
      else {
  
  

        existingItem.qty++;
      
      }

      state.totalAmount = Number(state.totalAmount) + Number(newItem.finalPrice);
      

      state.totalQuantity++;
      state.category= "cart";


    
    },
    removeItem(state, action) {
      const newItem = action.payload;
      const newId = action.payload._id + action.payload.size;
     
      const existingItem = state.cartItems.find((item) => ((item._id === newItem._id) && (item.size === newItem.size)));
      state.totalQuantity--;
      if (existingItem.qty === 1) {
        state.cartItems = state.cartItems.filter((item) => (item._id + item.size) !== newId);
      } else {
        existingItem.qty--;
       
      }
      state.totalAmount = Number(state.totalAmount) - Number(newItem.price);
      state.category= "cart";
    },

    plusItem(state,action) {
        const newItem = action.payload;
        
        const existingItem = state.cartItems.find((item) => ((item._id === newItem._id) && (item.size === newItem.size)));
        existingItem.qty++;
        state.totalQuantity++;
        state.totalAmount = Number(state.totalAmount) + Number(newItem.price);
        state.category= "cart";

    },

    deleteItem(state, action) {
      const newItem = action.payload;
      const newId = action.payload._id + action.payload.size;
      
      const existingItem = state.cartItems.find((item) => ((item._id === newItem._id) && (item.size === newItem.size)));

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => (item._id + item.size) !== newId);
        state.totalQuantity = state.totalQuantity - existingItem.qty;
      }
      state.totalAmount = Number(state.totalAmount) - Number(newItem.price * newItem.qty);
      state.category= "cart";
    },

    addOrder(state, actiion){
        state.category= "order"
        state.totalQuantity = 0;
        state.totalAmount2 = state.totalAmount;
        state.totalAmount = 0;
    },

    delivered(state, actiion){
        state.category= "";
        state.cartItems= [];
  
  state.totalQuantity= 0;
  state.totalAmount =0;
  state.totalAmount2 = 0;
  
        
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
