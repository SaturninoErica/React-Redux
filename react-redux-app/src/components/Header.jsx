import "./Header.css";
import ThemeToggle from "./ThemeToggle";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";

function Header() {
    const dispatch = useDispatch();
    const { isAuth, user } = useSelector((state) => state.auth);

    return (
        <header className="navbar">
            <div style={{ display: "flex", alignItems: "center" }}>
                🎨 ArtSphere
            </div>

            <nav className="nav">
                <a href="#" className="nav-link">Главная</a>
                <a href="#" className="nav-link">Художники</a>
                <a href="#" className="nav-link">Картины</a>
                <a href="#" className="nav-link">Стили</a>
                <a href="#" className="nav-link">О проекте</a>
            </nav>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <ThemeToggle />

                {isAuth ? (
                    <>
                        <span style={{ fontSize: "14px" }}>
                            {user?.email}
                        </span>

                        <button onClick={() => dispatch(logout())}>
                            Выйти
                        </button>
                    </>
                ) : (
                    <>
                        <a href="#" className="nav-link">Вход</a>
                        <a href="#" className="nav-link">Регистрация</a>
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;