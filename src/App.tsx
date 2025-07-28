import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Inputs from "./pages/Inputs";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inputs" element={<Inputs />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
