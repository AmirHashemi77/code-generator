import { useState, type FC, type ReactNode } from "react";
import { FaFileMedical } from "react-icons/fa";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

interface PropsType {
  name?: string;
  inputType?: "number" | "text" | "checkBox" | "password" | "file";
  classNeme?: string;
  withButton?: boolean;
  icon?: ReactNode;
  labelType?: "placeHolder" | "labelTop" | "labelLeft";
  label?: string;
  checkBoxData?: { dir: "row" | "column"; data: { id: string; name: string; value: string; label: string }[] };
}

const baseStyle = "px-3 py-2 rounded-lg outline-none border-2 border-gray-400 focus:border-blue-600 focus:shadow-sm focus:shadow-blue-400 transition-all text-gray-900 font-semibold";

const Input: FC<PropsType> = ({ classNeme = "", labelType, inputType, label, name, withButton, checkBoxData }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [fileName, setFileName] = useState<string>("");
  if (inputType === "text" || inputType === "number") {
    if (!withButton) {
      return (
        <div className={`flex  ${labelType === "labelTop" ? "flex-col items-start " : ""} ${labelType === "labelLeft" ? "flex-row items-cetnter " : ""} `}>
          {(labelType === "labelTop" || labelType === "labelLeft") && <p className="font-bold p-2 text-gray-800 ">{label} :</p>}
          <input name={name} placeholder={labelType === "placeHolder" ? label : ""} className={`${baseStyle}  ${classNeme}`} type={inputType} />
        </div>
      );
    }
    if (withButton) {
      return (
        <div className={`flex  ${labelType === "labelTop" ? "flex-col items-start" : ""} ${labelType === "labelLeft" ? "flex-row items-cetnter " : ""}`}>
          {(labelType === "labelTop" || labelType === "labelLeft") && <p className="font-bold p-2 text-gray-800 ">{label} :</p>}
          <div className="flex relative w-56">
            <input name={name} placeholder={labelType === "placeHolder" ? label : ""} className={` ${baseStyle}  ${classNeme} absolute top-0 right-0 w-full`} type={inputType} />
            <button className="flex items-center justify-center bg-blue-600 px-3 py-2 border-2 border-blue-600 rounded-r-lg absolute top-0 right-0 text-white font-semibold hover:bg-blue-800 hover:border-blue-800 transition-all">
              sub
            </button>
          </div>
        </div>
      );
    }
  }
  if (inputType === "password") {
    return (
      <div className={`flex  ${labelType === "labelTop" ? "flex-col items-start" : ""} ${labelType === "labelLeft" ? "flex-row items-cetnter " : ""}`}>
        {(labelType === "labelTop" || labelType === "labelLeft") && <p className="font-bold p-2 text-gray-800 ">{label} :</p>}
        <div className="flex relative w-56">
          <input
            name={name}
            placeholder={labelType === "placeHolder" ? label : ""}
            className={` ${baseStyle}  ${classNeme} absolute top-0 right-0 w-full`}
            type={isShowPassword ? "text" : inputType}
          />
          <button
            onClick={() => setIsShowPassword((prev) => !prev)}
            className="flex items-center justify-center bg-transparent px-3 py-2 border-2 border-transparent rounded-r-lg absolute top-0 right-0 text-white font-semibold  transition-all"
          >
            {isShowPassword ? <IoIosEyeOff className="text-blue-600 text-2xl" /> : <IoIosEye className="text-blue-600 text-2xl" />}
          </button>
        </div>
      </div>
    );
  }
  if (inputType === "file") {
    return (
      <div className={`flex  ${labelType === "labelTop" ? "flex-col items-start" : ""} ${labelType === "labelLeft" ? "flex-row items-cetnter " : ""}`}>
        {(labelType === "labelTop" || labelType === "labelLeft") && <p className="font-bold p-2 text-gray-800 ">{label} :</p>}

        <input
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setFileName(file.name);
          }}
          name={name}
          id={name}
          placeholder={labelType === "placeHolder" ? label : ""}
          className={`${baseStyle}  ${classNeme} absolute top-0 right-0 w-full hidden`}
          type={inputType}
        />
        <label htmlFor={name} className={`${baseStyle}  ${classNeme} w-56 flex justify-between items-center cursor-pointer`}>
          {fileName && <span className="text-sm text-gray-700 w-3/4 overflow-hidden">{fileName}</span>}
          <FaFileMedical className="text-blue-600 text-2xl" />
        </label>
      </div>
    );
  }
  if (inputType === "checkBox") {
    return (
      <div className={`flex gap-5 ${checkBoxData?.dir === "row" ? "flex-row items-center" : "flex-col items-start"}`}>
        {checkBoxData?.data.map((item) => {
          return (
            <div className="flex items-center">
              <input type={inputType} id={item.id} name={item.name} value={item.value} className="w-4 h-4 accent-blue-600 rounded-sm focus:ring-blue-500 " />
              <label htmlFor={item.name} className="ms-2 text-sm font-medium text-gray-900 ">
                {item.label}
              </label>
            </div>
          );
        })}
      </div>
    );
  }
};
export default Input;
