import PageLayout from "../../components/layout/PageLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaGithub } from "react-icons/fa";
import { faWhatsapp, faLinkedin, } from "@fortawesome/free-brands-svg-icons";


function Contact() {

    const connectionServices = [
        {
            id:'whatsapp1',
            logo: faWhatsapp,
            title: "whatsApp",
            description: "Connect with me on WhatsApp for quick and easy communication.",
        },
        {
            id:'email1',
            logo: faEnvelope,
            title: "Email",
            description: "Reach out to me via email for professional inquiries and collaborations.",
        },
        {
            id:'linkedin1',
            logo: faLinkedin,
            title: "LinkedIn",
            description: "Connect with me on LinkedIn to expand your professional network and explore potential opportunities.",
        },
        {
            id:'github1',
            logo: FaGithub,
            title: "Github",
            description: "The engine room of my digital creations. Where curiosity meets compilation, tracking my journey through code, collaboration, and continuous learning.",
        },
    ];

    const handleRedicrectToSocialApps = (platform) => {
        let url = "";
        switch (platform) {
            case 'whatsapp1': url = "https://chat.whatsapp.com/LrydwIGdZuIKuZcBQVqBjr?s=cl&p=a&ilr=4";
                break;
            case 'email1': url = "mailto:davender.dav91@gmail.com";
                break;
            case 'linkedin1': url = "https://in.linkedin.com/in/davender-kumar-b74881234";
                break;
            case 'github1': url = "https://github.com/Dav-Develops";
                break;
            default:
                return;
        }
        window.open(url, '_blank', 'noopener', 'noreferrer');
    }
    return (
        <PageLayout title="Contact Me" subtitle="Connect with me using the details provided below">

            <div className="container">

                <p className="display-5 text-center fw-semibold mb-5">
                    Fast Connect through either of these preferred ways:
                </p>

                <div className="row g-4">

                    {connectionServices.map((service, index) => (
                        <div className="col-12 col-md-6 col-lg-4 cursor-pointer" key={service.title}
                            role="button" onClick={() => handleRedicrectToSocialApps(service.id)}
                        >

                            <div className="card h-100 shadow-sm rgb-card">
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