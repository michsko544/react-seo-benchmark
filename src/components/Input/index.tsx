import React from "react";

import "./styles.css";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default function Input({
  value = "",
  onChange = () => null,
  type = "text",
  className,
  ...restProps
}: Props): JSX.Element {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={`input ${className ? className : ""}`}
      {...restProps}
    />
  );
}
