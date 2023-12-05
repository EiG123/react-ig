import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoading: true,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducer: {
        loginUser: (state, action) => {
            state.user = action.payload;
        },
        logOutUser: (state) => {
            state.user = null;
        },
        setLoading : (state, action) => {
            state.isLoading = action.payload;
        }

    }
})

export const {loginUser, logOutUser, setLoading} = userSlice.actions;