import type { FC } from "react";
import Header from "../components/UI/Header/Header";
import { db } from "../../db/db";
import GridContainer from "../components/UI/Grid/GridContainer";
import type { ActionListType } from "../components/UI/Header/header.type";
import DataTable from "../components/UI/DataTable/DataTable";

const ProductListPage: FC = () => {
  const pageData = db.spec.pages.find((item) => item.name === "ProductListPage");
  const headerData = pageData?.header;
  const gridData = pageData?.content.find((item) => item.component === "Grid");
  const dataTableArr = gridData?.properties.items.find((item) => item.component === "DataTable")?.properties;

  return (
    <>
      {headerData && <Header title={headerData?.properties.title || ""} actions={headerData?.properties.actions as ActionListType} />}
      {gridData && (
        <GridContainer gap={gridData.properties.gap} columns={gridData.properties.columns}>
          {dataTableArr && <DataTable dataTable={dataTableArr} />}
        </GridContainer>
      )}
    </>
  );
};
export default ProductListPage;
