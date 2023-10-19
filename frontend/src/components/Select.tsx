import { HtmlHTMLAttributes } from "react";

export type SelectProps = {
  selectValues?: {
    id: number;
    nome: string;
  }[];
  initialSelectValue?: string;
  label?: string;
  labelFor?: string;
} & HtmlHTMLAttributes<HTMLSelectElement>;

export default function Select({
  selectValues,
  initialSelectValue,
  label,
  labelFor,
  ...props
}: SelectProps) {
  return (
    <div className="flex flex-col justify-start">
      {!!label && <label htmlFor={labelFor}>{label}</label>}
      <select name="tecnologias" id="tecnologias" {...props}>
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
