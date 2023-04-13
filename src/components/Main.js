import {
  Facebook,
  Instagram,
  LinkedIn,
  Pinterest,
  Twitter,
} from "@material-ui/icons";

import "./styles/Main.scss";
import Ponni from "./assets/ponni.png";

const Main = () => {
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__content">
          <div className="text">
            <p>Hey There !</p>
            <h1>I am Ponni</h1>
            <p>Front End Software Developer !</p>

            <div className="icons">
              <Twitter className="icon" />
              <Instagram className="icon" />
              <Facebook className="icon" />
              <LinkedIn className="icon" />
              <Pinterest className="icon" />
            </div>

            <div className="buttons">
              <button>See Me</button>
              <button>Hire Me</button>
            </div>
          </div>
        </div>

        <div className="main__img">
          <img src={Ponni} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
