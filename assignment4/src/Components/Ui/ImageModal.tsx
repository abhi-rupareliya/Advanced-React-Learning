type Prop = {
  isOpen: boolean;
  closeModal: ()=>void;
  src: string;
  alt: string;
};

function ImageModal({ src, alt, isOpen, closeModal }: Prop) {
  if (isOpen) {
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center backdrop-blur-sm"
        onClick={() => {
          closeModal();
        }}
      >
        <div className="bg-white p-4">
          <img
            src={src}
            alt={alt}
            className="object-cover rounded-lg shadow-sm mx-auto w-96 h-96"
          />
        </div>
      </div>
    );
  }
  return <></>;
}

export default ImageModal;
