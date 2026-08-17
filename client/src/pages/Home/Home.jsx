import Typewriter from "typewriter-effect";
import { useEffect } from "react";
// import Carousel from 'bootstrap/js/dist/carousel';
import * as bootstrap from 'bootstrap';
import PageLayout from "../../components/layout/PageLayout";
// import './Home.css';
function Home() {
    const shortDescription = [" I build modern web applications using React.", " I develop scalable backends with Node.js and Express.",
        "I work with MongoDB to build reliable data-driven applications."];
    useEffect(() => {
        const carouselElement = document.getElementById("shortDescription");

        if (carouselElement) {
            new bootstrap.Carousel(carouselElement, {
                interval: 2000,
                ride: "carousel"
            });
        }
    }, []);
    // Rough Note: From useEffect to here this is 'bootstrap java api' mechanism, controlled the bootstrap 
    // component's behavior with explicit javascript code, because, 'bootstrap data api' mechanism of bootstrap is not
    //  compatible with different javascript frameworks like React, Angular, Vue, etc. So,
//                         Bootstrap Carousel
//                            │
//               ┌────────────┴────────────┐
//               │                         │
//        Data API                   JavaScript API
//               │                         │
// data-bs-ride="carousel"       new Carousel(element)
//               │                         │
//        automatic init             manual init
// Reference/explanation: https://getbootstrap.com/docs/5.3/getting-started/javascript

    return (
        <PageLayout title="Welcome" subtitle="My personal portfolio"  >
            <div className="row  align-items-center rounded-3 p-4">

                <div className="col-lg-10 mx-auto ">

                    <h2 className="display-5 fw-bold ">
                        Hello, I'm Davender Kumar,
                        <Typewriter options={{
                            strings: ["a Full Stack MERN Developer.", "a Web Developer.", "a Software Engineer."],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            deleteSpeed: 50,
                            pauseFor: 2000,
                        }}
                        />
                    </h2>

                    <p className="lead mt-3 fw-semibold fst-italic">
                        Full Stack MERN Developer
                    </p>

                    <div id="shortDescription" className="carousel slide" 
                    data-bs-ride="carousel" data-bs-interval="2000">
                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <p className="text-primary fs-5 fw-semibold">
                                    2nd I build modern web applications using React.
                                </p>
                            </div>

                            <div className="carousel-item">
                                <p className="text-primary fs-5 fw-semibold">
                                    I develop scalable backends with Node.js and Express.
                                </p>
                            </div>

                            <div className="carousel-item">
                                <p className="text-primary fs-5 fw-semibold">
                                    I work with MongoDB to build reliable data-driven applications.
                                </p>
                            </div>

                        </div>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#shortDescription"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                    <div className="container mt-4 lh-lg fs-5">
                        <p className="text-dark">
                            I&rsquo;m a passionate Full Stack MERN Developer who enjoys turning ideas into interactive,
                            meaningful digital experiences. I love building clean, responsive, and scalable web applications
                            while continuously exploring modern technologies and better ways to solve problems.
                            My journey in development is driven by curiosity, creativity, and a desire to understand how things
                            work beneath the surface. From crafting engaging interfaces with React to
                            developing powerful backend systems with Node.js, Express, and MongoDB, I enjoy every stage
                            of the development process. I believe great software is built through continuous learning,
                            thoughtful design, attention to detail, and the willingness to experiment, improve, and create something better.
                        </p>
                    </div>
                </div>

            </div>

        </PageLayout>
    );
}

export default Home;