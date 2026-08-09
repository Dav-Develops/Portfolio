import PagePanel from "../../components/UI/PagePanel";

function About() {
    return (
        <PagePanel className="container py-5">
            <div className="row min-vh-100 align-items-center">
                
                <div className="col-lg-8">
                    <p className="text-uppercase fw-semibold">
                        About Me
                    </p>

                    <h1 className="display-3 fw-bold mb-4">
                        Building things for the web.
                    </h1>

                    <p className="lead">
                        I'm a developer interested in building modern,
                        interactive and useful web applications.
                    </p>

                    <p>
                        This portfolio is built using the MERN stack,
                        React Three Fiber and Redux Toolkit.
                    </p>
                </div>

            </div>
        </PagePanel>
    );
}

export default About;