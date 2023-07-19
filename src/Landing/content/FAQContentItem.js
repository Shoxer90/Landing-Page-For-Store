import React from 'react';
import styles from "./index.module.scss"


const FAQContentItem = ({t,question,answer,dot, index}) => {
  return (
    <div className={styles.faqItem}>
      <div><strong>{index}. {t(`${question}`)}</strong></div>
      <div>- {t(`${answer}`)}</div>
      {dot && <div>- {t(`${dot}`)}</div>}
    </div>
  )
}

export default FAQContentItem; 
