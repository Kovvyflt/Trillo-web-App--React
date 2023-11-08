export default function UserReview({ review }) {
  return (
    <figure className="review">
      <blockquote className="review__text">{review.reviewText}</blockquote>

      <figcaption className="review__user">
        <img src={review.img} alt="User1" className="review__photo" />
        <div className="review__user-box">
          <p className="review__user-name">{review.userName}</p>

          <p className="review__user-date">{review.date}</p>
        </div>

        <div className="review__rating">{review.ratings}</div>
      </figcaption>
    </figure>
  );
}
