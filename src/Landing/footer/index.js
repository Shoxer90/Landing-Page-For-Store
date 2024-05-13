import React, { memo } from "react";
import PayXInfo from "../../Container2/social/PayXInfo";

import styles from "./index.module.scss";


const LandingFooter = ({t}) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_content}>
        <div style={{letterSpacing: "2px", marginTop:'15px'}}>
          <h6><PayXInfo color={"white"}/></h6>  
        </div>
      </div>

      <p style={{margin:"0px",fontSize:"80%"}}>
        © 2023, PayX LLC. All Rights Reserved.
      </p>
    </div>
  )
};

export default memo(LandingFooter);

// <div className={styles.footer}>
// <div className={styles.footer_content}>
//   <div style={{letterSpacing: "2px", marginTop:'15px'}}>
//     <h6><PayXInfo color={"white"}/></h6>  
//   </div>
//   <div style={{ display:"flex",flexFlow:"column", marginTop:'10px',fontWeight:"600",fontSize:"80%", alignContent:"end"}}>
//     <div style={{alignItems:"center",textAlign:"center",alignSelf:"center"}}>
//       <h5><SocialMediaGroup w={170} /></h5>  
//     </div>
//     <p>
//     © 2023, PayX LLC. All Rights Reserved.

//     </p>
//  </div>
// </div>
// </div>
