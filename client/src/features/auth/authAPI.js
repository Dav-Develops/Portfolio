import axios from "axios";

const API = axios.create({
    baseURL: "https://myportfolio-prfl.onrender.com/api",
    withCredentials: true,
});

export const getCurrentUser = async () => {
    const response = await API.get("/auth/me");

    return response.data.user;
};

export const loginUser = async (email, password) => {
    const response = await API.post("/auth/login", {
        email,
        password,
    });

    return response.data.user;
};

// export const logoutUser = async () =>{
//     await API.post("/auth/logout");
// };