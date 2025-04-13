import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

function ImageModal({ isOpen, onClose, image }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={styles.image}
      />
      <p className={styles.caption}>{image.description || "No description"}</p>
      <p className={styles.author}>Author: {image.user?.name || "Unknown"}</p>
    </Modal>
  );
}

export default ImageModal;
