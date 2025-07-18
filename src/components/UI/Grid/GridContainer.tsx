import { type FC, type ReactNode } from "react";
import style from "./gridContainer.module.css";

interface PropsType {
  children: ReactNode;
  gap: string;
  columns: number;
}

const GridContainer: FC<PropsType> = ({ children, gap, columns }) => {
  return (
    <div className={style.container}>
      <div style={{ gap: gap, gridTemplateColumns: `repeat(${columns}, "1fr") ` }} className={style.gridContainer}>
        {children}
      </div>
    </div>
  );
};
export default GridContainer;
