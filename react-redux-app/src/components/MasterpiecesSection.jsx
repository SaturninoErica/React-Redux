import useFetchWithDelay from "../hooks/useFetchWithDelay";

function MasterpiecesSection() {
    const { data, loading } = useFetchWithDelay("/data/artData.json", 1800);

    if (loading) return <p>Загрузка шедевров...</p>;
    if (!data) return null;

    return (
        <section style={{ marginBottom: "40px" }}>
            <h2>Знаменитые произведения</h2>
            {data.masterpieces.map((item) => (
                <p key={item.id}>
                    🎨 <strong>{item.title}</strong> — {item.author}
                </p>
            ))}
        </section>
    );
}

export default MasterpiecesSection;
