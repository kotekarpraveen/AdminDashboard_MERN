
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';


import './App.css'
import { useSelector } from 'react-redux'
import { useMemo } from 'react';
import { themeSettings } from 'src/theme';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard  from 'src/scenes/Dashboard/dashboard';
import Layout from 'src/scenes/Layout/Layout';

function App() {

  const mode = useSelector((state) => state.global.mode);
  const  theme = useMemo(()=>createTheme(themeSettings(mode)),[mode]);
      
  return (
    <>
     <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Routes>
            <Route element={<Layout/>}>
              <Route path='/' element={<Navigate to ="/dashboard" replace/>}/>
              <Route path='/dashboard' element={<Dashboard/>} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
