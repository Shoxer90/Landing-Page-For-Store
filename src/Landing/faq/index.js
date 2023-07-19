import React, { memo } from 'react';
import styles from "./index.module.scss";
import { PageTitle } from '../title';
import PayXInfo from '../../Container2/social/PayXInfo';
import FAQContentItem from '../content/FAQContentItem';
import { FAQ } from '../LandingTextData';
import { motion } from "framer-motion";
import { Accordion, AccordionDetails, AccordionSummary, Button } from '@mui/material';

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
};

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
};
const MButton = motion(Button);
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

const FrequentlyAskedQuestions = ({t}) => {

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className={styles.faqDiv} 
      id="section-4">
      <motion.img  variants={leftTextAnumation} custom={1} src='/QAPH.png' alt="" style={{height:"390px",alignSelf:"center"}} />

      <motion.div  variants={rightTextAnumation} custom={1} className={styles.faqDiv_content}>

        <Accordion style={{backgroundColor: "transparent", color:"white", boxShadow:"none" }}>
         <AccordionSummary style={{display:"flex",flexFlow:"column"}}>
            <div>
              <PageTitle title={t("landing.FAQ2")} />
            </div>
          </AccordionSummary>
          <AccordionDetails>
            {FAQ.map((block, i) => (
              <FAQContentItem key={i}{...block} t={t} index={i+1}/>
            ))}

          <p>{t("landing.faqEnd")}</p>
          <PayXInfo />

          </AccordionDetails>
        </Accordion>

      </motion.div>
    </motion.div>
  )
}

export default memo(FrequentlyAskedQuestions);
