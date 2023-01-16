import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  srcFillGray200: "bg-gray_200",
  OutlineBlack900: "border border-black_900 border-solid",
};
const shapes = { srcRoundedBorder10: "rounded-radius10" };
const sizes = {
  smSrc: "md:p-[13px] p-[26px] sm:px-[15px] sm:py-[10px]",
  mdSrc: "md:p-[14px] p-[29px] sm:px-[15px] sm:py-[11px]",
  sm: "p-[16px] md:p-[8px] sm:px-[15px] sm:py-[6px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["srcRoundedBorder10"]),
  variant: PropTypes.oneOf(["srcFillGray200", "OutlineBlack900"]),
  size: PropTypes.oneOf(["smSrc", "mdSrc", "sm"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "srcFillGray200",
  size: "smSrc",
};

export { Input };
