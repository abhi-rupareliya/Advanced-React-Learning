import { useState } from "react";
import styles from "./ui.module.scss";
type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
};

const Image = ({ src, alt, onClick }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      {!isLoaded && <div className={styles.image_skeleton} />}
      <img
        src={src}
        alt={alt}
        className={isLoaded ? styles.image_block : styles.image_hidden}
        onLoad={handleImageLoad}
        onClick={onClick ? (e) => onClick(e) : undefined}
      />
    </>
  );
};

export default Image;
