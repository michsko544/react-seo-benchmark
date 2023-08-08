import Tile from "../Tile";
import "./styles.css";

export default function Tiles(): JSX.Element {
  return (
    <section className="tiles">
      <div className="content-wrapper">
        <div className="tiles__inner">
          <h2 className="tiles__title">Podsekcja</h2>
          <div className="tiles__wrapper">
            <Tile title="Przykładowy tekst" icon="add-user" />
            <Tile title="Przykładowy tekst" icon="money" secondary />
            <Tile title="Przykładowy tekst" icon="happy" />
          </div>
        </div>
      </div>
    </section>
  );
}
