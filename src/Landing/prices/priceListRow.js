import React from 'react';
import styles from "./index.module.scss";
import { Divider } from '@mui/material';

const PriceListRow = ({text, price}) => {
  return (
    <>
      <div className={styles.priceList_row}>
        <div style={{textAlign:"start", width:"75%"}}>{text}</div>
        <div>{price}</div>
      </div>
      <Divider color="#e58721" sx={{borderBottomWidth:2}} />
    </>
  )
}

export default PriceListRow;
