import React, { memo } from "react";
import { motion } from "framer-motion"

import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import {MPageTitle} from "../title";

import styles from "./index.module.scss";
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


const ContentSnippet = ({content,title,refId, t,imgURL}) => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      id={refId} 
      style={{paddingTop:"70px"}}
      >
      <MPageTitle variants={titleAnimation} custom={1} title={title} />
      <div className={styles.opportunities}>
        <div className={styles.opportunities_leftDiv}>
          {content?.left.map((item,i) =><LeftSection {...item} t={t} i={i} />)}
        </div>
        <motion.div variants={imgAnimation} custom={1.2} className={styles.opportunities_image}>
          <img src={imgURL} alt="phone"/>
        </motion.div>
        <div className={styles.opportunities_rightDiv}>
          {content?.right.map((item,i) =><RightSection {...item} i={i} t={t}/>)}
        </div>
      </div>
    </motion.div>
  )
};

export default memo(ContentSnippet);
