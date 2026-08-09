import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    progress: 0,
    currentFruit: null,
    pageOpen: false,
};

const cameraSlice = createSlice({
    name: "camera",

    initialState,

    reducers: {
        setProgress(state, action) {
            state.progress = action.payload;
        },

        setCurrentFruit(state, action) {
            state.currentFruit = action.payload;
            state.pageOpen = true;
        },

        togglePage(state) {
            state.pageOpen = !state.pageOpen;
        },

        closePage(state) {
            state.pageOpen = false;
        },
    },
});

export const {
    setProgress,
    setCurrentFruit,
    togglePage,
    closePage,
} = cameraSlice.actions;

export default cameraSlice.reducer;