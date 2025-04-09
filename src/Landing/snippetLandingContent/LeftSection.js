 import React, { memo } from "react";
 import { motion }  from "framer-motion";

import styles from "./index.module.scss";

const leftTextAnumation = {
  hidden: {
    x: -100,
    opacity:0
  },
  visible:custom =>( {
    x: 0,
    opacity: 1,
    transition: {delay: custom * 0.4}
  })
}


const LeftSection = ({ img, subtitle, text, t,linkText, link}) => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      className={styles.opportunities_leftDiv_item}
      
      >
      <div style={{display:"flex",flexFlow:"column", margin:"10px 0px"}}>
      <motion.img 
          src={img}
          alt="icon"
          variants={leftTextAnumation} custom={0.8}
          style={{height:"50px",width:"50px"}} 
        />
        <motion.span 
          style={{fontSize:"110%",}}
          variants={leftTextAnumation}
          custom={1}
        ><strong>{t(subtitle).toUpperCase()}</strong></motion.span>
      </div>
      <motion.span
        variants={leftTextAnumation}
        custom={1.2}
        style={{color:"grey",fontSize:"85%"}}
      >
        {t(text)}
      </motion.span>
      {linkText &&
       <motion.a 
        className={styles.linkToDiv}
        variants={leftTextAnumation} 
        custom={1.2}
        href={link}
        target="_blank"
      >
       {t(linkText)}
     </motion.a>
     }
    </motion.div>
  )
};

export default memo(LeftSection);
