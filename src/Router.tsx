import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Sobre from "./components/Sobre";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>
  );
}
