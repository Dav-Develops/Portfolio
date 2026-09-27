import { useNavigate } from "react-router-dom";
import PageLayout from "../../components/layout/PageLayout";

function Home() {
    const navigate = useNavigate();

    return (
        <PageLayout
            title="Welcome to My Portfolio"
            subtitle="Explore my work, skills and projects through the tree"
        >

            {/* =====================================================
                HERO
            ====================================================== */}

            <section className="container py-4 py-lg-5">

                <div className="row align-items-center g-4">

                    <div className="col-12 col-lg-8">

                        <span className="badge rounded-pill bg-primary px-3 py-2 mb-3">
                            Full-Stack Web Developer
                        </span>

                        <h2 className="display-4 fw-bold mb-3">
                            Building interactive experiences
                            <span className="d-block">
                                for the modern web.
                            </span>
                        </h2>

                        <p className="lead theme-text mb-4">
                            I'm a developer focused on building modern,
                            responsive and interactive web applications
                            using technologies such as React, Node.js,
                            Express and MongoDB.
                        </p>

                        <div className="d-flex flex-wrap gap-2">

                            <button
                                className="btn btn-primary px-4"
                                onClick={() =>
                                    document
                                        .getElementById("home-services")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        })
                                }
                            >
                                Explore My Work
                            </button>

                            <button
                                className="btn btn-outline-secondary px-4"
                                onClick={() =>
                                    document
                                        .getElementById("home-features")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        })
                                }
                            >
                                Website Features
                            </button>

                        </div>

                    </div>


                    <div className="col-12 col-lg-4">

                        <div className="card theme-card shadow-sm text-center">

                            <div className="card-body p-4">

                                <div className="display-1 mb-3">
                                    🌳
                                </div>

                                <h3 className="card-title">
                                    Explore the Tree
                                </h3>

                                <p className="card-text">
                                    Each fruit represents a different
                                    section of the portfolio.
                                </p>

                                <div className="d-flex flex-wrap justify-content-center gap-2">

                                    <span className="badge bg-success">
                                        About
                                    </span>

                                    <span className="badge bg-warning text-dark">
                                        Projects
                                    </span>

                                    <span className="badge bg-info text-dark">
                                        Skills
                                    </span>

                                    <span className="badge bg-danger">
                                        Contact
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                QUICK INTRO
            ====================================================== */}

            <section className="container py-4">

                <div className="card theme-card shadow-sm">

                    <div className="card-body p-4 p-lg-5">

                        <div className="row align-items-center g-4">

                            <div className="col-12 col-lg-7">

                                <p className="text-uppercase fw-semibold text-primary mb-2">
                                    A little about me
                                </p>

                                <h2 className="theme-heading mb-3">
                                    Developer • Learner • Builder
                                </h2>

                                <p className="card-text">
                                    I enjoy turning ideas into functional
                                    web applications while continuously
                                    learning new technologies and improving
                                    my development skills.
                                </p>

                                <p className="card-text mb-0">
                                    This portfolio itself is one of my
                                    projects — combining a traditional
                                    web application with an interactive
                                    3D environment.
                                </p>

                            </div>


                            <div className="col-12 col-lg-5">

                                <div className="row g-3">

                                    <div className="col-6">
                                        <div className="border rounded-3 p-3 text-center h-100">
                                            <h3 className="fw-bold mb-1">
                                                MERN
                                            </h3>
                                            <small className="theme-text">
                                                Full Stack
                                            </small>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="border rounded-3 p-3 text-center h-100">
                                            <h3 className="fw-bold mb-1">
                                                3D
                                            </h3>
                                            <small className="theme-text">
                                                Interactive Web
                                            </small>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="border rounded-3 p-3 text-center h-100">
                                            <h3 className="fw-bold mb-1">
                                                React
                                            </h3>
                                            <small className="theme-text">
                                                Frontend
                                            </small>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="border rounded-3 p-3 text-center h-100">
                                            <h3 className="fw-bold mb-1">
                                                API
                                            </h3>
                                            <small className="theme-text">
                                                Backend
                                            </small>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                WHAT I BUILD
            ====================================================== */}

            <section
                id="home-services"
                className="container py-5"
            >

                <div className="text-center mb-4">

                    <p className="text-uppercase fw-semibold text-primary mb-2">
                        What I Build
                    </p>

                    <h2 className="display-6 fw-bold">
                        Turning ideas into applications
                    </h2>

                    <p className="theme-text">
                        A few areas I enjoy working with.
                    </p>

                </div>


                <div className="row g-4">

                    <div className="col-12 col-md-6 col-lg-4">

                        <div className="card theme-card h-100 shadow-sm">

                            <div className="card-body p-4">

                                <div className="fs-1 mb-3">
                                    💻
                                </div>

                                <h3 className="card-title">
                                    Web Applications
                                </h3>

                                <p className="card-text">
                                    Responsive and user-friendly
                                    applications designed for desktop,
                                    tablet and mobile devices.
                                </p>

                            </div>

                        </div>

                    </div>


                    <div className="col-12 col-md-6 col-lg-4">

                        <div className="card theme-card h-100 shadow-sm">

                            <div className="card-body p-4">

                                <div className="fs-1 mb-3">
                                    ⚙️
                                </div>

                                <h3 className="card-title">
                                    Full-Stack Development
                                </h3>

                                <p className="card-text">
                                    Frontend interfaces connected to
                                    backend APIs, databases and
                                    authentication systems.
                                </p>

                            </div>

                        </div>

                    </div>


                    <div className="col-12 col-md-6 col-lg-4">

                        <div className="card theme-card h-100 shadow-sm">

                            <div className="card-body p-4">

                                <div className="fs-1 mb-3">
                                    🌐
                                </div>

                                <h3 className="card-title">
                                    Interactive Experiences
                                </h3>

                                <p className="card-text">
                                    Interactive interfaces and 3D
                                    experiences that make websites
                                    more engaging.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                FEATURE CAROUSEL
            ====================================================== */}

            <section className="container py-5">

                <div className="text-center mb-4">

                    <p className="text-uppercase fw-semibold text-primary mb-2">
                        Portfolio Highlights
                    </p>

                    <h2 className="display-6 fw-bold">
                        More than a traditional portfolio
                    </h2>

                </div>


                <div
                    id="portfolioCarousel"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >

                    <div className="carousel-indicators">

                        <button
                            type="button"
                            data-bs-target="#portfolioCarousel"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        />

                        <button
                            type="button"
                            data-bs-target="#portfolioCarousel"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        />

                        <button
                            type="button"
                            data-bs-target="#portfolioCarousel"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        />

                    </div>


                    <div className="carousel-inner rounded-4 shadow-sm">

                        {/* Slide 1 */}

                        <div className="carousel-item active">

                            <div className="card theme-card border-0">

                                <div className="card-body text-center py-5 px-4">

                                    <div className="display-3 mb-3">
                                        🌳
                                    </div>

                                    <h2>
                                        Interactive 3D Portfolio
                                    </h2>

                                    <p className="card-text mx-auto" style={{ maxWidth: "45rem" }}>
                                        Instead of navigating a conventional
                                        menu, explore the portfolio through
                                        an interactive 3D tree and its fruits.
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* Slide 2 */}

                        <div className="carousel-item">

                            <div className="card theme-card border-0">

                                <div className="card-body text-center py-5 px-4">

                                    <div className="display-3 mb-3">
                                        🔐
                                    </div>

                                    <h2>
                                        Authentication & Security
                                    </h2>

                                    <p className="card-text mx-auto" style={{ maxWidth: "45rem" }}>
                                        Protected sections use real
                                        registration and login functionality
                                        backed by a Node.js and MongoDB
                                        authentication system.
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* Slide 3 */}

                        <div className="carousel-item">

                            <div className="card theme-card border-0">

                                <div className="card-body text-center py-5 px-4">

                                    <div className="display-3 mb-3">
                                        🌓
                                    </div>

                                    <h2>
                                        Responsive & Theme Aware
                                    </h2>

                                    <p className="card-text mx-auto" style={{ maxWidth: "45rem" }}>
                                        The interface adapts to different
                                        screen sizes and includes a persistent
                                        light and dark theme.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#portfolioCarousel"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        />

                        <span className="visually-hidden">
                            Previous
                        </span>

                    </button>


                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#portfolioCarousel"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        />

                        <span className="visually-hidden">
                            Next
                        </span>

                    </button>

                </div>

            </section>


            {/* =====================================================
                WEBSITE FEATURES
            ====================================================== */}

            <section
                id="home-features"
                className="container py-5"
            >

                <div className="text-center mb-4">

                    <p className="text-uppercase fw-semibold text-primary mb-2">
                        Website Features
                    </p>

                    <h2 className="display-6 fw-bold">
                        Built as a real application
                    </h2>

                </div>


                <div className="row g-3">

                    {[
                        ["🌳", "Interactive 3D Environment"],
                        ["🍎", "Fruit-Based Navigation"],
                        ["⚛️", "React & Redux"],
                        ["🚀", "MERN Architecture"],
                        ["🔐", "Authentication"],
                        ["📱", "Responsive UI"],
                        ["🌓", "Light / Dark Theme"],
                        ["🎨", "Bootstrap 5 Interface"],
                    ].map(([icon, title]) => (

                        <div
                            className="col-12 col-sm-6 col-lg-3"
                            key={title}
                        >

                            <div className="card theme-card h-100">

                                <div className="card-body text-center py-4">

                                    <div className="fs-2 mb-2">
                                        {icon}
                                    </div>

                                    <h5 className="card-title mb-0">
                                        {title}
                                    </h5>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </section>


            {/* =====================================================
                FINAL CTA
            ====================================================== */}

            <section className="container py-5">

                <div className="card theme-card shadow-sm text-center">

                    <div className="card-body p-4 p-lg-5">

                        <h2 className="display-6 fw-bold mb-3">
                            Let's build something useful.
                        </h2>

                        <p className="card-text lead mx-auto mb-4">
                            Have a project idea, collaboration opportunity,
                            or simply want to explore my work?
                        </p>

                        <button
                            className="btn btn-primary px-4"
                            onClick={() => navigate("/contact")}
                        >
                            Get in Touch
                        </button>

                    </div>

                </div>

            </section>

        </PageLayout>
    );
}

export default Home;
