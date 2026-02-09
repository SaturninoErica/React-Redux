import { useState } from "react";
import useFetchWithDelay from "../hooks/useFetchWithDelay";
import "./ArtistsSection.css";

function ArtistsSection() {
    const { data, loading } = useFetchWithDelay("/data/artData.json", 1200);
    const [selectedArtist, setSelectedArtist] = useState(null);

    if (loading) return <p>Загрузка художников...</p>;
    if (!data) return <p>Ошибка загрузки</p>;

    return (
        <section className="section">
            <h2>Известные художники</h2>

            <div className="artists-container">
                <div className="artists-list">
                    {data.artists.map((artist) => (
                        <div
                            key={artist.id}
                            className="artist-item"
                            onClick={() => setSelectedArtist(artist)}
                        >
                            {artist.name}
                        </div>
                    ))}
                </div>

                <div className="artist-detail">
                    {selectedArtist ? (
                        <>
                            <h3>{selectedArtist.name}</h3>
                            <p><strong>Страна:</strong> {selectedArtist.country}</p>
                            <p><strong>Годы жизни:</strong> {selectedArtist.years}</p>
                            <p>{selectedArtist.description}</p>
                            <img src={selectedArtist.image} alt={selectedArtist.name} />
                        </>
                    ) : (
                        <p>Выберите художника из списка</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ArtistsSection;
