import React from "react";

export default function Input({
  type = "text",
  name,
  value,
  onChange,
  disabled,
  className = "",
  ...props
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`w-full p-2 border border-gray-300 rounded ${className}`}
      {...props}
    />
  );
}
