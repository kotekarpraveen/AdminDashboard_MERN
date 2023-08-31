import React from 'react'

import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined, ArrowDropDownOutlined } from '@mui/icons-material';

import {FlexBetween} from 'src/components/FlexBetween';
import { useDispatch } from 'react-redux';
import {setMode} from 'src/redux/Reducer/Slice/globalSlice';
import profileImage from 'src/assets/Avatar.png';
import { AppBar, Box, Button, IconButton, Input, Menu, MenuItem, Toolbar, Typography, useTheme } from '@mui/material';
import { useState } from 'react';

const Navbar = ({
    user,
    isSideBarOpen,
    setIsSideBarOpen
}) => {
    const theme = useTheme();
    const dispatch =useDispatch();

    const [anchorEl, setanchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);

    const handleClick = (event) => setanchorEl(event.currentTarget);
    const handleClose = () => setanchorEl(null);

   
  return (
   <AppBar
    sx={{
        position:"static",
        background:"none",
        boxShadow:"none"
    }}
   >
    <Toolbar sx={{justifyContent:"space-between"}}>
        {/* LEFT SIDE */}
        <FlexBetween >
            <IconButton onClick={()=>setIsSideBarOpen(!isSideBarOpen)}>
                <MenuIcon/>
            </IconButton>
            <FlexBetween
                backgroundColor={theme.palette.background.alt}
                borderRadius="9px"
                gap="3rem"
                p="0.1rem 1.5rem"
            >
                <Input placeholder="Search..."/>
                <IconButton>
                    <Search/>
                </IconButton>

            </FlexBetween>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
            <IconButton onClick={()=>dispatch(setMode())}>
                {theme.palette.mode === 'dark'? (
                    <DarkModeOutlined sx={{fontSize:"25px"}}/>
                ):
                    <LightModeOutlined  sx={{fontSize:"25px"}}/>
                }
            </IconButton>

            <IconButton>
                <SettingsOutlined sx={{fontSize:"25px"}}/>
            </IconButton>

            <FlexBetween>
                <Button 
                    onClick={handleClick}
                    sx={{display:"flex", justifyContent:"space-between", alignItems:"center", textTransform:"none", gap:"1rem"}}
                >
                    <Box
                        component="img"
                        alt="profile"
                        src={profileImage}
                        height="32px"
                        width="32px"
                        borderRadius="50%"
                        sx={{objectFit:"cover"}}                    
                    />

                        <Box textAlign="left">
                            <Typography 
                                fontWeight="bold" 
                                fontSize="0.85rem"
                                sx={{color:theme.palette.secondary[100]}}
                            >


                                {user.name}
                            </Typography>

                            <Typography 
                                fontWeight="bold" 
                                fontSize="0.75rem"
                                sx={{color:theme.palette.secondary[200]}}
                            >
                                {user.occupation}
                            </Typography>
                            </Box>
                            <ArrowDropDownOutlined
                                sx={{
                                    color:theme.palette.secondary[300], fontSize:"25px"
                                }}
                            />
                       
                </Button>
                <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose} anchorOrigin={{vertical:"bottom", horizontal:'center'}}>

                    <MenuItem onClick={handleClose}>
                        Logout
                    </MenuItem>
                </Menu>
            </FlexBetween>
        </FlexBetween>

    </Toolbar>
    </AppBar>
  )

}

export default Navbar