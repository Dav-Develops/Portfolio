import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading : false,
    error : null,
    success : null,
}

const uiSlice = createSlice({
    name : 'ui',
    initialState,
    reducers : {},
});

export default uiSlice.reducer;