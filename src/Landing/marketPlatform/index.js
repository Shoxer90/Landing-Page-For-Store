import React from 'react';
import styles from "./index.module.scss";
import {motion} from "framer-motion";
import { MPageTitle } from '../title';
import { titleAnimation } from '../motionAnimations/titles';

const MarketPlace = ({t, lang}) => {

  return (
    <motion.div 
      className={styles.market}
      initial="hidden"
      whileInView="visible"
      // key={lang}
      
    >
      <MPageTitle  variants={titleAnimation} custom={1} title={t("landing.presentationBigTitle")} />
      <motion.div variants={titleAnimation}  className={styles.market_content}>
        <motion.img variants={titleAnimation}  custom={1.2} className={styles.market_content_item} alt="" src="/11223.png" />
        <motion.img variants={titleAnimation}  custom={1.4} className={styles.market_content_item} alt="" src="/StorexQr.png" />
        <motion.img variants={titleAnimation}  custom={1.6} className={styles.market_content_item} alt="" src="/11230.png" />
      </motion.div>
      <motion.h3 custom={2} variants={titleAnimation} style={{margin:"35px",fontWeight:600}}>{t("landing.presentationBigTitle2").toUpperCase()}</motion.h3>


    </motion.div>
  )
}

export default MarketPlace;
