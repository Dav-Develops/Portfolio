import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../components/Layout/Layout';
import Home from '../features/home/Home';
import About from '../features/about/About';
import Projects from '../features/projects/Projects';
import Contact from '../features/contact/Contact'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='projects' element={<Projects />} />
                    <Route path='contact' element={<Contact />} />
                    </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;