import React, { memo } from 'react';
import styles from "./index.module.scss";
import { PageTitle } from '../title';
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
       style={{paddingTop:"90px"}}
      id="section-4">
      <motion.div className={styles.faqDiv} variants={rightTextAnumation} custom={1.3} >
        <motion.img  variants={leftTextAnumation} custom={1} src='/QAPH.png' alt="" style={{height:"390px",alignSelf:"center"}} />
        <div className={styles.faqDiv_content}> 
        <Accordion style={{backgroundColor: "transparent",color:"white", boxShadow:"none" }}>
        <AccordionSummary>
        <motion.div  variants={leftTextAnumation} custom={1.5} >
          <PageTitle title={t("landing.FAQ2")} />
        </motion.div>

        </AccordionSummary>
        <AccordionDetails>
          {FAQ.map((block, i) => (
            <motion.div  variants={rightTextAnumation} custom={i*0.3} >
              <Accordion style={{backgroundColor: "transparent",color:"white", boxShadow:"none" }}>
              <AccordionSummary>
                  <div><strong>{i+1}. {t(`${block?.question}`)}</strong></div>
                </AccordionSummary>
                <AccordionDetails>
                  <FAQContentItem key={i}{...block} t={t} index={i+1}/>
                </AccordionDetails>
              </Accordion>
            </motion.div> 
          ))}
        </AccordionDetails>

        </Accordion>
        {/* {FAQ.map((block, i) => (
          <motion.div  variants={rightTextAnumation} custom={i*0.3} >
            <Accordion style={{backgroundColor: "transparent",color:"white", boxShadow:"none" }}>
            <AccordionSummary>
                <div><strong>{i+1}. {t(`${block?.question}`)}</strong></div>
              </AccordionSummary>
              <AccordionDetails>
                <FAQContentItem key={i}{...block} t={t} index={i+1}/>
              </AccordionDetails>
            </Accordion>
          </motion.div> 
        ))} */}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default memo(FrequentlyAskedQuestions);
