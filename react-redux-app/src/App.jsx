import Header from "./components/Header";
import ArtistsSection from "./components/ArtistsSection";
import StylesSection from "./components/StylesSection";
import MasterpiecesSection from "./components/MasterpiecesSection";

import Register from "./components/Register";
import Login from "./components/Login";

import ItemDetail from "./components/ItemDetail";

function App() {
  return (
    <div>
      <Header />

      <main style={{ padding: "40px" }}>
        <h1>Добро пожаловать в ArtSphere</h1>
        <p>Откройте для себя мир искусства, художников и великих произведений.</p>

        <Register />
        <Login />
        <ArtistsSection />
        <ItemDetail />
        <StylesSection />
        <MasterpiecesSection />

      </main>
    </div>
  );
}

export default App;
