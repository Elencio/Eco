import { Route, Routes } from "react-router-dom";
import Sobre from "./components/Sobre";
// import Gap from "./components/Experimental";
import Home from "./components/Home/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>
  );
}
