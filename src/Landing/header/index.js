import React, { useState } from "react" ;
import styles from "./index.module.scss";
import { memo } from "react";
import Logo from "../../Container/Header/Logo";
import Flags from "../../Container2/language/Flags";
import { Button } from "@mui/material";


const LandingHeader = ({t, clickAndScroll,setIsRegistrate}) => {
  const [isActive, setIsActive] = useState(0);
  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.header_links}>
        <a 
          className={isActive=== 1 ? styles.header_links_item_active: styles.header_links_item} 
          href="#/opportunities"
          onClick={()=>{
            setIsActive(1)
            clickAndScroll("section-1")
          }}
        >
          {t("landing.opportunities")}
        </a>
        <a 
          className={isActive=== 2 ? styles.header_links_item_active: styles.header_links_item} 
          href="#/benefits"
          onClick={()=>{
            setIsActive(2)
            clickAndScroll("section-2")
          }}
        >
          {t("landing.benefits")}
        </a>
        <a 
         className={isActive=== 3 ? styles.header_links_item_active: styles.header_links_item} 
          href="#/prices"
          onClick={()=>{
            setIsActive(3)
            clickAndScroll("section-3")
          }}
        >
          {t("authorize.registration")}
        </a>
        <a 
          className={isActive=== 4 ? styles.header_links_item_active: styles.header_links_item} 
          href="#/faq"
          onClick={()=> {
            setIsActive(4)
            clickAndScroll("section-4")
          }}
          >
          {t("landing.FAQ")}
        </a>
      </div>
      <div style={{display:"flex"}}>
      <div style={{marginRight:"15px"}}>
       <Flags />
      </div>
        <Button
          variant="contained"
          style={{marginRight:"12px",background:"#3FB68A"}}
          onClick={()=> setIsRegistrate(0)}
        >
          {t("authorize.login")}
        </Button>
        <Button
          variant="outlined"
          style={{color: "#e58721", border: "#e58721"}}
          onClick={()=> setIsRegistrate(1)}
        >
          {t("authorize.registration")}
        </Button>
      </div>
    </div>
  )
};

export default memo(LandingHeader);
