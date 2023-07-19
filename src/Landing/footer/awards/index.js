import React from 'react'
import { PageTitle } from '../../title';
import styles from "./index.module.scss";

const PayXAwards = ({t}) => {
  return (
    <div className={styles.awards}>
      <PageTitle title={t("landing.awards")} />
      <div style={{display:"flex"}}>
        <div className={styles.awards_img}>
          <img style={{height: "100px", }} src="/awards1.png" alt="" />
          {/* <h6>VISA AWARD SUPPORTING CASHLESS DEVELOPMENT IN ARMENIA</h6> */}
        </div>
        <div className={styles.awards_img}>
        <img style={{height: "100px",}} src="/awards2.png" alt="" />
        {/* <h6> GLOBAL BANKING & FINANCE AWARD 2020</h6> */}
        </div>
            
          </div>
          <div style={{display:"flex"}}>

        <div className={styles.awards_img}>
          <img style={{height: "100px",}} src="/awards3.jpg" alt="" />
          {/* <h6> VISA AWARD FOR DRIVING CASHLESS</h6> */}
        </div>
        <div className={styles.awards_img} >
          <img  style={{height: "100px",}}src="/awards4.png" alt="" />
          {/* <h6> BEST PAYMENT SOLUTION PROVIDER 2023</h6> */}
        </div>
      </div>
      </div>
  )
}

export default PayXAwards;