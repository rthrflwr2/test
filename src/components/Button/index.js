import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder10: "rounded-radius10",
  RoundedBorder6: "rounded-radius6",
  icbRoundedBorder16: "rounded-radius16",
  icbRoundedBorder24: "rounded-radius24",
};
const variants = {
  FillBluegray400: "bg-bluegray_400 text-gray_51",
  FillTeal50: "bg-teal_50 text-teal_900",
  FillWhiteA700: "bg-white_A700 text-black_900",
  icbFillTeal900: "bg-teal_900",
};
const sizes = {
  sm: "p-[14px] sm:p-[5px] md:p-[7px]",
  md: "p-[18px] md:p-[9px] sm:px-[15px] sm:py-[7px]",
  lg: "md:p-[11px] p-[22px] sm:px-[15px] sm:py-[8px]",
  xl: "md:p-[13px] p-[27px] sm:px-[15px] sm:py-[10px]",
  smIcn: "p-[15px] sm:p-[5px] md:p-[7px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder10",
    "RoundedBorder6",
    "icbRoundedBorder16",
    "icbRoundedBorder24",
  ]),
  variant: PropTypes.oneOf([
    "FillBluegray400",
    "FillTeal50",
    "FillWhiteA700",
    "icbFillTeal900",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder6",
  variant: "FillBluegray400",
  size: "md",
};

export { Button };
