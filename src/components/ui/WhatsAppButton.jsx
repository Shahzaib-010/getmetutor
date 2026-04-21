import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phone = "+923160479437"; // your number (no +)
  const message = "Hi, I’m interested in Get Me Tutor tutoring. Can you share more details?";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="fixed bottom-6 right-6 z-[9999]"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        {/* Icon */}
        <FaWhatsapp className="text-white text-2xl" />

        {/* Pulse ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-30 animate-ping"></span>

        {/* Tooltip */}
        <span className="absolute right-16 whitespace-nowrap bg-black text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
          Chat with us
        </span>
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;
