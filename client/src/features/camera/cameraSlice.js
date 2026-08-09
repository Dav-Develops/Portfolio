import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentFruit: "home",
    isAnimating: false,
};

const cameraSlice = createSlice({
    name: "camera",
    initialState,
    reducers: {
        setCurrentFruit(state, action) {
            state.currentFruit = action.payload;
        },

        setAnimating(state, action) {
            state.isAnimating = action.payload;
        },
    },
});

export const {
    setCurrentFruit,
    setAnimating,
} = cameraSlice.actions;

export default cameraSlice.reducer;