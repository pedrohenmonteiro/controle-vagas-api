import { SelectHTMLAttributes, useState } from "react";

export type SelectProps = {
  selectValues?: {
    id: number | "EM_ANALISE" | "APROVADO" | "REPROVADO";
    nome: string;
  }[];
  label?: string;
  labelFor?: string;
  initialValue?: string;
  onSelectChange?: (v: string) => void;
} & SelectHTMLAttributes<HTMLSelectElement>;

export default function Select({
  selectValues,
  label,
  labelFor,
  initialValue = "",
  onSelectChange,
  ...props
}: SelectProps) {
  const [select, setSelect] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e?.currentTarget.value;
    setSelect(newValue);

    !!onSelectChange && onSelectChange(newValue);
  };

  return (
    <div className="flex flex-col justify-start">
      {!!label && <label htmlFor={labelFor}>{label}</label>}
      <select value={select} onChange={onChange} {...props}>
        {selectValues?.map((selectValue) => {
          return (
            <option key={selectValue.id} value={selectValue.id}>
              {selectValue.nome}
            </option>
          );
        })}
      </select>
    </div>
  );
}
