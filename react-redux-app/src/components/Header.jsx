import "./Header.css";
import ThemeToggle from "./ThemeToggle";

function Header() {
    return (
        <header className="navbar">
            <div style={{ display: "flex", alignItems: "center" }}>🎨 ArtSphere</div>

            <nav className="nav">
                <a href="#" className="nav-link">Главная</a>
                <a href="#" className="nav-link">Художники</a>
                <a href="#" className="nav-link">Картины</a>
                <a href="#" className="nav-link">Стили</a>
                <a href="#" className="nav-link">О проекте</a>
            </nav>
            <ThemeToggle />
        </header>
    );
}

export default Header;
