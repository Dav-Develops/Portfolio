import { useDispatch, useSelector } from "react-redux";
import { togglePage } from "../../features/camera/cameraSlice";

function PagePanel({ children }) {
    const dispatch = useDispatch();

    const open = useSelector(
        (state) => state.camera.pageOpen
    );

    return (
        <>
            {/* Toggle Arrow */}
            <button
                type="button"
                className="
                    position-fixed
                    top-0
                    start-50
                    translate-middle-x
                    mt-2
                    z-3
                    rounded-circle
                    border-0
                    shadow
                    d-flex
                    justify-content-center
                    align-items-center
                    bg-white
                "
                style={{
                    width: "3rem",
                    height: "3rem",
                    fontSize: "1.2rem",
                }}
                onClick={() => dispatch(togglePage())}
                aria-label={open ? "Close page" : "Open page"}
            >
                {open ? "▲" : "▼"}
            </button>

            {/* Page */}
            {open && (
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
                        zIndex: 2,
                    }}
                >
                    {children}
                </div>
            )}
        </>
    );
}

export default PagePanel;