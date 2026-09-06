import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 10 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-24 right-6 z-40 flex items-center group"
        >
          {/* Tooltip Label */}
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap mr-2.5 pointer-events-none">
            Back to Top
          </span>

          {/* Scroll Button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="grid h-12 w-12 place-items-center rounded-full bg-[#0099ff] text-white shadow-lg shadow-sky-500/30 hover:bg-[#0088ee] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer border-2 border-white/50"
          >
            <ArrowUp className="h-5 w-5 stroke-[2.6]" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
