import React, { memo } from "react";

import { motion } from "framer-motion";

import { Card } from "@mui/material";
import PriceListRow from "./priceListRow";

import styles from "./index.module.scss";

const tableAnimation = {
  hidden:{
    x: -100,
    opacity: 0
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {delay: custom * 0.8}
  })
 };

const PriceTable = ({t}) => {
  const priceTable = [
    {
      text: <p className={styles.prices_subtitle}>{t("landing.priceListSubTitle1")}</p>,
      price: <p className={styles.prices_subtitle}>{ t("landing.priceListSubTitle2")}*</p>,
    },
    {
      text: t("landing.priceListRow1"),
      price:  t("landing.priceListFree"),
    },
    {
      text: t("landing.priceListRow2"),
      price:  t("landing.priceListFree"),
    },
    {
      text: t("landing.priceListRow3"),
      price: `6000 ${t("units.amd")}`,
    },
    {
      text: t("landing.priceListRow4"),
      price:  t("landing.priceListUnlimit"),
    },
    {
      text: t("landing.priceListRow5"),
      price: t("landing.priceListUnlimit"),
    },
    {
      text: t("landing.priceListRow6"),
      price: `3000 ${t("units.amd")} **`,
    },
    {
      text: t("landing.priceListRow7"),
      price: `12 ${t("units.amd")}`,
    },
    {
      text: t("landing.priceListRow8"),
      price: `10 ${t("units.amd")}`,
    },
    {
      text: t("landing.priceListRow9"),
      price: `${t("landing.priceListFree")} ***`,
    },
  ];

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      variants={tableAnimation}  
      custom={1.2}
      className={styles.container}
    >
      <Card sx={{boxShadow:12}}>
        <div className={styles.prices} >
          {
           priceTable.map((item, i) => {
           return <PriceListRow {...item} key={i} />
           })
          }
        </div>
      </Card>
    </motion.div>
  )
};

export default memo(PriceTable);
