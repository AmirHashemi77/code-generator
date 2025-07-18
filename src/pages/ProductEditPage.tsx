import type { FC } from "react";
import { db } from "../../db/db";
import Header from "../components/UI/Header/Header";

const ProductEditPage: FC = () => {
  const pageData = db.spec.pages.find((item) => item.name === "ProductEditPage");
  const headerData = pageData?.header;
  return <>{headerData && <Header title={headerData?.properties.title || ""} actions={headerData?.properties.actions} />}</>;
};
export default ProductEditPage;
