import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Inputs from "./pages/Inputs";
import Buttons from "./pages/Buttons";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inputs" element={<Inputs />} />
        <Route path="/buttons" element={<Buttons />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
