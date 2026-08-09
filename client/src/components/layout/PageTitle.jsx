import { useDispatch, useSelector } from "react-redux";
import { togglePage } from "../../features/camera/cameraSlice";

function PageTitle({ title, subtitle }) {
    const dispatch = useDispatch();

    const open = useSelector(
        (state) => state.camera.pageOpen
    );

    return (
        <header
            className="container-fluid py-4 text-white position-relative"
            style={{
                backgroundColor: "rgba(108, 59, 170, 0.95)",
            }}
        >
            <div className="container">

                <div className="text-center">

                    <h1 className="display-4 fw-bold mb-2">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="lead mb-0">
                            {subtitle}
                        </p>
                    )}

                </div>

            </div>

            {/* Page toggle */}
            <button
                type="button"
                className="
                    position-absolute
                    top-50
                    end-0
                    translate-middle-y
                    me-3
                    d-flex
                    justify-content-center
                    align-items-center
                    rounded-circle
                    border-0
                    shadow
                    bg-white
                "
                style={{
                    width: "3rem",
                    height: "3rem",
                    fontSize: "1.25rem",
                    zIndex: 10,
                }}
                onClick={() => dispatch(togglePage())}
                aria-label={open ? "Close page" : "Open page"}
            >
                {open ? "▲" : "▼"}
            </button>

        </header>
    );
}

export default PageTitle;