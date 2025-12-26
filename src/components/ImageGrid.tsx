import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ImageCard from "./ImageCard";
import ImageModal from "./ImageModal";
import type { ImageData } from "@/types/image";

interface ImageGridProps {
  images: ImageData[];
}

const ImageGrid = ({ images }: ImageGridProps) => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <ImageCard
            key={image.id}
            image={image}
            index={index}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGrid;
