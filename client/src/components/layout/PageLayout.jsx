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
            className=" d-flex flex-column">

            <PageTitle
                title={title}
                subtitle={subtitle}
            />

            <main className="container flex-grow-1 py-4 mw-100 min-vh-100"
                        style={{
                backgroundColor: "rgb(255, 255, 255)",
            }}
>
                {children}
            </main>

            <PageFooter />
        </PagePanel>
    );
}

export default PageLayout;