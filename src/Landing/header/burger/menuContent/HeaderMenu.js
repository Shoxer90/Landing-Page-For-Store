import React, { memo } from 'react';
import { Button } from '@mui/material';
import LangSelect from '../../../../Container2/langSelect';

import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import styles from "../../index.module.scss";

const HeaderMenu = ({t, lang,}) => {

  return (
		<div className={styles.flagBtn}>
			<Button
				variant={window.innerWidth > 600 ? "contained" :"text"}
				style={{color: "#e58721",background:"white", border: "#e58721",margin:"2px"}} 
				href="https://storex.payx.am/registration"
			>
        {window.innerWidth > 600 ? t("authorize.registration"): <HowToRegIcon />}
			</Button>

			<Button
				variant={window.innerWidth > 600 ? "contained" :"text"}
				style={{background:window.innerWidth > 600 ? "#3FB68A":"white",margin:"2px"}}
				href="https://storex.payx.am/login"
			>
				{window.innerWidth > 600 ?t("authorize.login"):<LoginIcon />}
			</Button>
     	{lang &&<LangSelect  size={"22px"} lang={lang}/>}
 		</div>
  )
}

export default memo(HeaderMenu);
