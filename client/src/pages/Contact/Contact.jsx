import PageLayout from "../../components/layout/PageLayout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
    faWhatsapp,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";


function Contact() {

    const connectionServices = [
        {
            logo: faWhatsapp,
            title: "WhatsApp",
            description:
                "Connect with me on WhatsApp for quick and easy communication.",
        },
        {
            logo: faEnvelope,
            title: "Email",
            description:
                "Reach out to me via email for professional inquiries and collaborations.",
        },
        {
            logo: faLinkedin,
            title: "LinkedIn",
            description:
                "Connect with me on LinkedIn to expand your professional network and explore potential opportunities.",
        },
    ];

    return (
        <PageLayout
            title="Contact Me"
            subtitle="Connect with me using the details provided below">

            <div className="container">

                <h2 className="text-center mb-5">
                    Fast Connect through any of these preferred ways:
                </h2>

                <div className="row g-4">

                    {connectionServices.map((service) => (
                        <div
                            className="col-12 col-md-6 col-lg-4"
                            key={service.title}
                        >

                            <div className="card h-100 shadow-sm">

                                <div className="card-body text-center">

                                    <div className="fs-1 mb-3">
                                        <FontAwesomeIcon
                                            icon={service.logo}
                                        />
                                    </div>

                                    <h3 className="card-title">
                                        {service.title}
                                    </h3>

                                    <p className="card-text">
                                        {service.description}
                                    </p>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </PageLayout>
    );
}

export default Contact;