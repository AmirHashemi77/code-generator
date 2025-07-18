import type { FC } from "react";
import style from "./dataTable.module.css";
import type { DataTableProperties, RowAction } from "./dataTable.type";
import { useNavigate } from "react-router-dom";

interface PropsType {
  dataTable: DataTableProperties;
}
const tableData = [
  { name: "Product A", quantity: 5, category: "Mobile" },
  { name: "Product B", quantity: 2, category: "PC" },
  { name: "Product C", quantity: 0, category: "Laptop" },
  { name: "Product D", quantity: 0, category: "Tablet" },
  { name: "Product E", quantity: 3, category: "Test" },
  { name: "Grand Total", quantity: 10, category: 15 },
];

const DataTable: FC<PropsType> = ({ dataTable }) => {
  const navigate = useNavigate();

  const actionHandler = (action: RowAction) => {
    if (action.action === "navigateTo" && action.path) {
      navigate(action.path);
    }
    if (action.action === "callApi" && action.endpoint) {
      console.log(action.endpoint);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          {dataTable.columns.map((item) => (
            <th>{item.field}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.category}</td>
              <td className={style.actionCell}>
                {dataTable.rowActions?.map((action) => (
                  <button onClick={() => actionHandler(action)} className={style.actionBtn}>
                    {action.icon}
                  </button>
                ))}
              </td>
            </tr>
          );
        })}
      </tbody>
      <caption>Products purchased last month</caption>
    </table>
  );
};
export default DataTable;
