const Navbar = () => {
        const title = 'The Dojo Blog';
        const link = 'www.google.pl';

        return (
            <nav className="navbar">
                <h1>{title}</h1>
                <div className="links">
                    <a href="/">Home</a>
                    <a href="/create">New blog</a>
                    <a href={link}>Google site</a>
                </div>
            </nav>
        );
}

export default Navbar;