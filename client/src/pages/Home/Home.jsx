import PagePanel from "../../components/UI/PagePanel";

function Home() {
    return (
        <PagePanel>

            <div className="container min-vh-100 d-flex align-items-center">

                <div className="row w-100">

                    <div className="col-lg-7">

                        <p className="fs-5 mb-2">
                            Hello, I'm
                        </p>

                        <h1 className="display-1 fw-bold">
                            Your Name
                        </h1>

                        <h2 className="display-6 mb-4">
                            Full Stack MERN Developer
                        </h2>

                        <p className="lead mb-4">
                            I build modern web applications using
                            MongoDB, Express, React and Node.js.
                        </p>

                        <div className="d-flex gap-3">

                            <a
                                href="/projects"
                                className="btn btn-primary btn-lg"
                            >
                                View Projects
                            </a>

                            <a
                                href="/about"
                                className="btn btn-outline-dark btn-lg"
                            >
                                About Me
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </PagePanel>
    );
}

export default Home;