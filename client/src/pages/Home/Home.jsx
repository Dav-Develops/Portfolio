import PageLayout from "../../components/layout/PageLayout";

function Home() {
    return (
        <PageLayout title="Welcome" subtitle="My personal portfolio" >

            <div className="row min-vh-100 align-items-center bg-light rounded-3 shadow-sm p-4">

                <div className="col-lg-8 mx-auto text-center">

                    <h2 className="display-5 fw-bold">
                        Hello, I'm Davender Kumar, a Full Stack MERN Developer.
                    </h2>

                    <p className="lead mt-3">
                        Full Stack MERN Developer
                    </p>

                    <p className="mt-4">
                        I build modern web applications using
                        React, Node.js, Express and MongoDB.
                    </p>

                </div>

            </div>

        </PageLayout>
    );
}

export default Home;