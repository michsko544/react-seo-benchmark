import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tiles from "./components/Tiles";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero
          title="Aplikacja eksperymentu"
          description="Aplikacja ma przypominać stronę główną sklepu internetowego posiadającego wysokiej rozdzielczości grafikę, dwa rodzaje czcionek oraz kilka elementów interfejsu z ikonami."
        />
        <Tiles />
        <Cta title="Druga sekcja graficzna" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
