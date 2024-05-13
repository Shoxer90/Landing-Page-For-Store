import React, { useState } from 'react';
import { memo } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

import { useTranslation } from 'react-i18next';
import LangSelect from '../../../Container2/langSelect';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import { linkedNames } from '../../LandingTextData';
import LinkedMenuTitles from '../LinkedMenuTitles';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    {...props}
  />
  ))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 2,
    marginTop: theme.spacing(3),
    minWidth: 180,

    color:
    theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    LinkShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 4,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(20),
      },
      '&:active': {
        position: "none",
        backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const LandingBurgerWrapper = ({ lang, isActive,setIsActive, clickAndScroll}) => {
  const {t} = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <div>
      <Button
        variant="text"
        style={{
          color: "#383838",
          display:"flex",
          flexDirection:"column"
        }}
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
      >
        <MenuIcon fontSize="large" />
        {/* <span style={{fontSize:"80%"}}>{t("menuburger.title")}</span> */}
      </Button>
      <StyledMenu
        anchorEl={anchorEl}
        PaperProps={{  
          style: {  
            margin:0,
            right:0,
            letterSpace:"5px",
            textDecoration:"none"
          },  
       }} 
        open={open}
        onClose={() => setAnchorEl(null)}
      >
      {
        window.innerWidth < 721 && linkedNames && linkedNames.map((item) => (
          <MenuItem fontSize="small" onClick={() => setAnchorEl(null)} >
            <LinkedMenuTitles
              {...item}
              isActive={isActive}
              setIsActive={setIsActive}
              clickAndScroll={clickAndScroll}
              t={t}
            />
          </MenuItem>
        )) 
      }

          {/* <a style={{display:'flex',textDecoration:"none",color:"black",alignItems:"center",textAlign:"center"}} href="http://localhost:3001/registration"> */}
          <a style={{display:'flex',textDecoration:"none"}} href="https://storex.payx.am/registration">
            <HowToRegIcon style={{marginLeft:"25px", alignSelf:"center"}}/>
            <MenuItem fontSize="medium" style={{padding:"2px"}} onClick={() => setAnchorEl(null)}>
              { t("authorize.registration").toUpperCase()}
            </MenuItem>
          </a>
            
          {/* <a style={{display:'flex',textDecoration:"none",color:"black",alignItems:"center"}} href="http://localhost:3001/login"> */}
          <a style={{display:'flex',textDecoration:"none"}} href="https://storex.payx.am/login">
            <LoginIcon style={{marginLeft:"25px", alignSelf:"center"}} />
            <MenuItem fontSize="medium" style={{padding:"2px"}} onClick={() => setAnchorEl(null)}>
              { t("authorize.login").toUpperCase()}
            </MenuItem>
          </a> 
          <MenuItem onClick={() => setAnchorEl(null)}>
           {lang &&<LangSelect size={"22px"} lang={lang}/>}
          </MenuItem>
      </StyledMenu>
    </div>
  );
}

export default memo(LandingBurgerWrapper);
