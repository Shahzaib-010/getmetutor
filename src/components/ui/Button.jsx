import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Button = ({ to = "/syllabus", text = "Book Free Demo" }) => {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-[12px] text-white transition hover:bg-orange-500"
    >
      {text}

      <motion.span
        className="flex items-center"
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <ArrowRight size={15} />
      </motion.span>
    </Link>
  );
};

export default Button;
