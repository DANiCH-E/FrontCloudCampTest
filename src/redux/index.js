import {configureStore} from "@reduxjs/toolkit";
import UserReducer from './reducer';

export const store = configureStore({
    reducer: {
        cart: UserReducer
    }
})