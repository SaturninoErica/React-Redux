import useFetchWithDelay from "../hooks/useFetchWithDelay";

function StylesSection() {
    const { data, loading } = useFetchWithDelay("/data/artData.json", 1500);

    if (loading) return <p>Загрузка стилей...</p>;
    if (!data) return null;

    return (
        <section style={{ marginBottom: "40px" }}>
            <h2>Художественные стили</h2>
            <div className="card">
                <ul>
                    {data.styles.map((style) => (
                        <li key={style.id}>
                            <strong>{style.name}:</strong> {style.info}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default StylesSection;
