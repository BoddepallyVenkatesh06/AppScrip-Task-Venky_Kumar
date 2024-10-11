import React from "react";

const sizes = {
  xs: "text-xs font-normal",
  lg: "text-lg font-normal",
  s: "text-sm font-normal",
  "2xl": "text-6xl font-normal md:text-[52px] sm:text-[46px]",
  xl: "text-[22px] font-normal",
  md: "text-base font-normal",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-blue_gray-400 font-simplonnorm ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
