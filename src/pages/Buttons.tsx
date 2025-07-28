import type { FC } from "react";
import { FaTrash, FaCheck, FaDownload, FaPlus } from "react-icons/fa";
import Button from "../components/UI/Button/Button";

const Buttons: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-10 w-full min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-800">Button Variants</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="danger">Danger</Button>
        <Button disabled>Disabled</Button>
        <Button isLoading>Loading...</Button>
      </div>

      <h2 className="text-xl font-semibold mt-10 text-gray-800">With Icons</h2>
      <div className="flex flex-wrap gap-4">
        <Button iconLeft={<FaDownload />}>Download</Button>
        <Button iconRight={<FaCheck />}>Submit</Button>
        <Button iconLeft={<FaTrash />} variant="danger">
          Delete
        </Button>
      </div>

      <h2 className="text-xl font-semibold mt-10 text-gray-800">Different sizes</h2>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
{/* 
        <h2 className="text-xl font-semibold mt-10 text-gray-800">Icon Button</h2>
        <Button iconOnly iconLeft={<FaPlus />} variant="primary" title="Add" />
        <Button iconOnly iconLeft={<FaTrash />} variant="danger" title="Delete" size="lg" />
        <Button iconOnly iconLeft={<FaCheck />} variant="outline" title="Confirm" size="sm" /> */}

      <h2 className="text-xl font-semibold mt-10 text-gray-800">Full Width</h2>
      <div className="w-full max-w-md">
        <Button fullWidth iconLeft={<FaCheck />}>
          Confirm and Continue
        </Button>
      </div>
    </div>
  );
};

export default Buttons;