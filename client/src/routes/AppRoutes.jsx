import { BrowserRouter, Routes, Route } from "react-router-dom";
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
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='projects' element={<Projects />} />
                    <Route path='skills' element={<skills />} />
                    <Route path='technologies' element={<Projects />} />
                    <Route path='contact' element={<Contact />} />
                    </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;