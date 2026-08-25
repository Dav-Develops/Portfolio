import { useSelector } from "react-redux";

function ThemeWrapper({ children }) {

    const theme = useSelector(
        (state) => state.ui.theme
    );

    return (
        <div
            className={`app-theme app-theme-${theme}`}
        >
            {children}
        </div>
    );
}

export default ThemeWrapper;