import { createSlice } from "@reduxjs/toolkit";
import offices from "../offices";

const initialState = {
    offices: offices,
    cart: [],
    items: 0,
    filterByCity: ''
};

export const officesSlice = createSlice({
    name: 'offices',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { city, rate, description, image, id } = action.payload;
            const itemInCart = state.cart.find((item) => item.id === action.payload.id);
                if(!itemInCart){
                    state.cart.push({
                        id,
                        city, 
                        rate,
                        description,
                        image,
                    });
                    state.items = state.items + 1;
                }
                else{
                    alert('THIS PLACE IS ALREADY IN YOUR SHORTLIST!');
                }
        },
        removeFromCart: (state, action) => {
            const currentItem = action.payload;
            state.cart = state.cart.filter((item) => item.id !== currentItem);
            state.items = state.items - 1;
        },
        filterOffices: (state, action) => {
            const { value } = action.payload;
            state.filterByCity = value;
        }
    }
});

export default officesSlice.reducer;
export const { addToCart, removeFromCart, filterOffices } = officesSlice.actions;