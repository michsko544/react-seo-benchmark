import heroImage from "@/assets/hero.png";
import "./styles.css";
import Button from "../Button";
import Dots from "../Dots";
import Input from "../Input";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

type Props = {
  title?: string;
  description?: string;
};

export default function Hero({
  title = "",
  description = "",
}: Props): JSX.Element {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterChange: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setSearchValue(target.value);
  };

  const handleNewsletterSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (searchValue === "") {
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      alert(`Wyszukałeś: '${searchValue}'.`);
      setSearchValue("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="hero">
      <img src={heroImage} alt="Zdjęcie główne" className="hero__image" />
      <div className="hero__content">
        <div className="hero__inner">
          <div className="content-wrapper">
            <div className="hero__wrapper">
              <h1 className="hero__title">{title}</h1>
              <Dots />
              <p className="hero__text">{description}</p>
              <form onSubmit={handleNewsletterSubmit} className="hero__form">
                <Input
                  value={searchValue}
                  onChange={handleNewsletterChange}
                  placeholder="Szukana fraza"
                />
                <Button type="submit" disabled={isLoading}>
                  <span>Szukaj</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
