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
import PayXAwards from "./footer/awards";

const LandingPage = ({t, setIsRegistrate}) => {
  const navigate = useNavigate();

  const clickAndScroll = (arg) => {
    const element = document.getElementById(arg);
    element.scrollIntoView({ behavior: 'smooth' })
  };

  useEffect(() => {
    navigate("/")
  }, []);


  return (
    <div>
      <LandingHeader 
        t={t} 
        clickAndScroll={clickAndScroll}
        setIsRegistrate={setIsRegistrate}
      />
      <div className={styles.landing}>
        <Presentation t={t} /> 
        <ContentSnippet 
          refId="section-1"
          t={t}
          content={OPPORTUNITIES}
          imgURL={"/opportunity.png"}
          title={t("landing.opportunitiesTitle")}
        />
        <ContentSnippet 
          refId="section-2"
          t={t}
          content={BENEFITS}
          imgURL={"/benefits.png"}
          title={t("landing.benefitsTitle")}
        />
        <PriceList 
          t={t} 
          setIsRegistrate={setIsRegistrate}
        />
        <FrequentlyAskedQuestions t={t}/>
      </div>
        {/* <PayXAwards t={t}/> */}
        <LandingFooter />
    </div>
  )
};

export default memo(LandingPage);
