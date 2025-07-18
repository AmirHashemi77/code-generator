import type { FC } from "react";
import type { ActionListType } from "./header.type";
import style from "./header.module.css";
import { useNavigate } from "react-router-dom";
interface IProps {
  title: string;
  actions?: ActionListType;
}

const Header: FC<IProps> = ({ title, actions }) => {
  const navigate = useNavigate();
  const actionsEventObj = {
    navigateTo: (url: string) => {
      navigate(url);
    },
  };
  return (
    <header className={style.headerContainer}>
      <h1 className={style.title}>{title}</h1>

      <div className={style.actionContainer}>
        {actions?.map((item) => {
          return (
            <button onClick={() => actionsEventObj[item.events?.onClick?.action as keyof typeof actionsEventObj](item.events?.onClick?.path || "#")} className={style.headerBtn}>
              <span>{item.properties?.label}</span>
              <span>{item.properties?.icon === "plus" && "+"}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
export default Header;
