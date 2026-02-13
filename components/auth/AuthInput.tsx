import React from "react";

interface Props {
  label: string;
  type: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthInput = ({
  label,
  type,
  required,
  value,
  onChange,
}: Props) => {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full border rounded-md px-3 py-2"
      />
    </div>
  );
};

export default AuthInput;
