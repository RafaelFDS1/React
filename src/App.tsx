import { useState } from "react";
import { Header } from "./components/Header";
import "./index.css";
import { SwitchPages } from "./pages/SwitchPages";

function App() {
  return (
    <div className="app">
      <Header />
      <SwitchPages />
    </div>
  );
}

export default App;
