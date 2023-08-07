import "./style.css";

type Props = {
  direction?: "left" | "right";
};

export default function Dots({ direction = "right" }: Props): JSX.Element {
  return (
    <div className={`dots ${direction === "right" ? "" : "dots--right"}`}>
      <div className="dot__long"></div>
      <div className="dot__tight"></div>
    </div>
  );
}
