import React from "react";
import PropTypes from "prop-types";

const variants = {
  primary:
    "border-gray-800 border border-solid bg-white-A700 checked:border-gray-800 checked:border checked:border-solid checked:bg-white-A700 checked:focus:bg-white-A700 checked:focus:border-gray-800",
};
const sizes = {
  xs: "",
  sm: "h-[18px] w-[18px]",
  md: "h-[22px] w-[22px]",
};

const CheckBox = React.forwardRef(
  (
    {
      className = "",
      name = "",
      children,
      label = "",
      id = "checkbox_id",
      onChange,
      variant = "primary",
      size = "sm",
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div
          className={className + " flex items-center gap-[5px] cursor-pointer"}
        >
          <input
            className={` ${(size && sizes[size]) || ""} ${
              (variant && variants[variant]) || ""
            }`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            id={id}
            {...restProps}
          />
          {!!label && <label htmlFor={id}>{label}</label>}
        </div>
        {children}
      </>
    );
  }
);

CheckBox.displayName = "CheckBox";

CheckBox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["primary"]),
};

export { CheckBox };
