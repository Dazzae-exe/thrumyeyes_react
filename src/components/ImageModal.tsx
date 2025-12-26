import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, MapPin, Calendar, Camera, Aperture } from "lucide-react";
import type { ImageData } from "@/types/image";

interface ImageModalProps {
  image: ImageData | null;
  onClose: () => void;
  isClosed?: boolean;
}

const ImageModal = ({ image, onClose, isClosed }: ImageModalProps) => {
  useEffect(() => {
    if (image) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [image]);

  if (!image) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, type: "tween", delay: isClosed ? 0.3 : 0 }}
      className="fixed inset-0 z-40 bg-background w-[98%] h-[98%] top-[1%] rounded-[11px] mx-auto border-[0.5px] border-accent-foreground overflow-hidden"
      onClick={onClose}
    >
      {/* Close Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ delay: 0.1 }}
        className="fixed top-4 right-4 z-50 nav-button flex items-center gap-2 rounded-[9px] px-3 py-2 bg-background/90 backdrop-blur-sm border md:mr-6"
        onClick={onClose}
      >
        <X className="w-4 h-4" />
        Close
      </motion.button>

      <div
        className="h-full overflow-y-auto overscroll-contain"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="min-h-full flex flex-col lg:flex-row">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:flex-1 lg:h-screen lg:sticky lg:top-0 flex items-center justify-center p-4 lg:p-8"
          >
            <img
              src={image.src}
              alt={image.title}
              className="max-w-full max-h-[60vh] lg:max-h-[90vh] object-contain"
            />
          </motion.div>

          {/* Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:w-96 p-6 lg:p-8 border-l border-border"
          >
            <div className="space-y-8">
              {/* Title & Description */}
              <div>
                <h2 className="font-mono text-2xl uppercase tracking-wider mb-4">
                  {image.title}
                </h2>
                {image.description && (
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {image.description}
                  </p>
                )}
              </div>

                  {/* Metadata */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 mt-0.5 text-muted-foreground" />
                      <div>
                        <p className="font-mono text-xs uppercase tracking-wider mb-1">
                          Location
                        </p>
                        <p className="font-sans text-sm">{image.location.name}</p>
                        <p className="font-mono text-xs text-muted-foreground mt-1">
                          {image.location.coordinates.lat.toFixed(4)}°N,{" "}
                          {image.location.coordinates.lng.toFixed(4)}°E
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Calendar className="w-4 h-4 mt-0.5 text-muted-foreground" />
                      <div>
                        <p className="font-mono text-xs uppercase tracking-wider mb-1">
                          Date
                        </p>
                        <p className="font-sans text-sm">
                          {new Date(image.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>

                    {image.camera && (
                      <div className="flex items-start gap-3">
                        <Camera className="w-4 h-4 mt-0.5 text-muted-foreground" />
                        <div>
                          <p className="font-mono text-xs uppercase tracking-wider mb-1">
                            Camera
                          </p>
                          <p className="font-sans text-sm">{image.camera}</p>
                        </div>
                      </div>
                    )}

                    {image.aperture && (
                      <div className="flex items-start gap-3">
                        <Aperture className="w-4 h-4 mt-0.5 text-muted-foreground" />
                        <div>
                          <p className="font-mono text-xs uppercase tracking-wider mb-1">
                            Settings
                          </p>
                          <p className="font-sans text-sm">
                            {image.aperture} · ISO {image.iso}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Map Preview */}
                  <div className="pt-4 border-t border-border">
                    <p className="font-mono text-xs uppercase tracking-wider mb-3">
                      Location Map
                    </p>
                    <div className="aspect-video bg-muted border border-border overflow-hidden">
                      <img
                        src={`https://api.mapbox.com/styles/v1/mapbox/light-v11/static/pin-s+000000(${image.location.coordinates.lng},${image.location.coordinates.lat})/${image.location.coordinates.lng},${image.location.coordinates.lat},8,0/400x225@2x?access_token=pk.eyJ1IjoibG92YWJsZS1kZW1vIiwiYSI6ImNtNXdxbWxsMTA5aXUya3M4OGpqMzQ3b2cifQ.bF0spzSan7LsV4hFBGWbOA`}
                        alt={`Map of ${image.location.name}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.parentElement!.innerHTML = `
                            <div class="flex items-center justify-center h-full text-muted-foreground text-xs font-mono">
                              ${image.location.coordinates.lat.toFixed(4)}°N, ${image.location.coordinates.lng.toFixed(4)}°E
                            </div>
                          `;
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
  );
};

export default ImageModal;
