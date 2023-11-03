"use client";

import React from "react";
import Image from "next/image";
import { customButtonProps } from "@/types";

const CustomButton = ({
  title,
  btnType,
  containerStyles,
  textStyles,
  rightIcon,
  isDisabled,
  handleClick,
}: customButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles} `}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            fill
            className="object-contain"
            alt="right icon"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
