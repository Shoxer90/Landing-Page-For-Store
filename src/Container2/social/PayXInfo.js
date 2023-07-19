import React from "react";
import styles from "./index.module.scss";

const PayXInfo = () => {
  return (
    <div className={styles.payxInfo}> 
      <span style={{fontSize:"80%",fontWeight:"700",color:"rgb(17, 46, 17)"}}>Tel.: +(374)55 522 225</span>
      <span style={{fontSize:"80%",fontWeight:"700",color:"rgb(17, 46, 17)"}}>E-mail՝ info@payx.am</span>
      <span style={{fontSize:"80%",fontWeight:"700",color:"rgb(17, 46, 17)"}}>50, Mashtots Ave., Yerevan, RA</span>
    </div>
  )
};

export default PayXInfo;
