import React, { memo } from "react";
import { motion } from "framer-motion";

import PriceTable from "./table";

import styles from "./index.module.scss";
import { MPageTitle } from "../title";
const titleAnimation = {
  hidden:{
    y: -100,
    opacity: 0
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: {delay: custom * 0.8}
  })
}
//  const MButton = motion(Button);
 const annotationAnimation = {
  hidden:{
    x: 100,
    opacity: 0
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {delay: custom * 0.8}
  })
 }

const PriceList = ({t, setIsRegistrate}) => {

  return(
    <motion.div 
      id="section-3"
      initial="hidden"
      whileInView="visible"
      style={{paddingTop:"90px"}}
    >
      <MPageTitle variants={titleAnimation} custom={1} title={t("landing.priceListTitle")} />
      <PriceTable t={t} />
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={annotationAnimation}
        custom={1.2}
        className={styles.annotation}
      >
        <span>{t("landing.priceListStars1")}</span>
        <span>{t("landing.priceListStars2")}</span>
        <span>{t("landing.priceListStars3")}</span>
      </motion.div>
    </motion.div>
  )
};

export default memo(PriceList);
