import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
import { use } from 'i18next';

export default function LangSelect({size, lang}) {
    const { i18n} = useTranslation();
    
    const changeLanguage = (str) => {
      localStorage.setItem("lang", str )
      i18n.changeLanguage(str)
    };


  return (
    <FormControl >
      <Select
        defaultValue={lang}
        sx={{minWidth: 70}} size="small"
        onChange={(e)=>changeLanguage(e.target.value)}
      >
      
        <MenuItem value={"am"} select>
          <img alt="" src="/am.png" style={{height:size,}} />
        </MenuItem>
        <MenuItem value={"en"} >
         <img alt="" src="/en.png" style={{height:size}} />
        </MenuItem>
        <MenuItem value={"ru"}>
          <img alt="" src="/ru.png" style={{height:size}} />
        </MenuItem>
      </Select>
    </FormControl>
  );
}