import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '..features/home/Home';
import About from '..features/home/About';
import Projects from '..features/home/Projects';
import Contact from '..features/home/Contact';

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/projects' element={<Projects />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                </Routes></BrowserRouter>
    )
}
export default AppRoutes;