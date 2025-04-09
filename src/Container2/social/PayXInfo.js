import React, { useState } from "react";
import styles from "./index.module.scss";
import SocialMediaGroup from "./index"
import { Alert, Divider, Snackbar } from "@mui/material";
import { useTranslation } from "react-i18next";

const PayXInfo = ({color}) => {
  const [message,setMessage] = useState("");
  const {t} = useTranslation();


  return (
    <div className={styles.payxInfo}> 
      <p style={{color:{color}}}>PayX LLC</p>
      <Divider orientation="vertical"  color="white" style={{width:'.3%'}} flexItem />
      <p
        style={{color:{color}}}
        // href="tel:+37455522225"
        onClick={() =>{
          navigator.clipboard.writeText("+37455522225")
          setMessage(t("landing.copyTel"))
          setTimeout(()=>{
            setMessage("")
          },1500)
         }}
      >
        Tel.: (+374)55 522 225 
      </p>
      <Divider orientation="vertical"  color="white" style={{width:'.3%'}} flexItem />
      <p 
        style={{color:{color},padding:"0px"}} 
        onClick={() =>{
          navigator.clipboard.writeText("info@payx.am");
          setMessage(t("landing.copyMail"));
          setTimeout(()=> {
            setMessage("")
          },1500);
        }}
      >
        E-mail: info@payx.am
      </p>
      <Divider orientation="vertical"  color="white" style={{width:'.3%'}} flexItem />
      <p style={{color:{color}}}> 50 Mashtots Ave., Yerevan, Armenia, 0010</p>
      <Divider orientation="vertical"  color="white" style={{width:'.3%'}} flexItem />
      <SocialMediaGroup w={170} />

      <Snackbar open={!!message} autoHideDuration={6000} onClose={()=>setMessage("")}>
        <Alert onClose={()=>setMessage("")} severity="success" sx={{  width: '200%'}}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
};

export default PayXInfo;
