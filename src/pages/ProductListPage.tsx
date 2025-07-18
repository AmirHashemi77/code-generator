import type { FC } from "react";
import Header from "../components/UI/Header/Header";
import { db } from "../../db/db";
import GridContainer from "../components/UI/Grid/GridContainer";

const ProductListPage: FC = () => {
  const pageData = db.spec.pages.find((item) => item.name === "ProductListPage");
  const headerData = pageData?.header;
  const gridData = pageData?.content.find((item) => item.component === "Grid");

  return (
    <>
      {headerData && <Header title={headerData?.properties.title || ""} actions={headerData?.properties.actions} />}
      {gridData && <GridContainer gap={gridData.component=== "Grid" && gridData.properties.} columns={gridData.properties.columns}></GridContainer>}
    </>
  );
};
export default ProductListPage;
