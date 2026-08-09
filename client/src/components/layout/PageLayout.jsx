import PageTitle from "./PageTitle";
import PageFooter from "./PageFooter";
import PagePanel from "../UI/PagePanel";

function PageLayout({
    title,
    subtitle,
    children,
}) {
    return (
        <PagePanel
            className="min-vh-100 d-flex flex-column"
            style={{
                backgroundColor: "rgba(255, 255, 255, 0.75)",
            }}
        >
            <PageTitle
                title={title}
                subtitle={subtitle}
            />

            <main className="container flex-grow-1 py-4">
                {children}
            </main>

            <PageFooter />
        </PagePanel>
    );
}

export default PageLayout;