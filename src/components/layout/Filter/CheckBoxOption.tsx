import { Checkbox } from "@/components/ui/checkbox";

interface CheckBoxOptionProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckBoxOption: React.FC<CheckBoxOptionProps> = ({
  id,
  label,
  checked,
  onChange,
}: CheckBoxOptionProps) => {
  return (
    <div className="flex items-center mb-3 px-2 rounded-md hover:bg-gray-200 hover:cursor-pointer ">
      <Checkbox id={id} checked={checked} onCheckedChange={onChange} />
      <label htmlFor={id} className="ml-2 py-4 text-sm font-semibold flex-grow hover:cursor-pointer">
        {label}
      </label>
    </div>
  );
};


export default CheckBoxOption;