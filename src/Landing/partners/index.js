import React, { memo } from "react";
import { PARTNERS } from "./data";
import PartnersItem from "./PartnersItem";
import AliceCarousel from "react-alice-carousel";
import { MPageTitle } from "../title";
import { motion } from "framer-motion";
import { Divider } from "@mui/material";

const Partners = ({t}) => {

  const titleAnimation = {
    hidden:{
      y: -100,
      opacity: 0
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: {delay: custom * 0.8}
    })
  };

  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 5 },
};


    return(
      <div >
       <motion.div 
          id="section-3"
          initial="hidden"
          whileInView="visible"
          style={{paddingTop:"90px"}}
        > 
          <MPageTitle variants={titleAnimation} custom={1} title={t("landing.partnersTitle")} />
          <Divider color="black" sx={{m:2}} />
        </motion.div>

        <AliceCarousel 
          autoPlay 
          infinite
          autoPlayInterval={1000}
          animationDuration={800}
          disableButtonsControls
          responsive={responsive}
        >
          
          {PARTNERS && PARTNERS.map((partner) => (
            <PartnersItem 
              key={partner?.id}
              name={partner?.name}
              img={partner?.img}
            />
          ))}
        </AliceCarousel>
      </div>
    )
};

export default memo(Partners);
