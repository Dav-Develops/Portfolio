import 'animate.css';
import '../About/About.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GiLaptop } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";
import { FaGlobe } from 'react-icons/fa';
import PageLayout from "../../components/layout/PageLayout";

function About() {
    const myWork = [
        {
            id: 'frontend',
            logo: GiLaptop,
            title: 'Frontend Development',
            description: 'Creating responsive and interactive interfaces with React, JavaScript, Bootstrap and modern frontend tools.',
        },
        {
            id: 'backend',
            logo: CiSettings,
            title: 'Backend Development',
            description: 'Building APIs and server-side applications with Node.js, Express and MongoDB.',
        },
        {
            id: 'fullstack',
            logo: FaGlobe,
            title: 'Full Stack Applications',
            description: 'Connecting frontend, backend and database technologies into complete web applications.',
        },
    ]
    return (
        <PageLayout title="About Me" subtitle="A little bit about who I am and what I build">
            <div className="container">
                {/* Introduction */}
                <section className="min-vh-75">
                    <div className="col-lg-8  text-left overflow-hidden">
                        <p className="display-5 fw-bold mb-4">
                            Building things for the web.
                        </p>
                        <p className="lead mb-4 fs-2 
                        animate__animated animate__zoomIn animate__delay-2">
                            I'm a developer who enjoys turning ideas into interactive, useful and visually engaging web applications.
                        </p>
                        <p className="lead fs-3">
                            I enjoy working across the frontend and backend, from designing user interfaces to building APIs, managing databases and connecting everything together into a complete application.
                        </p>
                    </div>
                </section>

                {/* What I Do */}
                <section className="py-5">
                    <div className="row mb-5 col-lg-8">
                        <p className="text-uppercase fw-semibold fs-4">
                            What I Do
                        </p>
                        <h2 className="display-6 fw-bold">
                            From idea to application
                        </h2>
                    </div>
                    {/* Next work is to set these 3 Cards using .map */}
                    <div className="row g-4">
                        {myWork.map((work, index) => {
                            // Extracting logos:
                            const Logo = work.logo;
                            return (
                                <div className="col-12 col-md-6 col-lg-4 cursor-pointer" key={work.title}>
                                    <div className="card h-100 shadow-sm rgb-card">
                                        <div className="card-body text-center">
                                            <div className="fs-1 mb-3">
                                                {/* <{work.logo}/> */}
                                                <Logo />
                                            </div>
                                            <h3 className="card-title">
                                                {work.title}
                                            </h3>
                                            <p className="card-text">
                                                {work.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>)
                        })}
                    </div>
                </section>

                {/* Development Approach */}
                <section className="py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6" >
                            <p className="text-uppercase fw-semibold fs-4">
                                My Approach
                            </p>
                            <h2 className="display-6 fw-bold mb-4">
                                Learn. Build. Improve.
                            </h2>
                            <p className={` fs-4 animate__animated animate__delay-4s animate__zoomIn`}>
                                I believe the best way to learn development is by building real projects and solving real problems.
                            </p>
                            <p className={` fs-4 animate__animated animate__delay-4s animate__zoomIn`}>
                                Instead of focusing only on tutorials, I prefer experimenting with technologies, understanding how they work and applying them to practical projects.
                            </p>
                        </div>

                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6">
                                    <div className="p-4 rounded bg-light text-center h-100 shadow">
                                        <h3 className="display-6 fw-bold">
                                            01
                                        </h3>
                                        <p className="mb-0">
                                            Learn
                                        </p>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="p-4 rounded bg-light text-center h-100 shadow">
                                        <h3 className="display-6 fw-bold">
                                            02
                                        </h3>
                                        <p className="mb-0">
                                            Build
                                        </p>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="p-4 rounded bg-light text-center h-100 shadow">
                                        <h3 className="display-6 fw-bold">
                                            03
                                        </h3>
                                        <p className="mb-0">
                                            Experiment
                                        </p>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="p-4 rounded bg-light text-center h-100 shadow">
                                        <h3 className="display-6 fw-bold">
                                            04
                                        </h3>
                                        <p className="mb-0">
                                            Improve
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* This Portfolio */}
                <section className="py-5">
                    <div className="row">
                        <div className="col-lg-9 mx-auto">
                            <div className="card shadow-sm rgb-card">
                                <div className="card-body p-4 p-lg-5 text-center">
                                    <p className="fs-2 text-uppercase fw-semibold text-success">
                                        This Portfolio
                                    </p>
                                    <h2 className="display-6 fw-bold mb-4">
                                        More than a traditional portfolio.
                                    </h2>
                                    <p className="lead mb-0 fs-4">
                                        This website combines a MERN application with React Three Fiber and Three.js to create an interactive 3D portfolio experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
}

export default About;