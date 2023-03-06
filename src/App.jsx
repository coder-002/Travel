import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import About from "./About/About";
import Service from "./Service/Service";
import Contact from "./Contact/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/service" exact element={<Service />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
