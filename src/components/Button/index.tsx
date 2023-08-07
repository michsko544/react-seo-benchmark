import "./styles.css";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({
  className = "",
  ...props
}: Props): JSX.Element {
  return <button className={`button ${className}`} {...props}></button>;
}
