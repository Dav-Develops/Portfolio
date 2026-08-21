import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading : false,
    error : null,
    success : null,
}

const uiSlice = createSlice({
    name : 'ui',
    initialState,
    reducers : {
        toggle_theme: (state)=> {
            state.theme = "light",
            state.theme==="light" ? "dark" : "light"
        },
        togglePage: (state) =>{
            state.pageOpen = !state.pageOpen;
        },
    },
});
export const{ toggle_theme, togglePage } = uiSlice.actions;

export default uiSlice.reducer;