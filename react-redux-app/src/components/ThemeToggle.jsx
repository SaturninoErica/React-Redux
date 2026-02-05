function ThemeToggle() {
    const toggleTheme = () => {
        document.body.classList.toggle("dark");
    };

    return (
        <button onClick={toggleTheme} style={{ marginLeft: "20px", padding: "6px 10px" }}>
            Сменить тему
        </button>
    );
}

export default ThemeToggle;
