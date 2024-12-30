import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/nav-bar";
import Home from "./pages/home";
import Recipes from "./pages/recipes";
import Details from "./pages/details";
import Favorites from "./pages/favorites";
import Testing from "./components/test";
import bg from "./newbg.jpg";
function App() {
  return (
    <div
      className="min-h-screen  h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/recipes" element={<Recipes />}></Route>
        <Route path="/detail/:id" element={<Details />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
      {/* <Testing /> */}
    </div>
  );
}

export default App;
