import React, { memo} from "react";
import Logo from "../../Container/Header/Logo";

import styles from "./index.module.scss";
import HeaderMenu from "./burger/menuContent/HeaderMenu";
import LandingBurgerWrapper from "./burger/"
import LinkedMenuTitles from "./LinkedMenuTitles";
import { linkedNames } from "../LandingTextData";

const LandingHeader = ({t, clickAndScroll,setIsRegistrate,setIsActive, isActive,lang}) => {
//  const linkedNames = [
//   {
//     id: 1,
//     name: "features",
//   },
//   {
//     id: 2,
//     name: "advantages",
//   },
//   {
//     id: 3,
//     name: "fees",
//   },
//   {
//     id: 4,
//     name: "faq",
//   }

//  ]

  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.header_links}>
        { linkedNames && linkedNames.map((item) => (
          <LinkedMenuTitles
            {...item}
            isActive={isActive}
            setIsActive={setIsActive}
            clickAndScroll={clickAndScroll}
            t={t}
          />
        ))}
      </div>
      {
        window.innerWidth > 980 ? 
        <HeaderMenu t={t} lang={lang} /> :
        <LandingBurgerWrapper 
          t={t} 
          lang={lang}
          isActive={isActive}
          setIsActive={setIsActive}
          clickAndScroll={clickAndScroll}
        /> 
      }
    </div>
  )
};

export default memo(LandingHeader);
