import { useState }  from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import { Dashboard } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Avatar, Input, TextField} from '@mui/material'
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import img from './Asset/logo 2.png'
import img1 from './Asset/ChartPieSlice-d.png'
import img2 from './Asset/Vector.png'
import img3 from './Asset/ChartPieSlice-d (1).png'
import img4 from './Asset/ChartPieSlice-d (2).png'
import img5 from './Asset/ChartPieSlice-dFFF.png'
import img6 from './Asset/Vector (1).png'
import img7 from './Asset/ChartPieSlice-black.png'
import img8 from './Asset/Notifications-On.png'
import img9 from './Asset/WhatsApp Image 2023-10-21 at 11.05.png'


const drawerWidth = 240;


function Sidebar(props) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuData, setmenuData] = useState(" ");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{backgroundColor:'#356E35', height:{md:'900px', sm:'1400px'}}}>
    <Box sx={{border:'1px solid gray', padding:'10px', justifyContent:'center', borderRadius:'10px', width:'155px', height:'100px', marginLeft:'30px', backgroundColor:'white', marginTop:'5px'}}><img src={img} alt=''/></Box>
    <Typography sx={{fontFamily:'Inter', fontSize:'14px', fontStyle:'normal', fontWeight:400, lineHeight:'20px', color:'white', padding:'10px'}}>eSolar Plant Monitoring System</Typography>
      <List>

      {/*------------------------------------------ Dashboard -----------------------------------------------------------*/}
      <Box sx={{width:'230px', height:'30px', borderTopRightRadius:'15px', gap:'10px', backgroundColor:'white'}}>
        <Box sx={{paddingLeft:'10px', paddingTop:'5px'}}><img src={img1} alt=''/></Box> 
        <Typography sx={{color:'#356E35', fontFamily:'Inter', fontSize:'12px', fontStyle:'normal', fontWeight:400, lineHeight:'20px', marginTop:'-25px', marginLeft:'50px'}}>Dashboard</Typography>
        <Box sx={{marginLeft:'180px', marginTop:'-25px'}}><img src={img2} alt=''/></Box> 
      </Box>

{/*------------------------------------------------------ Dashboard 1/2  ------------------------------------------------------*/}
      <Box sx={{width:'230px', height:'55px',backgroundColor:'#DFFFDF', borderBottomRightRadius:'15px'}}>
       <Box sx={{paddingTop:'5px', paddingLeft:'10px'}}><img src={img3} alt=''/></Box> 
       <Typography sx={{color:'#356E35', fontFamily:'Inter', fontSize:'12px', fontStyle:'normal', fontWeight:400, lineHeight:'20px', marginTop:'-25px', marginLeft:'50px'}}>Dashboard 1</Typography>
       <Box sx={{paddingTop:'5px', paddingLeft:'10px'}}><img src={img4} alt=''/></Box> 
       <Typography sx={{color:'#356E35', fontFamily:'Inter', fontSize:'12px', fontStyle:'normal', fontWeight:400, lineHeight:'20px', marginTop:'-25px', marginLeft:'50px'}}>Dashboard 2</Typography>
      </Box>

{/*------------------------------------------------- Analysis -----------------------------------------------------------*/}
      <Box sx={{width:'230px', height:'30px', padding:'4px, 20px, 4px, 20px', gap:'10px'}}>
        <Box sx={{paddingLeft:'10px', paddingTop:'5px'}}><img src={img5} alt=''/></Box> 
        <Typography sx={{color:'white', fontFamily:'Inter', fontSize:'12px', fontStyle:'normal', fontWeight:400, lineHeight:'20px', marginTop:'-25px', marginLeft:'50px'}}>Analysis</Typography>
        <Box sx={{marginLeft:'180px', marginTop:'-25px'}}><img src={img6}/></Box> 
      </Box>

      {/*------------------------------ PV Monitoring --------------------------------------------------*/}
      <Box sx={{width:'230px', height:'30px', padding:'4px, 20px, 4px, 20px', gap:'10px'}}>
        <Box sx={{paddingLeft:'10px', paddingTop:'5px'}}><img src={img5} alt=''/></Box> 
        <Typography sx={{color:'white', fontFamily:'Inter', fontSize:'12px', fontStyle:'normal', fontWeight:400, lineHeight:'20px', marginTop:'-25px', marginLeft:'50px'}}>PV Monitoring</Typography>
      </Box>

      {/*------------------------------ WMS --------------------------------------------------*/}
      <Box sx={{width:'230px', height:'30px', padding:'4px, 20px, 4px, 20px', gap:'10px'}}>
        <Box sx={{paddingLeft:'10px', paddingTop:'5px'}}><img src={img5} alt=''/></Box> 
        <Typography sx={{color:'white', fontFamily:'Inter', fontSize:'12px', fontStyle:'normal', fontWeight:400, lineHeight:'20px', marginTop:'-25px', marginLeft:'50px'}}>WMS</Typography>
      </Box>

      {/*------------------------------ Energy Reporting --------------------------------------------------*/}
      <Box sx={{width:'230px', height:'30px', padding:'4px, 20px, 4px, 20px', gap:'10px'}}>
        <Box sx={{paddingLeft:'10px', paddingTop:'5px'}}><img src={img5} alt=''/></Box> 
        <Typography sx={{color:'white', fontFamily:'Inter', fontSize:'12px', fontStyle:'normal', fontWeight:400, lineHeight:'20px', marginTop:'-25px', marginLeft:'50px'}}>Energy Reporting</Typography>
      </Box>

      {/*------------------------------ Event Log Reports--------------------------------------------------*/}
      <Box sx={{width:'230px', height:'30px', padding:'4px, 20px, 4px, 20px', gap:'10px'}}>
        <Box sx={{paddingLeft:'10px', paddingTop:'5px'}}><img src={img5} alt=''/></Box> 
        <Typography sx={{color:'white', fontFamily:'Inter', fontSize:'12px', fontStyle:'normal', fontWeight:400, lineHeight:'20px', marginTop:'-25px', marginLeft:'50px'}}>Event Log Reports</Typography>
      </Box>

      {/*------------------------------ Plant Total Power Curve --------------------------------------------------*/}
      <Box sx={{width:'230px', height:'30px', padding:'4px, 20px, 4px, 20px', gap:'10px'}}>
        <Box sx={{paddingLeft:'10px', paddingTop:'5px'}}><img src={img5} alt=''/></Box> 
        <Typography sx={{color:'white', fontFamily:'Inter', fontSize:'12px', fontStyle:'normal', fontWeight:400, lineHeight:'20px', marginTop:'-25px', marginLeft:'50px'}}>Plant Total Power Curve</Typography>
      </Box>

      {/*------------------------------ Outage --------------------------------------------------*/}
      <Box sx={{width:'230px', height:'30px', padding:'4px, 20px, 4px, 20px', gap:'10px'}}>
        <Box sx={{paddingLeft:'10px', paddingTop:'5px'}}><img src={img5} alt=''/></Box> 
        <Typography sx={{color:'white', fontFamily:'Inter', fontSize:'12px', fontStyle:'normal', fontWeight:400, lineHeight:'20px', marginTop:'-25px', marginLeft:'50px'}}>Outage</Typography>
      </Box>

      {/*------------------------------ User Details --------------------------------------------------*/}
      <Box sx={{width:'230px', height:'30px', padding:'4px, 20px, 4px, 20px', gap:'10px'}}>
        <Box sx={{paddingLeft:'10px', paddingTop:'5px'}}><img src={img5} alt=''/></Box> 
        <Typography sx={{color:'white', fontFamily:'Inter', fontSize:'12px', fontStyle:'normal', fontWeight:400, lineHeight:'20px', marginTop:'-25px', marginLeft:'50px'}}>User Details</Typography>
      </Box>

      {/*------------------------------ Logout --------------------------------------------------*/}
      <Box sx={{width:'230px', height:'30px', padding:'4px, 20px, 4px, 20px', gap:'10px'}}>
        <Box sx={{paddingLeft:'10px', paddingTop:'5px'}}><img src={img5} alt=''/></Box> 
        <Typography sx={{color:'white', fontFamily:'Inter', fontSize:'12px', fontStyle:'normal', fontWeight:400, lineHeight:'20px', marginTop:'-25px', marginLeft:'50px'}}>Logout</Typography>
      </Box>
     
      </List>
      

      <List>
      </List>
    </Box>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="absolute"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }, backgroundColor:'#F3F2F7'
        }} elevation={0}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{color:'black'}} />
          </IconButton>
           <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                 
              </Button>
            
          </Box>

 <Box sx={{border:'1px solid #F3F2F7', width:{md:'1140px', xs:'700px'}, height:'160px', marginLeft:{md:'-39px', xs:'-15px'}, justifyContent:'center'}}>

 {/*----------------------------------------- Frame-1 -----------------------------------------------------------------*/}
 <Box sx={{border:'1px solid #F3F2F7', width:'100%', height:'30px'}}>
  <Box>
    <img style={{padding:'5px'}} src={img7} alt=''/>
    <Typography sx={{color:'black', fontFamily:'Inter', fontSize:'16px', fontWeight:700, fontStyle:'normal', marginLeft:'30px', marginTop:'-35px'}}>Dashboard</Typography>
  </Box>

  <Box sx={{ marginLeft:'500px', width:'300px', height:'25px', marginTop:'-25px', display:{md:'flex', xs:'none'}, flexDirection:'row', gap:'10px'}}>
    <Typography sx={{color:'black', fontFamily:'Inter', fontSize:'12px', fontStyle:'normal', fontWeight:600, paddingTop:'2px'}}>Last log time : 21/10/2023</Typography>
    <Typography sx={{color:'black', fontFamily:'Inter', fontSize:'12px', fontStyle:'normal', fontWeight:600, paddingTop:'2px'}}>03:45 AM</Typography>
    <Typography sx={{color:'black', fontFamily:'Inter', fontSize:'12px', fontStyle:'normal', fontWeight:600, padding:'5px', border:'1px solid #F3F2F7', backgroundColor:'white', marginTop:'-2px'}}>00:00:00</Typography>
  </Box>

  <Box sx={{marginLeft:'900px', marginTop:'-25px', ml:{md:'none', xs:'80%'}}}><img src={img8}/> </Box>
 <Box sx={{marginLeft:'970px', marginTop:'-32px', width:'50px', height:'28px', ml:{md:'none', xs:'90%'}}}> <img style={{width:'50px', height:'25px'}} src={img}/> </Box>
 </Box>
 <Divider/>

{/*----------------------------------------- Frame-2 -----------------------------------------------------------------*/}
 <Box sx={{border:'1px solid #F3F2F7', width:'100%', height:'30px', backgroundColor:'#D4E2FF', display:'flex', flexDirection:'row', gap:'5px', position:'re'}}>
 <Typography sx={{color:'red', fontFamily:'Inter', fontSize:'12px', fontStyle:'normal', fontWeight:600, paddingTop:'2px', paddingLeft:'5px'}}>ms</Typography>
 <marquee style={{color:'#356E35', fontFamily:'Inter', fontSize:'12px', fontStyle:'normal', fontWeight:600, paddingTop:'2px', paddingLeft:'5px'}}>Industrial Energy Management System&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flow Meter & Ground Water Monitoring&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Smart Metering and DLMS Solution&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Industrial Energy Management System&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flow Meter & Ground Water Monitoring</marquee>
 </Box>

 {/*---------------------------------------- Frame-3 -------------------------------------------------------------------- */}
 <Box sx={{ width:'100%', height:'60px', display:'flex', flexDirection:'row', gap:'5px', paddingTop:'2px'}}>
 <Box sx={{border:'1px solid #F3F2F7',backgroundColor:'white', width:'340px', height:'60px'}}>
 <Typography sx={{color:'black', fontFamily:'Inter', fontSize:'12px', fontStyle:'normal', fontWeight:600, padding:'15px'}}>Gulati Oil India Pvt Ltd</Typography>
 <Typography sx={{color:'black', fontFamily:'Inter', fontSize:'12px', fontStyle:'normal', fontWeight:600, marginTop:'-12px', marginLeft:'15px'}}>Plant Capacity : 500.31 kWp</Typography>
 </Box>
 <Box sx={{border:'1px solid #F3F2F7',backgroundColor:'white', width:'340px', height:'60px'}}>
 <Typography sx={{color:'black', fontFamily:'Inter', fontSize:'12px', fontStyle:'normal', fontWeight:600, padding:'15px'}}>Plant Commissioned by</Typography>
 <Typography sx={{color:'black', fontFamily:'Inter', fontSize:'12px', fontStyle:'normal', fontWeight:600, marginTop:'-12px', marginLeft:'15px'}}>PV Tech Engineering</Typography>
 </Box>
 <Box sx={{border:'1px solid #F3F2F7', width:'340px', height:'60px'}}>
  <img src={img9}/>
 </Box>
 </Box>

 {/*--------------------------------------- Frame-4-------------------------------------------------------------------- */}
 <Divider style={{marginTop:'8px'}} />
 <Box sx={{ width:{md:'1040px', xs:'100%'}, height:'30px', gap:'5px', paddingTop:'-5px'}}>
 <Typography sx={{color:'black', fontFamily:'Inter', fontSize:'12px', fontStyle:'normal', fontWeight:400, paddingTop:'5px', paddingLeft:'15px'}}>Dashboard / Dashboard 1</Typography>
 <Box sx={{display:'flex', flexDirection:'row', ml:{md:'800px', xs:'70%'}, mt:'-22px'}}>
 <Typography sx={{ color: '#495057', fontSize: 12, fontFamily: 'Inter', fontWeight: '400',  borderLeft:'1px solid green', borderTop:'1px solid green',borderRight:'1px solid green', width:'60px', height:'30px', padding:'10px'}}>Tab 1</Typography>
 <Typography sx={{color:'#356E35', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', width:'60px', height:'30px', padding:'10px'}}>Tab 2</Typography>
 <Typography sx={{color:'#356E35', fontSize: 12, fontFamily: 'Inter', fontWeight: '400',  width:'60px', height:'30px', padding:'10px'}}>Tab 3</Typography>
 </Box>
 </Box>


 </Box>


        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Sidebar;