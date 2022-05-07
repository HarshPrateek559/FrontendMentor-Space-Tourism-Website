import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Destination from "./Pages/Destination";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<Home />} exact path="/" />
        <Route element={<Destination />} exact path="/destination" />
        <Route element={<Crew />} exact path="/crew" />
        <Route element={<Technology />} exact path="/technology" />
      </Routes>
    </div>
  );
}

export default App;
