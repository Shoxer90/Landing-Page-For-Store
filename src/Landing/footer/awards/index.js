import React from 'react'
import { MPageTitle, PageTitle } from '../../title';
import { Divider } from '@mui/material';

import { motion } from "framer-motion";
import styles from "./index.module.scss";

const imgAnimation = {
  hidden:{
    y: 100,
    opacity: 0
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: {delay: custom * 0.7}
  })
};
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


const PayXAwards = ({t}) => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
    >
      <MPageTitle variants={titleAnimation} custom={1} title={t("landing.awards")} />
      <Divider color="black" sx={{m:2}} />
      <div className={styles.awards}>
          <motion.div variants={imgAnimation} custom={1.3} className={styles.awards_img}>
            <img src="/awards1.png" alt="" />
            <p style={{fontSize:"85%"}}>VISA AWARD SUPPORTING CASHLESS DEVELOPMENT IN ARMENIA</p>
          </motion.div>
          <motion.div variants={imgAnimation} custom={1.5} className={styles.awards_img}>
            <img src="/awards2.png" alt="" />
            <p> GLOBAL BANKING & FINANCE AWARD 2020</p>
          </motion.div>
            <motion.div variants={imgAnimation} custom={1.7} className={styles.awards_img}>
            <img  src="/awards3.png" alt="" />
            <p> VISA AWARD FOR DRIVING CASHLESS 2021</p>
          </motion.div>
          <motion.div variants={imgAnimation} custom={1.9} className={styles.awards_img} >
            <img src="/awards4.png" alt="" />
            <p> BEST PAYMENT SOLUTION PROVIDER 2023</p>
          </motion.div>
      </div>
    </motion.div>
  )
}

export default PayXAwards;
