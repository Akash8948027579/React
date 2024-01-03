import React from 'react'
import img from './Asset/solar-panel-close.png'
import img1 from './Asset/logo 2.png'
import img2 from './Asset/google-play-store.png'
import img3 from './Asset/lin.png'
import img4 from './Asset/Ellipse 2132.png'
import img5 from './Asset/Ellipse 2134.png'
import img6 from './Asset/Ellipse 2135.png'
import img7 from './Asset/Ellipse 2133.png'
import img8 from './Asset/Vector (2).png'
import img9 from './Asset/Vector (3).png'
import img10 from './Asset/Vector (4).png'
import img11 from './Asset/Vector (5).png'

import { Avatar, Box, Button, List, ListItem, ListItemText, TextField, Typography } from '@mui/material'

const Login = () => {
    return (
        <Box >
            <Box sx={{ width: '100%', height: '100%', position:'fixed', mt:'-60px' }}> <img width={'100%'} height={'100%'} src={img} alt='' /> </Box>
            <Box sx={{ width: { md: '1150px', xs: '550px' }, height: '700px', border: { md: '2px solid white', xs: 'none' }, borderRadius: '10px',ml:{lg:'80px', md:'10px', sm:'132px', xs:'15px'}, mt:'60px', position: 'relative', display: 'flex', flexDirection: { md: 'row', xs: 'column' },justifyContent:{md:'space-around', xs:'space-between'}, gap: '10px' }}>
                <Box sx={{ width: '400px', height: '550px', borderRadius: '20px', backgroundColor: 'white', padding: '50px', ml: { md: '15px', xs: '15px' }, mt: '10px', }}>
                    <Box sx={{ width: '380px', height: '115px', gap: '24px' }}>
                        <Box ><img width={'84px'} height={'50px'} src={img1} alt='' /></Box>
                        <Typography sx={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '30px', textAlign: 'right', mt: '-60px' }}>Hey, <br /> Welcome Back!</Typography>
                        <Typography sx={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '16px', textAlign: 'right', mt: '0px', color: '#7E8B9E' }}>We are very happy to see you back!</Typography>
                    </Box>

                    {/*-------------------------------------------- Login page  -------------------------------------------------------------*/}
                    <Box sx={{ width: '380px', height: '400px', gap: '24px', mt: '0px', ml: '0px' }}>
                        <Box>
                            <Typography sx={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '16px', color: 'black' }}>Email</Typography>
                            <Box sx={{ height: '30px' }}><TextField sx={{ width: '380px' }} placeholder='commitcommunity@gmail.com' /></Box>
                        </Box>

                        <Box>
                            <Typography sx={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '16px', color: 'black', mt: '35px' }}>Password</Typography>
                            <Box sx={{ height: '30px' }}><TextField sx={{ width: '380px' }} placeholder='password' /></Box>
                        </Box>

                        <Button sx={{ width: '380px', height: '40px', color: 'white', backgroundColor: '#003399', mt: '45px' }}><Typography>Login</Typography></Button>
                        {/*---------------------------------- Linkedin/Play store ------------------------------------------------------- */}
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '25px', mt: '30px', ml: '80px' }}>
                            <Box>
                                <Typography sx={{ color: '#7E8B9E', fontSize: '12px', fontFamily: 'Inter', fontWeight: 700, paddingLeft: '15px' }}>Download App</Typography>
                                <img src={img2} />
                            </Box>
                            <Box>
                                <Typography sx={{ color: '#7E8B9E', fontSize: '12px', fontFamily: 'Inter', fontWeight: 700, paddingLeft: '0px' }}>Follow us on</Typography>
                                <img src={img3} />
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2px', justifyContent: 'center', mt: '30px' }}>
                            <Typography sx={{ color: '#7E8B9E', fontSize: '12px', fontFamily: 'Inter', fontWeight: 500 }}>Copyright © 2017</Typography>
                            <Typography sx={{ color: '#3568FF', fontSize: '12px', fontFamily: 'Inter', fontWeight: 500 }}> Logics PowerAMR [P] Ltd.</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2px', justifyContent: 'center', mt: '25px' }}>
                            <Typography sx={{ color: '#7E8B9E', fontSize: '12px', fontFamily: 'Inter', fontWeight: 500 }}>Visit Our Entire Portfolio ©</Typography>
                            <Typography sx={{ color: '#3568FF', fontSize: '12px', fontFamily: 'Inter', fontWeight: 500 }}> www.poweramr.in</Typography>
                        </Box>

                    </Box>
                </Box>



                {/*---------------------------------------- Second box  ------------------------------------------------------*/}
                <Box sx={{ width: '500px', height: '550px', borderRadius: '20px', paddingTop: '20px', ml: { md: '60px', xs: '15px' }, mt: { md: '10px', xs: '70px' } }}>

                    {/*------------------------------------------ Group:1 --------------------------------------------------------------------------*/}
                    <Box sx={{ width: '100%', height: '80px', borderRadius: '15px', backgroundColor: 'white', border: '1px solid #003399' }}>
                        <Typography sx={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '30px', textAlign: 'center', color: '#003399' }}>Most Advanced Platform</Typography>
                        <Typography sx={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '20px', textAlign: 'center', color: '#003399' }}>for Solar Plant Management & Control</Typography>
                    </Box>

                    {/*------------------------------------------ Group: 2 -------------------------------------------------------------------*/}
                    <Box sx={{ width: '100%', height: '400px', marginTop: '100px' }}>
                        <Box sx={{ width: '250px', height: '200px', ml: '120px', mt: '150px' }}>

                            {/*------------------------------- Ellipse 1 ------------------------------------------------------------------------*/}
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Box><img src={img4} alt='' />
                                </Box>
                                <Box><img src={img5} alt='' /></Box>

                                {/*------------------------------------- Text -----------------------------------------------------*/}
                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '30px', ml: '-224px', mt: '60px' }}>
                                    <Typography sx={{ color: 'white', fontSize: '14px', fontFamily: 'Inter', fontWeight: 600 }}>Engagement</Typography>
                                    <Typography sx={{ color: 'white', fontSize: '14px', fontFamily: 'Inter', fontWeight: 600 }}>Solution</Typography>
                                </Box>

                                {/*------------------------------------------- Icons  --------------------------------------------------------*/}
                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '30px', mt: '100px', ml: '-110px' }}>
                                    <img width={'15px'} height={'15px'} src={img8} alt='' />
                                    <img width={'15px'} height={'15px'} src={img9} alt='' />
                                </Box>
                            </Box>


                            {/*------------------------------- Ellipse 2 ------------------------------------------------------------------------*/}
                            <Box sx={{ display: 'flex', flexDirection: 'row', mt: '-3px' }}>
                                <Box><img src={img6} alt='' /></Box>
                                <Box><img src={img7} alt='' /></Box>

                                {/*------------------------------------- Text -----------------------------------------------------*/}
                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '30px', ml: '-205px', mt: '30px' }}>
                                    <Typography sx={{ color: 'white', fontSize: '14px', fontFamily: 'Inter', fontWeight: 600 }}>Features</Typography>
                                    <Typography sx={{ color: 'white', fontSize: '14px', fontFamily: 'Inter', fontWeight: 600 }}>Compatibility</Typography>
                                </Box>

                                {/*------------------------------------------- Icons  --------------------------------------------------------*/}
                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '30px', mt: '15px', ml: '-135px' }}>
                                    <img width={'15px'} height={'15px'} src={img10} alt='' />
                                    <img width={'15px'} height={'15px'} src={img11} alt='' />
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '45px', mt: '-320px' }}>
                            <Box sx={{ width: '270px', height: '160px', ml: '0px', mt: '0px', backgroundColor: 'white', border: '1px solid blue', borderRadius: '10px' }}>
                                <Typography sx={{ width: '100%', color: '#003399', fontSize: 12, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word', padding: '10px' }}>Cloud & Local Dashboard Solution<br />Comprehensive MobileApp<br />Alerts & notifications thru Email & SMS<br />Progressive web application to support mobile, tab, laptop, view<br />Global Integration with third part platform & API</Typography>
                            </Box>
                            <Box sx={{ width: '270px', height: '160px', ml: '0px', mt: '0px', backgroundColor: 'white', border: '1px solid blue', borderRadius: '10px' }}>
                                <Typography sx={{ width: '100%', color: '#003399', fontSize: 12, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word', padding: '10px' }}>Solar PV Monitoring<br />DG PV Controller<br />Zero Export<br />Weather Sensors<br />Smart Data Loggers - WiFi, LAN, 4G, wireless for sites with no/limited network<br />Advanced Analytics</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '45px', mt: '150px' }}>
                            <Box sx={{ width: '270px', height: '160px', ml: '0px', mt: '0px', backgroundColor: 'white', border: '1px solid blue', borderRadius: '10px', padding: '5px' }}>
                                <Typography sx={{ width: '100%', color: '#003399', fontSize: 12, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>Centralized Platform helps eliminate dependency of OEM monitoring tool<br />Local data storage and upload to portal in case of network failure<br />Support Company Branding<br />Web Portal customization<br />Data driven O&M</Typography>
                            </Box>
                            <Box sx={{ width: '270px', height: '160px', ml: '0px', mt: '0px', backgroundColor: 'white', border: '1px solid blue', borderRadius: '10px', padding: '5px' }}>
                                <Typography sx={{ width: '100%', color: '#003399', fontSize: 12, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>Support Rooftop & ground mounted projects<br />Plug and play with any inverter, energy meter, SMB, switchgear<br />Suitable for any capacity, any no of inverters, DG<br />Scalable Architecture</Typography>
                            </Box>
                        </Box>


                    </Box>
                </Box>

            </Box>
            <Box sx={{ border: '1px solid #F3F2F7', width: '85%', height: '40px', backgroundColor: 'white', ml: '6%', mt: { md: '30px', xs: '650px' }, display:'flex', flexDirection: 'row', gap: '5px', position: 'relative', borderRadius: '15px' }}>
                <Typography sx={{ color: 'red', fontFamily: 'Inter', fontSize: '12px', fontStyle: 'normal', fontWeight: 600, paddingTop: '10px', paddingLeft: '5px' }}>ms</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row',  }}>
                <marquee style={{ color: '#003399', fontFamily: 'Inter', fontSize: '12px', fontStyle: 'normal', fontWeight: 600, paddingTop: '15px', paddingLeft: '10px' }}>are all in one Controller | Logics PowerAMR reaches to 10+ countries across the globe | Logics PowerAMR introduces LoRa based communication system | Logics PowerAMR reaches to 10+ countries</marquee>
                </Box>
            </Box>

            <Box sx={{ border: '1px solid #F3F2F7', width: '99%',ml:{md:'0px', xs:'0px'}, height: '50px', backgroundColor: 'white', mt: '30px', display:'flex', flexDirection: 'row', gap: '5px', position: 'relative', borderRadius: '0px' }}>
                <Box sx={{ backgroundColor: '#003399', padding: '5px', width:{md:'120px', xs:'170px'}, display:'absolute' }}>
                    <Typography sx={{ color: 'white', fontFamily: 'Inter', fontSize: '14px', fontWeight: 600, paddingTop: '0px', paddingLeft: '0px' }}>Power AMR in</Typography>
                    <Typography sx={{ color: 'white', fontFamily: 'Inter', fontSize: '32px', fontWeight: 600, paddingTop: '0px', paddingLeft: '0px', mt: '-15px' }}>NEWS</Typography>
                </Box>
                <Box >
                    <marquee style={{ color: '#003399', fontFamily: 'Inter', fontSize: '12px', fontStyle: 'normal', fontWeight: 600, paddingTop: '15px', paddingLeft: '10px' }}>are all in one Controller | Logics PowerAMR reaches to 10+ countries across the globe | Logics PowerAMR introduces LoRa based communication system | Logics PowerAMR reaches to 10+ countries</marquee>
                </Box>
            </Box>


        </Box>
    )
}

export default Login
