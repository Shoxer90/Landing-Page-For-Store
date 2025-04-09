import React, { memo } from "react";
import styles from "./index.module.scss";

const PartnersItem = ({name,img}) => (
  <div className={styles.partner_div}>
    <img src={img} alt={`${img}`} className={styles.partner_div_img} />

  </div>
)

export default memo(PartnersItem);
