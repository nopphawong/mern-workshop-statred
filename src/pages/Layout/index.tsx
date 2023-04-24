import { Box, Toolbar } from '@mui/material'
import { useState } from 'react'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from '@/components/Footer'

const drawerWidth: number = 240

const Layout = () => {
  const [open, setOpen] = useState(true)
  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Header
        drawerWidth={drawerWidth}
        open={open}
        toggleDrawer={toggleDrawer}
      />
      <Sidebar
        drawerWidth={drawerWidth}
        open={open}
        toggleDrawer={toggleDrawer}
      />
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <Box
        component='main'
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
      <Footer />
      </div>
    
    </Box>
  )
}

export default Layout
