import Nav from "./_components/Nav.jsx";

const layout = ({ children }) => {
    return (
        <section className="h-full">
            <Nav />
            <div className="h-full">{children}</div>
        </section>
    );
};

export default layout;
