import Logo from "../assets/logo.png";
import Icons from "../assets/sprite.svg";
import userPhoto from "../assets/user.jpg";

import "../index.css";

export default function Header() {
  const searchIcon = `${Icons}#icon-magnifying-glass`;
  const bookMarkIcon = `${Icons}#icon-bookmark`;
  const chatIcon = `${Icons}#icon-chat`;

  return (
    <header className="header">
      <img src={Logo} alt="trillo logo" className="logo" />
      <form className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search hotels"
        />
        <button className="search__button">
          <svg className="search__icon">
            {" "}
            <use xlinkHref={searchIcon}></use>{" "}
          </svg>
        </button>
      </form>

      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <use xlinkHref={bookMarkIcon}></use>
          </svg>
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <use xlinkHref={chatIcon}></use>
          </svg>
          <span className="user-nav__notification">30</span>
        </div>

        <div className="user-nav__user">
          <img
            src={userPhoto}
            alt="User Photo"
            className="user-nav__user-photo"
          />
          <span className="user-nav__user-name">Jonas</span>
        </div>
      </nav>
    </header>
  );
}
