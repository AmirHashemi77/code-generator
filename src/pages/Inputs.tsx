import type { FC } from "react";
import Input from "../components/UI/Input/Input";

const Inputs: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <Input
        inputType="checkBox"
        checkBoxData={{
          dir: "column",
          data: [
            { id: "1", name: "men", value: "1", label: "Man" },
            { id: "2", name: "women", value: "2", label: "Woman" },
          ],
        }}
        label="Name"
        labelType="labelTop"
        name="gender"
      />
      <Input inputType="text" label="Name" labelType="labelTop" name="name" />
      <Input inputType="text" label="Family" labelType="labelTop" name="family" />
      <Input inputType="file" label="Image" labelType="labelTop" name="imgFile" />
      <Input inputType="number" label="Phone" labelType="labelTop" name="phone" />
      <Input inputType="password" label="Password" labelType="labelTop" name="password" />
    </div>
  );
};
export default Inputs;
