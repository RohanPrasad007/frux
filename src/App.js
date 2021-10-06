import "./css/App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
