import styles from "./ui.module.scss";
type Prop = {
  isOpen: boolean;
  closeModal: () => void;
  src: string;
  alt: string;
};

function ImageModal({ src, alt, isOpen, closeModal }: Prop) {
  if (isOpen) {
    return (
      <div
        className={styles.modal_bg}
        onClick={() => {
          closeModal();
        }}
      >
        <div className={styles.modal_image_wrapper}>
          <img src={src} alt={alt} className={styles.modal_image} />
        </div>
      </div>
    );
  }
  return <></>;
}

export default ImageModal;
