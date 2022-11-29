import { Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { Download } from "./Download";
import { Help } from "./Help";
import { Home } from "./Home";
import { Login } from "./Login";
import { Premium } from "./Premium";
import { Signup } from "./Signup";

export function SwitchPages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/premium" element={<Premium />} />
      <Route path="/suporte" element={<Help />} />
      <Route path="/baixar" element={<Download />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
