import UserReview from "./UserReview";

export default function Review() {
  const path = "../../src/assets";
  const user__Reviews = [
    {
      userName: "Nick Smith",
      date: "Feb 23rd, 2023",
      ratings: "7.8",
      reviewText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugadoloremque architecto dicta animi, totam, itaque officia ex.",
      img: `${path}/user-1.jpg`,
    },

    {
      userName: "Mary Thomas",
      date: "sept 13th, 2023",
      ratings: "9.3",
      reviewText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.",
      img: `${path}/user-2.jpg`,
    },
  ];

  return (
    <div className="user-reviews">
      <UserReview review={user__Reviews[0]} />
      <UserReview review={user__Reviews[1]} />

      <button className="btn-inline"> Show all <span>&rarr;</span></button>
    </div>
  );
}
