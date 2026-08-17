import PageLayout from "../../components/layout/PageLayout";

function Projects() {
    const projects = [
        {
            id: "c",
            title: "C Programming",
            description: "For beginners",
        },
        {
            id: "cpp",
            title: "C++ Programming",
            description: "Intermediate level, DSA focused",
        },
        {
            id: "dsa",
            title: "DSA",
            description: "A combination of Theory and Practice, with solved questions",
        },
        {
            id: "leetcode",
            title: "Leetcode",
            description: "LeetCode Solved Questions",
        },
        {
            id: "portfolio",
            title: "My Portfolio",
            descriptoin: "My Personal Portfolio Website",
        },
    ];

    const handleClick = (project_id) => {
        let url = "";
        switch (project_id) {
            case 'c': url = "https://github.com/Dav-Develops/Interprep/tree/master/C%20Programming";
                break;
            case 'cpp': url = "https://github.com/Dav-Develops/Interprep/tree/master/Cpp%20Programming";
                break;
            case 'dsa': url = "https://github.com/Dav-Develops/Interprep/tree/master/Cpp%20Programming";
                break;
            case 'leetcode': url = "https://leetcode.com/problem-list/ds08ekuh/";
                break;
            case 'portfolio': url = "https://github.com/Dav-Develops/Portfolio";
                break;
            default: return;
        }
        window.open(url, '_blank', 'noopener', 'noreferrer');
    }
    return (
        <PageLayout className="container" title="Projects">
            <div className="min-vh-100">

                <p className="display-4 fw-bold mb-5">
                    Current Attainment Representation
                </p>

                <div className="row g-4">

                    {projects.map((project, index) => (
                        <div className="col-md-6 col-lg-4" key={index} >
                            <div className="card h-100 shadow-sm rgb-card">

                                <div className="card-body">
                                    <h3 className="card-title">
                                        {project.title}
                                    </h3>

                                    <p className="card-text">
                                        {project.description}
                                    </p>

                                    <button className="btn btn-outline-secondary" onClick={() => handleClick(project.id)}>
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