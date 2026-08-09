import PageLayout from "../../components/layout/PageLayout";

function Skills() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Git",
    ];

    return (
        <PageLayout title="Skills" subtitle="These are my Skills.">
            <div className="min-vh-100">

                <h1 className="display-3 fw-bold mb-5">
                    Skills
                </h1>

                <div className="row g-4">
                    {skills.map((skill) => (
                        <div
                            className="col-6 col-md-4 col-lg-3"
                            key={skill}
                        >
                            <div className="card h-100 shadow-sm">
                                <div className="card-body text-center">
                                    <h5 className="card-title mb-0">
                                        {skill}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </PageLayou>
    );
}

export default Skills;