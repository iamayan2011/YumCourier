import {configureStore} from '@reduxjs/toolkit';
import cartSlice from '../features/AddToCart/cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        
    }
});

