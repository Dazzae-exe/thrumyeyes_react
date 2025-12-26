import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "./ui/button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
          >
            <div className="bg-background border border-border rounded-[11px] p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-mono text-xl font-bold uppercase tracking-widest underline underline-offset-4">
                  Contact
                </h2>
                <Button
                  variant={'ghost'}
                  onClick={onClose}
                  className="p-2 hover:bg-secondary transition-colors"
                  size={'icon'}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                    Email
                  </label>
                  <a 
                    href="mailto:alejandroj010799@gmail.com" 
                    className="text-foreground hover:underline"
                  >
                    alejandroj010799@gmail.com
                  </a>
                </div>
                
                <div>
                  <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                    Instagram
                  </label>
                  <a 
                    href="https://instagram.com/thrumyeyes.film" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:underline"
                  >
                    @thrumyeyes.film
                  </a>
                </div>
                
                <div>
                  <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground block mb-2">
                    Location
                  </label>
                  <span className="text-foreground">Miami, FL</span>
                </div>
                
                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    For inquiries about prints, collaborations, or licensing, 
                    please reach out via email. I typically respond within 48 hours.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
