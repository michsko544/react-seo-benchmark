import heroImage from "@/assets/hero.png";
import "./styles.css";
import Button from "../Button";
import Dots from "../Dots";

type Props = {
  title?: string;
  description?: string;
};

export default function Hero({
  title = "",
  description = "",
}: Props): JSX.Element {
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
              <Button
                onClick={() =>
                  (window.location.href =
                    "https://github.com/michsko544/react-seo-benchmark")
                }
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 2.66666C8.63336 2.66666 2.66669 8.63333 2.66669 16C2.66518 18.799 3.54511 21.5275 5.18164 23.7982C6.81818 26.069 9.12822 27.7668 11.784 28.6507C12.4507 28.7667 12.7 28.3667 12.7 28.016C12.7 27.7 12.6827 26.6507 12.6827 25.5333C9.33336 26.1507 8.46669 24.7173 8.20002 23.9667C8.04936 23.5827 7.40002 22.4 6.83336 22.0827C6.36669 21.8333 5.70002 21.216 6.81602 21.2C7.86669 21.1827 8.61602 22.1667 8.86669 22.5667C10.0667 24.5827 11.984 24.016 12.7494 23.6667C12.8667 22.8 13.216 22.2173 13.6 21.884C10.6334 21.5507 7.53336 20.4 7.53336 15.3C7.53336 13.8493 8.04936 12.6507 8.90002 11.716C8.76669 11.3827 8.30002 10.016 9.03336 8.18266C9.03336 8.18266 10.1494 7.83333 12.7 9.55066C13.7854 9.24941 14.9069 9.09779 16.0334 9.1C17.1667 9.1 18.3 9.24933 19.3667 9.54933C21.916 7.816 23.0334 8.184 23.0334 8.184C23.7667 10.0173 23.3 11.384 23.1667 11.7173C24.016 12.6507 24.5334 13.8333 24.5334 15.3C24.5334 20.4173 21.4174 21.5507 18.4507 21.884C18.9334 22.3 19.3507 23.1 19.3507 24.3507C19.3507 26.1333 19.3334 27.5667 19.3334 28.0173C19.3334 28.3667 19.584 28.7827 20.2507 28.6493C22.8974 27.7557 25.1972 26.0547 26.8266 23.7855C28.4559 21.5164 29.3326 18.7935 29.3334 16C29.3334 8.63333 23.3667 2.66666 16 2.66666Z"
                    fill="black"
                  />
                </svg>
                <span>GITHUB</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
