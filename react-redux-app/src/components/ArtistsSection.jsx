import { useState, useEffect } from "react";
import useFetchWithDelay from "../hooks/useFetchWithDelay";
import "./ArtistsSection.css";

function ArtistsSection() {
    const { data, loading } = useFetchWithDelay("/data/artData.json", 1200);

    const [artists, setArtists] = useState([]);
    const [selectedArtist, setSelectedArtist] = useState(null);

    const [form, setForm] = useState({
        name: "",
        country: "",
        years: "",
        description: "",
        image: ""
    });

    /* ===== READ ===== */
    useEffect(() => {
        if (data) {
            setArtists(data.artists);
        }
    }, [data]);

    if (loading) return <p>Загрузка художников...</p>;

    /* ===== CREATE ===== */
    const addArtist = () => {
        const newArtist = {
            id: Date.now(),
            ...form
        };

        setArtists([...artists, newArtist]);

        setForm({
            name: "",
            country: "",
            years: "",
            description: "",
            image: ""
        });
    };

    /* ===== DELETE ===== */
    const deleteArtist = (id) => {
        setArtists(artists.filter(a => a.id !== id));
        setSelectedArtist(null);
    };

    /* ===== UPDATE ===== */
    const updateArtist = () => {
        setArtists(
            artists.map(a =>
                a.id === selectedArtist.id ? { ...selectedArtist } : a
            )
        );
    };

    return (
        <section className="section">
            <h2>Художники</h2>

            {/* ===== CREATE ===== */}
            <div className="card form">
                <h3>Добавить художника</h3>

                <input
                    placeholder="Имя"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                />

                <input
                    placeholder="Страна"
                    value={form.country}
                    onChange={e => setForm({ ...form, country: e.target.value })}
                />

                <input
                    placeholder="Годы"
                    value={form.years}
                    onChange={e => setForm({ ...form, years: e.target.value })}
                />

                <input
                    placeholder="URL изображения"
                    value={form.image}
                    onChange={e => setForm({ ...form, image: e.target.value })}
                />

                <textarea
                    placeholder="Описание"
                    value={form.description}
                    onChange={e => setForm({ ...form, description: e.target.value })}
                />

                <button onClick={addArtist}>Добавить</button>
            </div>

            <div className="artists-container">

                {/* ===== LIST ===== */}
                <div className="artists-list">
                    {artists.map(artist => (
                        <div
                            key={artist.id}
                            className="artist-item"
                            onClick={() => setSelectedArtist({ ...artist })}
                        >
                            {artist.name}

                            <button
                                className="delete-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    deleteArtist(artist.id);
                                }}
                            >
                                ✖
                            </button>
                        </div>
                    ))}
                </div>

                {/* ===== DETAIL ===== */}
                <div className="artist-detail">
                    {selectedArtist ? (
                        <div className="artist-view-card">

                            <div className="artist-image-wrapper">
                                <img
                                    className="artist-image"
                                    src={selectedArtist.image}
                                    alt={selectedArtist.name}
                                />
                            </div>

                            <div className="artist-info">
                                <h3 className="artist-name">
                                    {selectedArtist.name}
                                </h3>

                                <div className="artist-meta">
                                    {selectedArtist.country} • {selectedArtist.years}
                                </div>

                                <p className="artist-description">
                                    {selectedArtist.description}
                                </p>

                                {/* ===== UPDATE ===== */}
                                <div className="edit-panel">
                                    <h4>Редактирование</h4>

                                    <input
                                        value={selectedArtist.name}
                                        onChange={e =>
                                            setSelectedArtist({
                                                ...selectedArtist,
                                                name: e.target.value
                                            })
                                        }
                                    />

                                    <input
                                        value={selectedArtist.country}
                                        onChange={e =>
                                            setSelectedArtist({
                                                ...selectedArtist,
                                                country: e.target.value
                                            })
                                        }
                                    />

                                    <textarea
                                        value={selectedArtist.description}
                                        onChange={e =>
                                            setSelectedArtist({
                                                ...selectedArtist,
                                                description: e.target.value
                                            })
                                        }
                                    />

                                    <button onClick={updateArtist}>
                                        Сохранить изменения
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>Выберите художника слева</p>
                    )}
                </div>

            </div>
        </section>
    );
}

export default ArtistsSection;