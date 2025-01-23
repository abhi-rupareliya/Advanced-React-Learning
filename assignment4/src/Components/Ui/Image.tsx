import { useState } from "react";

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
      {!isLoaded && (
        <div
          className={`bg-gray-100 w-64 h-64 animate-pulse rounded-lg shadow-sm mx-auto`}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-64 h-64 object-cover rounded-lg shadow-sm mx-auto ${
          isLoaded ? "block" : "hidden"
        }`}
        onLoad={handleImageLoad}
        onClick={onClick ? (e) => onClick(e) : undefined}
      />
    </>
  );
};

export default Image;
