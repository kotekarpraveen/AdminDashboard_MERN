import React,{useState} from 'react'
import {Box, useMediaQuery} from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from 'src/components/Navbar/Navbar';
import Sidebar from 'src/components/Sidebar/Sidebar';

const Layout = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)")
    const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  return (
   <Box width="100%" height="100%">
        <Box display={isNonMobile?"flex":"block"} width="100%" height="100%">
            <Sidebar
                isNonMobile={isNonMobile}
                drawerWidth = "250px"
                isSideBarOpen={isSideBarOpen}
                setIsSideBarOpen={setIsSideBarOpen}
            />
            <Box>
                <Navbar
                     isSideBarOpen={isSideBarOpen}
                     setIsSideBarOpen={setIsSideBarOpen}
                />
                <Outlet/>
            </Box>
        </Box>

   </Box>
  )
}

export default Layout