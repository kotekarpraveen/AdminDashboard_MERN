import React,{useState} from 'react'
import {Box, useMediaQuery} from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from 'src/components/Navbar/Navbar';
import Sidebar from 'src/components/Sidebar/Sidebar';
import { useGetUserQuery } from 'src/redux/Reducer/Api/userApi';

const Layout = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)")
    const [isSideBarOpen, setIsSideBarOpen] = useState(true);
    const userId = useSelector((state)=> state.global.userId);

    const {data, isLoading, isSuccess} = useGetUserQuery(userId);
    console.log("🚀 ~ file: Layout.jsx:15 ~ Layout ~ data:", data)
   
  return (
   <Box width="100%" height="100%">
        <Box display={isNonMobile?"flex":"block"} width="100%" height="100%">
            <Sidebar
                user ={data ||{}}
                isNonMobile={isNonMobile}
                drawerWidth = "250px"
                isSideBarOpen={isSideBarOpen}
                setIsSideBarOpen={setIsSideBarOpen}
            />
            <Box flexGrow={1}>
                <Navbar
                    user ={data ||{}}
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