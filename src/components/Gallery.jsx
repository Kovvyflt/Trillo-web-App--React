export default function Galllery (props) {
    return(
        <figure className="gallery__item">
          <img src={props.hotel} alt="Photo of hotel 1" className="gallery__photo" />
        </figure>
    )
}