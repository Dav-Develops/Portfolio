import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setCredentials, logout, setAuthLoading } from "../../features/auth/authSlice";
import { getCurrentUser } from "../../features/auth/authAPI";

function authInitializer ({children}){
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const checkAuthentication = async () => {
            try{
                const user = await getCurrentUser();
                dispatch(setCredentials(user));
            } catch{
                dispatch(logout());
            } finally{
                dispatch(setAuthLoading(false));
            }
        };
        checkAuthentication();
    },[dispatch]);
    return children;
}
export default authInitializer;