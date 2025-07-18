import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { db } from "../db/db";
import ProductEditPage from "./pages/ProductEditPage";
import ProductListPage from "./pages/ProductListPage";

const App: FC = () => {
  const pages = db.spec.pages;
  const components = { ProductEditPage, ProductListPage };
  return (
    <BrowserRouter>
      <Routes>
        {pages.map((item) => {
          const Component = components[item.name as keyof typeof components];
          return <Route path={item.path} element={Component ? <Component /> : <div>Component not found</div>} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
