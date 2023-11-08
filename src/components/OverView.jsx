import Icons from "../assets/sprite.svg";

export default function Overview() {
  const starIcon = `${Icons}#icon-star`;
  const locationPinIcon = `${Icons}#icon-location-pin`;
  return (
    <div className="overview">
      <h1 className="overview__heading">Hotel Las Palmas</h1>
      <div className="overview__stars">
        <svg className="overview__icon-star">
          <use xlinkHref={starIcon}></use>
        </svg>
        <svg className="overview__icon-star">
          <use xlinkHref={starIcon}></use>
        </svg>
        <svg className="overview__icon-star">
          <use xlinkHref={starIcon}></use>
        </svg>
        <svg className="overview__icon-star">
          <use xlinkHref={starIcon}></use>
        </svg>
        <svg className="overview__icon-star">
          <use xlinkHref={starIcon}></use>
        </svg>
      </div>

      <div className="overview__location">
        <svg className="overview__icon-location">
          <use xlinkHref={locationPinIcon}></use>
        </svg>
        <button className="btn-inline">Albufiera, Portugal</button>
      </div>

      <div className="overview__rating">
        <div className="overview__rating-average">8.6</div>
        <div className="overview__rating-count">460 Votes</div>
      </div>
    </div>
  );
}
