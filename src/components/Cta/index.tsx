import Button from "../Button";
import "./styles.css";
import ctaImage from "@/assets/cta-neon.png";

type Props = {
  title?: string;
};

export default function Cta({ title = "" }: Props): JSX.Element {
  return (
    <section className="cta">
      <img src={ctaImage} alt="Neonowy kaktus" className="cta__image" />
      <div className="cta__content">
        <div className="cta__inner">
          <div className="content-wrapper">
            <div className="cta__wrapper">
              <h1 className="cta__title">{title}</h1>
              <Button>
                <span>AKCJA</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
