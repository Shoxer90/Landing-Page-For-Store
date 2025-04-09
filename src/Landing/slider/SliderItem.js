import React from 'react';
import styles from "./index.module.scss";


const SliderItem = ({img}) => (
    <img src={img} alt="" className={styles.carretteImg} />
  )

export default SliderItem;
