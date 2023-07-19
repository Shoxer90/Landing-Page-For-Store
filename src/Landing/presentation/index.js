import React, { memo } from "react";
import styles from "./index.module.scss";
import { MPageTitle } from "../title";
import { motion } from "framer-motion";

const titleAnimation = {
  hidden:{
    y: -100,
    opacity: 0
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: {delay: custom * 0.3}
  })
};
const imgAnimation = {
  hidden:{
    y: 100,
    opacity: 0
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: {delay: custom * 0.9}
  })
}


const Presentation = ({t}) => {

  return (
    <motion.div 
      className={styles.presentation}
      initial="hidden"
      whileInView="visible"
    >
      <motion.h1 variants={titleAnimation} custom={1} >{t("landing.presentationBigTitle")}</motion.h1>
      <MPageTitle variants={titleAnimation} custom={2} title={t("landing.presentationSmallTitle")} />
      <div style={{display:"flex",alignSelf:"center"}}>
        <motion.img   variants={imgAnimation} custom={1} src="/phone-prods22.png" alt="phone" style={{marginRight:"20px"}}/> 
        <motion.img  variants={imgAnimation} custom={1.2} src="/landing23.png" alt="phone"/>
      </div>
    </motion.div>
  )
};

export default memo(Presentation);
