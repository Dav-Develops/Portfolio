import PageLayout from "../../components/layout/PageLayout";

function Projects() {
    const projects = [
        {
            title: "Portfolio Website",
            description:
                "An interactive portfolio built with React, Three.js and the MERN stack.",
        },
        {
            title: "Project Two",
            description:
                "Description of your second project.",
        },
        {
            title: "Project Three",
            description:
                "Description of your third project.",
        },
    ];

    return (
        <PageLayout className="container py-5">
            <div className="min-vh-100">

                <h1 className="display-3 fw-bold mb-5">
                    Projects
                </h1>

                <div className="row g-4">

                    {projects.map((project, index) => (
                        <div className="col-md-6 col-lg-4" key={index} >
                            <div className="card h-100 shadow-sm">

                                <div className="card-body">
                                    <h3 className="card-title">
                                        {project.title}
                                    </h3>

                                    <p className="card-text">
                                        {project.description}
                                    </p>

                                    <button className="btn btn-outline-primary">
                                        View Project
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </PageLayout>
    );
}

export default Projects;