import Dots from "../Dots";
import Logo from "../Logo";
import "./styles.css";

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="content-wrapper">
          <div className="footer__content">
            <div className="footer__section">
              <Logo />
            </div>
            <div className="footer__section">
              <ul className="footer__linklist">
                <li className="footer__linklist-item">
                  <a href="#">Przykładowy link 1</a>
                </li>
                <li className="footer__linklist-item">
                  <a href="#">Przykładowy link 2</a>
                </li>
                <li className="footer__linklist-item">
                  <a href="#">Przykładowy link 3</a>
                </li>
                <li className="footer__linklist-item">
                  <a href="#">Przykładowy link 4</a>
                </li>
              </ul>
            </div>
            <div className="footer__section">
              <ul className="footer__linklist">
                <li className="footer__linklist-item">
                  <a href="#">Przykładowy link 1</a>
                </li>
                <li className="footer__linklist-item">
                  <a href="#">Przykładowy link 2</a>
                </li>
                <li className="footer__linklist-item">
                  <a href="#">Przykładowy link 3</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__end">
            <a
              href="https://github.com/michsko544/react-seo-benchmark"
              target="_blank"
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
                  d="M16 2.66663C8.63336 2.66663 2.66669 8.63329 2.66669 16C2.66518 18.799 3.54511 21.5274 5.18164 23.7982C6.81818 26.069 9.12822 27.7667 11.784 28.6506C12.4507 28.7666 12.7 28.3666 12.7 28.016C12.7 27.7 12.6827 26.6506 12.6827 25.5333C9.33336 26.1506 8.46669 24.7173 8.20002 23.9666C8.04936 23.5826 7.40002 22.4 6.83336 22.0826C6.36669 21.8333 5.70002 21.216 6.81602 21.2C7.86669 21.1826 8.61602 22.1666 8.86669 22.5666C10.0667 24.5826 11.984 24.016 12.7494 23.6666C12.8667 22.8 13.216 22.2173 13.6 21.884C10.6334 21.5506 7.53336 20.4 7.53336 15.3C7.53336 13.8493 8.04936 12.6506 8.90002 11.716C8.76669 11.3826 8.30002 10.016 9.03336 8.18263C9.03336 8.18263 10.1494 7.83329 12.7 9.55063C13.7854 9.24937 14.9069 9.09775 16.0334 9.09996C17.1667 9.09996 18.3 9.24929 19.3667 9.54929C21.916 7.81596 23.0334 8.18396 23.0334 8.18396C23.7667 10.0173 23.3 11.384 23.1667 11.7173C24.016 12.6506 24.5334 13.8333 24.5334 15.3C24.5334 20.4173 21.4174 21.5506 18.4507 21.884C18.9334 22.3 19.3507 23.1 19.3507 24.3506C19.3507 26.1333 19.3334 27.5666 19.3334 28.0173C19.3334 28.3666 19.584 28.7826 20.2507 28.6493C22.8974 27.7557 25.1972 26.0546 26.8266 23.7855C28.4559 21.5164 29.3326 18.7934 29.3334 16C29.3334 8.63329 23.3667 2.66663 16 2.66663Z"
                  fill="black"
                />
              </svg>
            </a>

            <div className="footer__copyright">
              <span>Michał Skorus</span>
              <Dots direction="left" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
