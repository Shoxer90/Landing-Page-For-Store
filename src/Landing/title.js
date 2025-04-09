import { motion } from "framer-motion";
import React from "react";
import { forwardRef } from "react";

export const PageTitle = forwardRef( ({title}, ref) => {
  const styling={
    margin: "20px 0",
    fontWeight: 600,
  }
  return (
    <h1 ref={ref} style={styling}>
      {/* {title} */}
      {title.toUpperCase()}
    </h1>
  )
});

export const MPageTitle =  motion(PageTitle);
