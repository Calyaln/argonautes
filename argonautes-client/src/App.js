import "./App.css";
import AddArgonautes from "./components/AddArgonautes";
import ArgonautesList from "./components/ArgonautesList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AddArgonautes />
      <ArgonautesList />
      <Footer />
    </div>
  );
}

export default App;
