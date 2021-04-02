import { BrowserRouter as Router } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ImagesGrid from "./components/ImagesGrid";

function App() {
  return (
    <Router>
      <Header />
      <ImagesGrid />
    </Router>
  );
}

export default App;
