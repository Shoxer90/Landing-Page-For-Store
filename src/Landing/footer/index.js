import React, { memo } from "react";
import SocialMediaGroup from "../../Container2/social";
import PayXInfo from "../../Container2/social/PayXInfo";

import styles from "./index.module.scss";
import { Divider } from "@mui/material";

const LandingFooter = () => {
  return (
    <>
        <Divider color="black" />
      <div className={styles.footer}>
        <div style={{textAlign:"start"}}>
          <PayXInfo />
        </div>
        <SocialMediaGroup w={170} />
        <span style={{fontWeight: "600"}}>
          © 2023, PayX LLC. All Rights Reserved.
        </span>
      </div>
    </>
  )
};

export default memo(LandingFooter);
