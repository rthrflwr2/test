import React from "react";
const variantClasses = {
  h1: "font-bold md:text-[48px] sm:text-[48px] text-[72px]",
  h2: "md:text-[48px] sm:text-[48px] text-[64px]",
  h3: "sm:text-[38px] md:text-[44px] text-[48px]",
  h4: "sm:text-[32px] md:text-[34px] text-[36px]",
  h5: "font-normal sm:text-[24px] md:text-[26px] text-[28px]",
  h6: "sm:text-[20px] md:text-[22px] text-[24px]",
  body1: "sm:text-[18px] md:text-[20px] text-[22px]",
  body2: "font-bold text-[20px]",
  body3: "text-[18px]",
  body4: "font-normal text-[16px]",
  body5: "font-normal text-[14px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
