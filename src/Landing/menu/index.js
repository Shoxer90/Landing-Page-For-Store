// import { Box, Button, Menu, MenuItem, alpha } from '@mui/material';
// import React from 'react';
// import styled from 'styled-components';
// import Flags from '../../Container2/language/Flags';
// import { useNavigate } from 'react-router-dom';

// const StyledMenu = styled((props) => (
//   <Menu
//     elevation={0}
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'right',
//     }}
//     {...props}
//   />
// ))(({ theme }) => ({
//   '& .MuiPaper-root': {
//     borderRadius: 6,
//     marginTop: theme.spacing(3),
//     minWidth: 180,
//     color:
//     theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
//     boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
//     '& .MuiMenu-list': {
//       padding: '4px 0',
//     },
//     '& .MuiMenuItem-root': {
//       '& .MuiSvgIcon-root': {
//         fontSize: 4,
//         color: theme.palette.text.secondary,
//         marginRight: theme.spacing(20),
//       },
//       '&:active': {
//         position: "none",
//         backgroundColor: alpha(
//         theme.palette.primary.main,
//         theme.palette.action.selectedOpacity,
//         ),
//       },
//     },
//   },
// }));

// const LandingMenuBurger = () => {
//  const navigate=useNavigate();

//   return (
//     <div>
//       <Button
//         variant="text"
//         style={{
//           color: "#383838",
//           display:"flex",
//           flexDirection:"column"
//         }}
//         onClick={(event) => {
//           setAnchorEl(event.currentTarget);
//         }}
//       >
//         <MenuIcon fontSize="large" />
//         <p className={styles.routeName}>{t("menuburger.title")}</p>
//       </Button>
//       <StyledMenu
//         anchorEl={anchorEl}
//         PaperProps={{  
//           style: {  
//             width: 270,  
//           },  
//        }} 
//         open={open}
//         onClose={() => setAnchorEl(null)}
//         style={{minWidth:"300px"}}
//       >
//           <Box style={{display:'flex'}}>
//            {/* <AccountCircleIcon style={{marginLeft:"25px",marginTop:"6px"}}/> */}
//             <MenuItem 
//               fontSize="medium"
//               onClick={() => {
//                 navigate("/setting")
//                 setAnchorEl(null)
//               }}
//             >
//               <h5>{t("menuburger.setting")}</h5>
//             </MenuItem>
//           </Box>
//         <Box style={{display:'flex'}}>
//           <QuestionAnswerIcon style={{marginLeft:"25px",marginTop:"6px"}}/>
//           <MenuItem fontSize="medium"
//             onClick={() => {
//               navigate("/feedback")
//               setAnchorEl(null)
//             }}
//           >
//            <h5>{t("menuburger.feedback")}</h5>
//           </MenuItem>
//         </Box>
//         <Flags />
//           <MenuItem style={{}} onClick={navigate("/login")} disableRipple>
//             <h5>{t("authorize.login")}</h5> 
//           </MenuItem>
//       </StyledMenu>
//     </div>
//   )
// }

// export default LandingMenuBurger;

