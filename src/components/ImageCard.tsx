import { motion } from "framer-motion";
import type { ImageData } from "@/types/image";
import React from "react";

interface ImageCardProps {
  image: ImageData;
  index: number;
  onClick: () => void;
}

const ImageCard = ({ image, index, onClick }: ImageCardProps) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="image-card group border-neutral-200 border-[0.5px] overflow-hidden h-full relative"
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <div className="aspect-square overflow-hidden">
        <motion.img
          src={image.src}
          alt={image.title}
          className="w-full h-full object-cover object-center transition-transform duration-500"
          whileHover={{ scale: 1.01 }}
        />
      </div>
      
      <div className={`absolute w-[90%] mx-auto bottom-0 left-0 right-0 bg-background/60 p-3 transition-transform duration-300 backdrop-blur-xl rounded-[11px] ${!hovered ? "translate-y-full" : "-translate-y-4"}`} >
        <h3 className="font-mono text-xs uppercase tracking-wider mb-1">
          {image.title}
        </h3>
        <p className="font-sans text-xs text-muted-foreground">
          {image.location.name}
        </p>
      </div>
    </motion.div>
  );
};

export default ImageCard;
