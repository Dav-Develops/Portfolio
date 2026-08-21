import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Authentication/Register";
import Login from '../pages/Authentication/Login';
import ProtectedRoute from "./ProtectedRoute";
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact/Contact';
import Skills from '../pages/Skills/Skills';
import Technologies from '../pages/Technologies/Technologies';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Layout />} >
                    {/* Public Routes */}
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    {/* Protected Routes */}
                    <Route element={<ProtectedRoute />}>
                        <Route path='projects' element={<Projects />} />
                        <Route path='skills' element={<Skills />} />
                        <Route path='technologies' element={<Technologies />} />
                        <Route path='contact' element={<Contact />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;