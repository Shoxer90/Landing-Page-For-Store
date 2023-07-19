import { motion } from "framer-motion";
import React from "react";
import { forwardRef } from "react";

export const PageTitle = forwardRef( ({title}, ref) => {
  const styling={
    margin: "40px"
  }
  return (
    <h2 ref={ref} style={styling}>
      {title}
    </h2>
  )
});

export const MPageTitle =  motion(PageTitle);
