import { useSelector } from "react-redux";

function PagePanel({ children }) {

    const open = useSelector(
        (state) => state.camera.pageOpen
    );

    if (!open) {
        return null;
    }

    return (
        <div
            className="
                position-fixed
                top-0
                start-0
                w-100
                vh-100
                overflow-auto
            "
            style={{
                zIndex: 100,
            }}
        >
            {children}
        </div>
    );
}

export default PagePanel;