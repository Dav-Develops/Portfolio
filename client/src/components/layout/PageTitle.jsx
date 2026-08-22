import { useDispatch, useSelector } from "react-redux";

import { togglePage } from "../../features/camera/cameraSlice";
import { toggle_theme } from "../../redux/slices/uiSlice";

import { CiLight } from "react-icons/ci";
import { MdDarkMode, MdMenu, MdMenuOpen } from "react-icons/md";


function PageTitle({ title, subtitle }) {

    const dispatch = useDispatch();


    // Page open / close state
    const open = useSelector(
        (state) => state.camera.pageOpen
    );


    // Global theme state
    const theme = useSelector(
        (state) => state.ui.theme);


    // Select theme icon
    const ThemeIcon =
        theme === "light"
            ? CiLight
            : MdDarkMode;


    // Select page menu icon
    const MenuIcon =
        open
            ? MdMenuOpen
            : MdMenu;


    function handleThemeToggle() {
        dispatch(toggle_theme());
    }


    return (
        <header
            className={`container-fluid py-3 py-sm-2 py-lg-2 position-relative rgb-border-bottom ${
                theme === "dark" ? "text-white" : "text-back"
            }`}
            style={{
                backgroundColor:
                    theme === "dark" ? "rgba(35, 35, 40, 0.95)" : "rgba(108, 59, 170, 0.95)",
            }}
        >

            {/* =====================================================
                THEME BUTTON
            ====================================================== */}

            <button
                type="button"
                className={`position-absolute top-50 start-0 ms-3
                    rounded-4 border-0
                    d-flex justify-content-center
                    align-items-center
                    shadow fs-4 translate-middle-y
                    `
                    // ${theme === "dark" ? "bg-dark text-white" : "bg-white text-dark"}
                }
                onClick={handleThemeToggle}
                style={{
                    width: "3.1rem",
                    height: "3.1rem",
                    zIndex: 10,
                }}
                aria-label="Toggle website theme"
            >
                <ThemeIcon />
            </button>


            {/* =====================================================
                TITLE
            ====================================================== */}

            <div className="container">

                <div className="text-center">

                    <h1 className="display-4 fw-bold mb-2">
                        {title}
                    </h1>

                    {subtitle && (
                        <h5 className="lead mb-0">
                            {subtitle}
                        </h5>
                    )}

                </div>

            </div>


            {/* =====================================================
                PAGE MENU / CLOSE BUTTON
            ====================================================== */}

            <button
                type="button"
                className={`position-absolute
                    top-50 end-0
                    translate-middle-y me-3
                    d-flex justify-content-center
                    align-items-center
                    rounded-circle border-0 shadow
                    ${
                        theme === "dark"
                            ? "bg-dark text-white"
                            : "bg-white text-dark"
                    }`
                }
                style={{
                    width: "3rem",
                    height: "3rem",
                    fontSize: "1.25rem",
                    zIndex: 10,
                }}
                onClick={() => dispatch(togglePage())}
                aria-label={
                    open
                        ? "Close page"
                        : "Open page"
                }
            >
                <MenuIcon />
            </button>

        </header>
    );
}


export default PageTitle;

// import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
// import { togglePage } from "../../features/camera/cameraSlice";
// import { FaAffiliatetheme } from "react-icons/fa";
// import { toggle_theme, togglePage } from "../../redux/slices/uiSlice";
// import { CiLight } from "react-icons/ci";
// import { MdMenu, MdMenuOpen } from "react-icons/md";

// function PageTitle({ title, subtitle }) {
//     const dispatch = useDispatch();

//     const open = useSelector((state) => state.camera.pageOpen);
//     const {theme, pageOpen} = useSelector((state) => state.ui);
//     const ThemeIcon = () =>{
//         theme === "light" ? CiLight : FaAffiliatetheme;
//     }
//     const MenuIcon = () =>{
//         pageOpen === "open" ? MdMenuOpen : MdMenu;
//     }
    
//     const [themelogo, setThemeLogo] = useState(CiLight);
//     const [logobg, setLogobg] = useState("bg-white");
//     function toggle_theme(){
//         setThemeLogo((prev)=>{
//             prev=== CiLight ? MdLightMode : CiLight;
//         });
//         setLogobg((prev)=>{
//             prev==="bg-white"? "bg-dark" : "bg-white";
//         });
//     }

//     return (
//         <header
//             className="container-fluid py-3 py-sm-2 py-lg-2 text-white position-relative rgb-border-bottom"
//             style={{
//                 backgroundColor: "rgba(108, 59, 170, 0.95)",
//             }} >
//             <button type="button" className={`position-absolute top-50 start-0 ms-3 rounded-4 border-0 
//             pb-2 shadow fs-4 translate-middle-y ${logobg}`} onClick={toggle_theme}
//                 style={{width:'3.1rem', height:'3.1rem'}}
//                 >
//                 <toggle_theme /></button>
//             <div className="container">

//                 <div className="text-center">

//                     <h1 className="display-4 fw-bold mb-2">
//                         {title}
//                     </h1>

//                     {subtitle && (
//                         <h5 className="lead mb-0">
//                             {subtitle}
//                         </h5>
//                     )}

//                 </div>

//             </div>

//             {/* Page toggle */}
//             <button
//                 type="button"
//                 className=" position-absolute top-50 end-0 translate-middle-y me-3 d-flex justify-content-center align-items-center rounded-circle border-0 shadow bg-white
//                 "
//                 style={{
//                     width: "3rem", height: "3rem", fontSize: "1.25rem",
//                     zIndex: 10,
//                 }}
//                 onClick={() => dispatch(togglePage())}
//                 aria-label={open ? "Close page" : "Open page"}
//             >
//                 {/* {open ? "▲" : "▼"} */}
//                 {open ? MdMenuOpen : MdMenu}
//             </button>

//         </header>
//     );
// }

// export default PageTitle;