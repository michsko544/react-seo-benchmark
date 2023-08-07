import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero
          title="Aplikacja eksperymentu"
          description="Aplikacja ma przypominać stronę główną sklepu internetowego posiadającego wysokiej rozdzielczości grafikę, dwa rodzaje czcionek oraz kilka elementów interfejsu z ikonami."
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
