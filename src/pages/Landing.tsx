import ImageGrid from "@/components/ImageGrid";
import { portfolioImages } from "@/data/images";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export const Landing = () => {
  return (
    <>
      <Helmet>
        <title>Gallery | Thrumyeyes</title>
        <meta name="description" content="Explore the photography gallery of Thrumyeyes. A collection of curated images capturing moments and stories." />
      </Helmet>
      <main className="relative space-y-28 mt-32 md:mt-64">
        <motion.h1
          className="text-5xl px-4 md:text-8xl font-bold leading-8 md:px-8 underline underline-offset-4 sticky left-0 z-0 top-8 w-full py-2 md:py-4 backdrop-blur-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          GALLERY
        </motion.h1>
        <ImageGrid images={portfolioImages} />
      </main>
    </>
  );
};
