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

const RightSection = ({ img, subtitle, text, t, tagText,setIsActive,clickAndScroll, link,linkText }) => {
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
        <motion.span variants={rightTextAnumation} custom={1} style={{fontSize:"110%"}}><strong>{t(subtitle).toUpperCase()}</strong></motion.span>
      </div>
      <motion.span variants={rightTextAnumation} custom={1.2}style={{color:"grey",fontSize:"85%"}}>{t(text)}</motion.span>
      {tagText && 
        <motion.span 
          className={styles.linkToDiv}
          variants={rightTextAnumation} 
          custom={1.2}
          onClick={()=>{
            setIsActive(3)
            clickAndScroll("section-3")
          }}
        >
          {t(tagText)}
        </motion.span>
      }
      {linkText &&
       <motion.a 
       className={styles.linkToDiv}
       variants={rightTextAnumation} 
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

export default memo(RightSection);
