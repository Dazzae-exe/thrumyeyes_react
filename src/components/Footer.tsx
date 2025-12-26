import { Instagram, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-border py-6 px-4 text-center flex flex-col gap-2 md:gap-4 md:px-8 lg:px-16 items-center justify-center">
        <div className="w-fit flex items-center min-h-8 text-muted-foreground gap-1">
          <Button variant={'ghost'} size={'icon'} asChild>
            <a href="https://instagram.com/thrumyeyes.film" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram />
            </a>
          </Button>
          <Button variant={'ghost'} size={'icon'} asChild>
            <a href="mailto:alejandroj010799@gmail.com" aria-label="Email">
              <Mail />
            </a>
          </Button>
        </div>
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
          © {new Date().getFullYear()} Thrumyeyes · All Rights Reserved
        </p>
    </footer>
   );
};

export default Footer;

