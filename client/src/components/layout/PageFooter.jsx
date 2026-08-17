function PageFooter() {
    return (
        <footer
            className="container-fluid py-4 text-white"
            style={{
                backgroundColor: "rgba(13, 110, 253, 0.95)",
            }}
        >
            <div className="container">

                <div className="row align-items-center g-3">

                    <div className="col-md-6 text-center text-md-start">
                        <span>
                            © {new Date().getFullYear()} Web Development
                        </span>
                    </div>

                    <div className="col-md-6 text-center text-md-end">
                        <span>
                            Built with MERN Stack
                        </span>
                    </div>

                </div>

            </div>
        </footer>
    );
}

export default PageFooter;