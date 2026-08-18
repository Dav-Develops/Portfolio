import { combineReducers } from '@reduxjs/toolkit';
import uiReducer from '../redux/slices/uiSlice';
import cameraReducer from '../features/camera/cameraSlice';
//There is no function named "cameraReducer" in cameraSlice. This is a custom name, we can give a 
// custom name like "CR".
import authReducer from '../features/auth/authSlice';


const rootReducer = combineReducers({
    ui : uiReducer,
    camera: cameraReducer,
    auth: authReducer,
    // we'll add reducers/slices here later
});

export default rootReducer;