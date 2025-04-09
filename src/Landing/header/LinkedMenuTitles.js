import React, { memo } from 'react';

import styles from "./index.module.scss";

const LinkedMenuTitles = ({name,id,isActive,setIsActive,clickAndScroll,t}) => {
  return (
    <a 
        className={isActive === id ? styles.header_links_item_active: styles.header_links_item}  
        href={`#/${name}`}
        onClick={()=>{
        setIsActive(id)
        clickAndScroll(`section-${id}`)
        }}
    >
        {t(`landing.${name}`)}
  </a>
  )
}

export default memo(LinkedMenuTitles);
