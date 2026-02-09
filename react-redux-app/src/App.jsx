import Header from "./components/Header";
import ArtistsSection from "./components/ArtistsSection";
import StylesSection from "./components/StylesSection";
import MasterpiecesSection from "./components/MasterpiecesSection";

function App() {
  return (
    <div>
      <Header />

      <main style={{ padding: "40px" }}>
        <h1>Добро пожаловать в ArtSphere</h1>
        <p>Откройте для себя мир искусства, художников и великих произведений.</p>

        <ArtistsSection />     {/* LIST / DETAIL */}
        <StylesSection />      {/* Контент 2 */}
        <MasterpiecesSection />{/* Контент 3 */}
      </main>
    </div>
  );
}

export default App;
