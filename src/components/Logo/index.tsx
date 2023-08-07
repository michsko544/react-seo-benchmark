import "./styles.css";

export default function Logo(): JSX.Element {
  return (
    <a href="/" className="logo__container">
      <div className="logo__circle"></div>
      <div className="logo__text">LOGO</div>
    </a>
  );
}
