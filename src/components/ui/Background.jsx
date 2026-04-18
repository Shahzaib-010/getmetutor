import React from "react";

const Background = ({ children }) => {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 40% at 50% 0%, #000 20%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 40% at 50% 0%, #000 20%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;