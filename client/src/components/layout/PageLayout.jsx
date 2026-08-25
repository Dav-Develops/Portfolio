import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageTitle from "./PageTitle";
import PageFooter from "./PageFooter";
import PagePanel from "../UI/PagePanel";

import { toggle_theme } from "../../redux/slices/uiSlice";


function PageLayout({
    title,
    subtitle,
    children,
}) {

    const dispatch = useDispatch();

    const theme = useSelector(
        (state) => state.ui.theme
    );


    /*
     * Save theme whenever it changes
     */
    useEffect(() => {

        localStorage.setItem(
            "portfolio-theme",
            theme
        );

    }, [theme]);


    /*
     * Apply theme to the entire document
     */
    useEffect(() => {

        document.documentElement.setAttribute(
            "data-theme",
            theme
        );

        document.body.classList.remove(
            "theme-light",
            "theme-dark"
        );

        document.body.classList.add(
            `theme-${theme}`
        );

    }, [theme]);


    /*
     * Theme button is actually displayed
     * inside PageTitle.
     *
     * PageTitle doesn't need to know how
     * the theme works.
     */
    const handleThemeToggle = () => {
        dispatch(toggle_theme());
    };


    return (
        <PagePanel
            className={`d-flex flex-column page-layout theme-${theme}`}
        >

            <PageTitle
                title={title}
                subtitle={subtitle}
                onThemeToggle={handleThemeToggle}
                theme={theme}
            />


            <main
                    className={`container flex-grow-1 py-4 mw-100 min-vh-100 page-content theme-${theme}`}
            >
                {children}
            </main>


            <PageFooter theme={theme}/>

        </PagePanel>
    );
}


export default PageLayout;