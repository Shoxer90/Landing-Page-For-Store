import React, { memo } from "react";
import styles from "./index.module.scss";
 import { motion } from "framer-motion"

const rightTextAnumation = {
  hidden: {
    x: +100,
    opacity:0
  },
  visible:custom =>( {
    x: 0,
    opacity: 1,
    transition: {delay: custom * 0.4}
  })
}

const RightSection = ({ img, subtitle, text, t}) => {
  return (
    <motion.div 
      className={styles.opportunities_rightDiv_item}
      initial="hidden"
      whileInView="visible"
    >
      <div style={{display:"flex",flexFlow:"column", margin:"10px 0px"}}>
        <motion.img 
          src={img}
          alt="icon"
          variants={rightTextAnumation} custom={0.8}
          style={{height:"50px",width:"50px"}} 
        />
        <motion.span variants={rightTextAnumation} custom={1} style={{fontSize:"110%"}}><strong>{t(subtitle)}</strong></motion.span>
      </div>
      <motion.span  variants={rightTextAnumation} custom={1.2}style={{color:"grey",fontSize:"90%"}}>{t(text)}</motion.span>
  </motion.div>

  )
};

export default memo(RightSection);
