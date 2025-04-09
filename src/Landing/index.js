import React, { memo, useEffect } from "react";
import LandingHeader from "./header";
import Presentation from "./presentation";
import PriceList from "./prices";
import LandingFooter from "./footer";
import ContentSnippet from "./snippetLandingContent"
import FrequentlyAskedQuestions from "./faq"; 

import styles from "./index.module.scss";
import { BENEFITS, OPPORTUNITIES } from "./LandingTextData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SliderComponent from "./slider";
import PayXAwards from "./footer/awards";
import MarketPlace from "./marketPlatform";
import Partners from "./partners";

const LandingPage = ({t, setIsRegistrate}) => {
  const navigate = useNavigate();
  const [lang, setLang] = useState();
  const [isActive, setIsActive] = useState(0);

  const clickAndScroll = (arg) => {
    const element = document.getElementById(arg);
    element.scrollIntoView({ behavior: 'smooth' })
  };

  useEffect(() => {
    navigate("/")
  }, []);

  useEffect(() => {
      setLang(localStorage.getItem("i18nextLng"))
  }, [t]);


  return (
    
    <div className={styles.landingComponent } style={{overflowX: "hidden",}}>
        <LandingHeader 
          t={t} 
          lang={lang}
          clickAndScroll={clickAndScroll}
          setIsRegistrate={setIsRegistrate}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      <div className={styles.landing}>
       <SliderComponent t={t} lang={lang} />
        <MarketPlace  t={t} lang={lang} />

        <Presentation t={t} lang={lang} /> 
        <ContentSnippet 
          refId="section-1"
          t={t}
          content={OPPORTUNITIES}
          imgURL={"/Group-scan.png"}
          title={t("landing.opportunitiesTitle")}
        />
        <ContentSnippet 
          refId="section-2"
          t={t}
          content={BENEFITS}
          setIsActive={setIsActive }
         
          clickAndScroll={clickAndScroll}
          imgURL={lang === "en"?"/group-en-b.png": lang === "am"? "/group-am-b.png": lang === "ru"?"/group-ru-b.png": "/group-en-b.png"}
          title={t("landing.benefitsTitle")}  
        />
        <PriceList 
          t={t} 
          setIsRegistrate={setIsRegistrate}
        />
        <FrequentlyAskedQuestions t={t} />
        <PayXAwards t={t} /> 
        <Partners t={t} />

      </div>
        
        <LandingFooter t={t} />

    </div>
  )
};

export default memo(LandingPage);
