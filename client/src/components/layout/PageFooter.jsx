function PageFooter() {
    return (
        <footer
            className="container-fluid py-4 text-white rgb-border-top"
            style={{
                backgroundColor: "rgba(13, 110, 253, 0.95)",
            }}
        >
            <div className="container">

                <div className="row align-items-center g-3">

                    <div className="col-md-6 text-center text-md-start">
                        <span>
                            © {new Date().getFullYear()}
                            <span role="button" onClick={()=> window.open("https://www.w3schools.com/whatis/")} 
                                target='_blank' rel="noopener noreferrer"> Web Development</span>
                        </span>
                    </div>

                    <div className="col-md-6 text-center text-md-end">
                        <span>
                            Built with <span role="button" onClick={()=> window.open("https://www.geeksforgeeks.org/mern/understand-mern-stack/")}
                            target='_blank' rel="noopener noreferrer">MERN Stack</span>
                        </span>
                    </div>

                </div>

            </div>
        </footer>
    );
}

export default PageFooter;