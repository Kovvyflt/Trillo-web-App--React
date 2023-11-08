import Icons from "../assets/sprite.svg";

import "../index.css";

export default function SideBar() {
  const homeIcon = `${Icons}#icon-home`;
  const airPlaneIcon = `${Icons}#icon-aircraft-take-off`;
  const carIcon = `${Icons}#icon-key`;
  const tourIcon = `${Icons}#icon-map`;

  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item side-nav__item--active">
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref={homeIcon}></use>
            </svg>
            <span>Hotel</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref={airPlaneIcon}></use>
            </svg>
            <span>Flight</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref={carIcon}></use>
            </svg>
            <span>Car rental</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref={tourIcon}></use>
            </svg>
            <span>Tours</span>
          </a>
        </li>
      </ul>

      <div className="legal">
        &copy; 2023 by kovvy. All rights reserved
      </div>
    </nav>
  );
}
