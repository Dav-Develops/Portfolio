import PageLayout from "../../components/layout/PageLayout";

function Technologies() {
    const technologies = [
        "React",
        "React Three Fiber",
        "Three.js",
        "Redux Toolkit",
        "Bootstrap 5",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Git",
        "Vite",
    ];

    return (
        <PageLayout title="Technologies and Frameworks used" subtitle="Brief information on the technologies and the frameworks used.">
            <div className="min-vh-100">

                <h1 className="display-3 fw-bold mb-5">
                    Tech & Frameworks
                </h1>

                <div className="row g-3">
                    {technologies.map((technology) => (
                        <div
                            className="col-6 col-md-4 col-lg-3"
                            key={technology}
                        >
                            <div className="border rounded p-4 text-center bg-white bg-opacity-75">
                                <strong>
                                    {technology}
                                </strong>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </PageLayout>
    );
}

export default Technologies;