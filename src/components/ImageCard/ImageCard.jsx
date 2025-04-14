import s from "./ImageCard.module.css";

function ImageCard({ image, onImageClick }) {
  return (
    <div className={s.card} onClick={() => onImageClick(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={s.image}
      />
    </div>
  );
}

export default ImageCard;
