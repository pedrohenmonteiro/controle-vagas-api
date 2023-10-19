import { InputHTMLAttributes, useState } from "react";

type TextFieldProps = {
  onInputChange?: (value: string) => void;
  label?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function TextField({
  icon,
  label,
  name,
  initialValue = "",
  error,
  onInputChange,
  ...props
}: TextFieldProps) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInputChange && onInputChange(newValue);
  };

  return (
    <div className="w-full">
      {!!label && <label className="pointer text-sm">{label}</label>}
      <div className="flex items-center bg-gray-100 rounded-md px-1 py-2 border-[1px] border-gray-300 focus:border-2 focus-within:bg-gray-50 ">
        <input
          className="px-2 py-1 bg-transparent w-full outline-none "
          type="text"
          onChange={onChange}
          value={value}
          name={name}
          {...props}
        />
      </div>
    </div>
  );
}
