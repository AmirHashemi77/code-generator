import type { FC } from "react";
import { db } from "../../db/db";
import Header from "../components/UI/Header/Header";
import type { ActionListType } from "../components/UI/Header/header.type";

const ProductEditPage: FC = () => {
  const pageData = db.spec.pages.find((item) => item.name === "ProductEditPage");
  const headerData = pageData?.header;
  return <>{headerData && <Header title={headerData?.properties.title || ""} actions={headerData?.properties.actions as ActionListType} />}</>;
};
export default ProductEditPage;
