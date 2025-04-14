import Modal from "react-modal";
import { useEffect } from "react";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.backdrop}
      contentLabel="Image Modal"
    >
      {image && <img src={image.urls.regular} alt={image.alt_description} />}
      <button className={s.close} onClick={onClose}>
        Close
      </button>
    </Modal>
  );
};

export default ImageModal;
