import React, { memo } from "react";
import styles from "./index.module.scss";
import { MPageTitle } from "../title";
import { motion } from "framer-motion";
import { imgAnimation, titleAnimation } from "../motionAnimations/titles";

const Presentation = ({t, lang}) => {

  return (
    <motion.div 
      className={styles.presentation}
      initial="hidden"
      whileInView="visible"
      key={lang}
    >
      <MPageTitle variants={titleAnimation} custom={2} title={t("landing.presentationSmallTitle")} />
      <div className={styles.presentation_image}>
        { lang === "am" && <motion.img  variants={imgAnimation} custom={1} src="/Presentation-1-am.png" alt="phone" />}
        { lang === "ru" && <motion.img  variants={imgAnimation} custom={1} src="/Presentation-1-ru.png" alt="phone" />}
        { lang === "en" && <motion.img  variants={imgAnimation} custom={1} src="/Presentation-1-en.png" alt="phone" />}
        { lang === "am" && <motion.img  variants={imgAnimation} custom={1.2} src="/Presentation-2-am.png" alt="phone" />}
        { lang === "ru" && <motion.img  variants={imgAnimation} custom={1.2} src="/Presentation-2-ru.png" alt="phone" />}
        { lang === "en" && <motion.img  variants={imgAnimation} custom={1.2} src="/Presentation-2-en.png" alt="phone" />}
      </div>
    </motion.div>
  )
};

export default memo(Presentation);
