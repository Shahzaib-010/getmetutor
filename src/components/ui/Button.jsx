import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const Button = ({
  to = "/syllabus",
  href,
  text = "Book Free Demo",
  className = "font-semibold",
  target,
  rel,
}) => {
  const sharedClassName = `group inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-[14px] text-white transition hover:bg-orange-500 ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={sharedClassName}>
        {text}

        <motion.span
          className="flex items-center"
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <ArrowRight size={15} />
        </motion.span>
      </a>
    );
  }

  return (
    <Link to={to} className={sharedClassName}>
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
