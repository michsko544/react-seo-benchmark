import { ChangeEventHandler, FormEventHandler, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import "./styles.css";
import ctaImage from "@/assets/cta-neon.png";

type Props = {
  title?: string;
};

export default function Cta({ title = "" }: Props): JSX.Element {
  const [newsletterValue, setNewsletterValue] = useState("");

  const handleNewsletterChange: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setNewsletterValue(target.value);
  };

  const handleNewsletterSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    alert(
      `Pomyślnie dołączyłeś do newslettera. Twój email to: ${newsletterValue}`
    );
    setNewsletterValue("");
  };

  return (
    <section className="cta">
      <img src={ctaImage} alt="Neonowy kaktus" className="cta__image" />
      <div className="cta__content">
        <div className="cta__inner">
          <div className="content-wrapper">
            <div className="cta__wrapper">
              <h1 className="cta__title">{title}</h1>
              <form onSubmit={handleNewsletterSubmit} className="cta__action">
                <Input
                  type="email"
                  value={newsletterValue}
                  onChange={handleNewsletterChange}
                  placeholder="przykladowy@email.pl"
                />
                <Button type="submit">
                  <span>Subskrybuj</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
