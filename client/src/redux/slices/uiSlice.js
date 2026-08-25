import { createSlice } from "@reduxjs/toolkit";

const savedTheme = localStorage.getItem("portfolio-theme");

const initialState = {
    loading: false,
    error: null,
    success: null,

    theme: savedTheme || "light",
};

const uiSlice = createSlice({
    name: "ui",

    initialState,

    reducers: {
        toggle_theme: (state) => {
            state.theme =
                state.theme === "light"
                    ? "dark"
                    : "light";
        },

        setTheme: (state, action) => {
            state.theme = action.payload;
        },
    },
});

export const {
    toggle_theme,
    setTheme,
} = uiSlice.actions;

export default uiSlice.reducer;