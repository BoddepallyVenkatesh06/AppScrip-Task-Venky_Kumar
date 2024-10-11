import React from "react";

const sizes = {
  xl: "text-2xl font-bold md:text-[22px]",
  s: "text-base font-bold",
  md: "text-lg font-bold",
  xs: "text-sm font-bold",
  lg: "text-xl font-bold",
};

const Heading = ({
  children,
  className = "",
  size = "md",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-gray-900 font-simplonnorm ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
