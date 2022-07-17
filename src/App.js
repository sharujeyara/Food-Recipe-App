import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Recipes from "./Pages/Recipes";
import Settings from "./Pages/Settings";


function App() {
  return (
    <Router>
      <Navbar />
        <div className="container main">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Recipes" element={<Recipes/>}/>
            <Route path="/Settings" element={<Settings/>}/>
          </Routes>
        </div>
        <Footer/>
    </Router>
  );
}

export default App;
