import { Box, Typography } from '@mui/material'
import React from 'react'
import Sidebar from './Sidebar'
import img from './Asset/Calender-Date.png'
import img1 from './Asset/Cloud.png'
import img2 from './Asset/Themomether.png'
import img3 from './Asset/Droplet.png'
import img4 from './Asset/Refresh.png'
import img5 from './Asset/Settings.png'
import img6 from './Asset/Ellipse 2141.png'
import img7 from './Asset/Ellipse 2142.png'
import img8 from './Asset/Ellipse 2143.png'
import img9 from './Asset/Ellipse 2144.png'
import img10 from './Asset/Ellipse 2145.png'
import img11 from './Asset/Group 1171275068.png'
import img12 from './Asset/Calender.png'
import img13 from './Asset/Expand.png'



const Dashboard = () => {
    return (
        <Box>

            {/*------------------------------------------ Sidebar and Appbar  --------------------------------------------------*/}
            <Sidebar />

            {/*-------------------------------------------- Main Content -------------------------------------------------------*/}
            <Box sx={{ Width: {md:'1100px', xs:'500px'}, height: '100%', mt: '50px', ml: { sm: '290px', xs: '30px' }, gap: '3px' }}>
                <Box sx={{ width: {md:'1058px', xs:'700px'}, height: '30px', backgroundColor: 'white', display: {md:'flex', xs:'none'}, flexDirection: 'row', gap: '25px' }}>
                    <Box sx={{ width: '256px', height: '24px', backgroundColor: 'white', ml: '10px', marginTop: '5px', display: 'flex', flexDirection: 'row' }}>
                        <img style={{ marginLeft: '5px' }} src={img} />
                        <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, lineHeight: 18, marginTop: '-95px', marginLeft: '3px' }}>10 : 27 AM  Saturday, October 21, 2023</Typography>
                    </Box>

                    <Box sx={{ width: '140px', height: '24px', backgroundColor: 'white', ml: '10px', marginTop: '5px', display: 'flex', flexDirection: 'row' }}>
                        <img style={{ marginLeft: '5px' }} src={img1} />
                        <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, lineHeight: 18, marginTop: '-95px', marginLeft: '3px' }}>Current Weather</Typography>
                    </Box>

                    <Box sx={{ width: '220px', height: '24px', backgroundColor: 'white', ml: '10px', marginTop: '5px', display: 'flex', flexDirection: 'row' }}>
                        <img style={{ marginLeft: '5px' }} src={img2} />
                        <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, lineHeight: 18, marginTop: '-95px', marginLeft: '3px' }}>Today’s AVG PR : 21 Oct 2023</Typography>
                    </Box>

                    <Box sx={{ width: '160px', height: '24px', backgroundColor: 'white', ml: '10px', marginTop: '5px', display: 'flex', flexDirection: 'row' }}>
                        <img style={{ marginLeft: '5px' }} src={img2} />
                        <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, lineHeight: 18, marginTop: '-95px', marginLeft: '3px' }}>Temperature : 25.4C</Typography>
                    </Box>

                    <Box sx={{ width: '130px', height: '24px', backgroundColor: 'white', ml: '10px', marginTop: '5px', display: 'flex', flexDirection: 'row' }}>
                        <img style={{ marginLeft: '5px' }} src={img3} />
                        <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, lineHeight: 18, marginTop: '-95px', marginLeft: '3px' }}>Humidity : 36%</Typography>
                    </Box>

                </Box>

                <Box sx={{ width: {md:'1058px', xs:'400px'}, height: '300px', marginTop: '3px', display: 'flex', flexDirection: {md:'row', xs:'column'}, gap: '3px', ml:{md:'0px', xs:'25px'} }}>
                    <Box sx={{ width: '300px', height: '300px' }}>
                        <Box sx={{ width: '300px', height: '30px', border: '1px solid #F3F2F7', backgroundColor: 'white' }}>
                            <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, lineHeight: 18, marginTop: '-95px', marginLeft: '5px' }}>Total Instant Power [KW]</Typography>
                            <Box sx={{ gap: '15px', display: 'flex', flexDirection: 'row', marginTop: '-117px', marginLeft: '220px' }}>
                                <img src={img4} />
                                <img src={img5} />
                            </Box>
                        </Box>

                        {/*-------------------------------------------------- Left Box ----------------------------------------------------------*/}
                        <Box sx={{ width: '300px', height: '267px', backgroundColor: 'white', marginTop: '3px' }}>
                            <Box sx={{ width: '280px', height: '15px', marginLeft: '10px', marginTop: '2px', display: 'flex', paddingTop: '10px', flexDirection: 'row', gap: '8px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '3px' }}>
                                    <img width={'15px'} height={'15px'} src={img6} />
                                    <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Roboto', fontWeight: 400 }}>INV-1</Typography>
                                </Box>

                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '3px' }}>
                                    <img width={'15px'} height={'15px'} src={img7} />
                                    <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Roboto', fontWeight: 400 }}>INV-2</Typography>
                                </Box>

                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '3px' }}>
                                    <img width={'15px'} height={'15px'} src={img8} />
                                    <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Roboto', fontWeight: 400 }}>INV-3</Typography>
                                </Box>

                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '3px' }}>
                                    <img width={'15px'} height={'15px'} src={img9} />
                                    <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Roboto', fontWeight: 400 }}>INV-4</Typography>
                                </Box>

                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '3px' }}>
                                    <img width={'15px'} height={'15px'} src={img10} />
                                    <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Roboto', fontWeight: 400 }}>INV-5</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ width: '240px', height: '170px', marginLeft: '45px', marginTop: '5px', paddingTop: '20px' }}>
                                <Box sx={{ paddingLeft: '50px', paddingTop: '10px' }}> <img src={img11} />
                                    <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Roboto', fontWeight: 400, marginTop: '-160px' }}>Gen Set: 0.0</Typography>
                                    <Typography sx={{ color: '#E3573A', fontSize: '12px', fontFamily: 'Roboto', fontWeight: 400, marginTop: '-15px', marginLeft: '110px' }}>Solar: 237.0</Typography>
                                    <Typography sx={{ color: '#5D2976', fontSize: '12px', fontFamily: 'Roboto', fontWeight: 400, marginTop: '135px', marginLeft: '60px' }}>Load: 727.0</Typography>
                                    <Typography sx={{ color: '#237D29', fontSize: '12px', fontFamily: 'Roboto', fontWeight: 400, marginTop: '-80px', marginLeft: '-70px' }}>Grid: 490.0</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/*------------------------------------ Right Box  -------------------------------------------------------------------*/}
                    <Box sx={{ width: {md:'797px', xs:'750px'}, height: '290px',  mt:'3px' }}>
                        <Box sx={{ width: '752px', height: '30px', border: '1px solid #F3F2F7', backgroundColor: 'white' }}>
                            <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>Inverter Wise Capacity [KWp]</Typography>
                            <Box sx={{ height: '25px', marginTop: '-20px', marginLeft: '230px', width: '300px', display: 'flex', flexDirection: 'row', gap: '5px' }}>
                                <img width={'20px'} height={'18px'} src={img12} />
                                <Typography sx={{ border: '0.5px solid gray', color: 'black', fontFamily: 'Inter', fontWeight: 600, width: '80px', height: '20px', fontSize: '12px', marginTop: '0px' }}>12/Oct/2023</Typography>
                                <Typography sx={{ color: 'black', fontFamily: 'Inter', fontWeight: 600, width: '20px', fontSize: '12px', mt: '0px' }}>to</Typography>
                                <Typography sx={{ border: '0.5px solid gray', color: 'black', fontFamily: 'Inter', fontWeight: 600, width: '80px', height: '20px', fontSize: '12px', mt: '0px' }}>21/Oct/2023</Typography>
                                <img width={'15px'} height={'15px'} src={img4} />
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', ml: '670px', mt: '-25px' }}>
                                <img width={'24px'} height={'24px'} src={img13} />
                                <img width={'18px'} height={'18px'} style={{ marginTop: '2px' }} src={img5} />
                            </Box>
                        </Box>

                        <Box sx={{ width: '752px', height: '265px', backgroundColor: 'white', marginTop: '2px', display: 'flex', paddingTop: '10px', flexDirection: 'column', gap: '20px' }}>

                            {/*-------------------------------------------------- Content with lines --------------------------------------------------------------*/}
                            <Box sx={{ width: '550px', height: '10px', mt: '10px', ml: '30px', display: 'flex', flexDirection: 'row', gap: '40px' }}>
                                <Typography sx={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '12px', color: 'black' }}>2,000</Typography>
                                <Box sx={{ border: '1px solid #699BFF', width: '600px', height: '0px', mt: '8px' }} />
                            </Box>

                            <Box sx={{ width: '550px', height: '10px', mt: '10px', ml: '30px', display: 'flex', flexDirection: 'row', gap: '40px' }}>
                                <Typography sx={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '12px', color: 'black' }}>1,500</Typography>
                                <Box sx={{ border: '1px solid #699BFF', width: '600px', height: '0px', mt: '8px' }} />
                            </Box>

                            <Box sx={{ width: '550px', height: '10px', mt: '10px', ml: '30px', display: 'flex', flexDirection: 'row', gap: '40px' }}>
                                <Typography sx={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '12px', color: 'black' }}>1,000</Typography>
                                <Box sx={{ border: '1px solid #699BFF', width: '600px', height: '0px', mt: '8px' }} />
                            </Box>

                            <Box sx={{ width: '550px', height: '10px', mt: '10px', ml: '30px', display: 'flex', flexDirection: 'row', gap: '40px' }}>
                                <Typography sx={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '12px', color: 'black' }}>500</Typography>
                                <Box sx={{ border: '1px solid #699BFF', width: '680px', height: '0px', mt: '8px', ml: '10px' }} />
                            </Box>

                            <Box sx={{ width: '550px', height: '10px', mt: '10px', ml: '30px', display: 'flex', flexDirection: 'row', gap: '40px' }}>
                                <Typography sx={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '12px', color: 'black' }}>0</Typography>
                                <Box sx={{ border: '1px solid #699BFF', width: '580px', height: '0px', mt: '8px', ml: '23px' }} />
                            </Box>

                            {/*--------------------------------------------------- Graph ------------------------------------------------------------*/}
                            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
                                <Box sx={{ width: '30px', height: '160px', backgroundColor: '#356E35', ml: '110px', mt: '-180px' }} />
                                <Box sx={{ width: '30px', height: '130px', backgroundColor: '#356E35', ml: '0px', mt: '-150px' }} />
                                <Box sx={{ width: '30px', height: '100px', backgroundColor: '#356E35', ml: '0px', mt: '-120px' }} />
                                <Box sx={{ width: '30px', height: '150px', backgroundColor: '#356E35', ml: '0px', mt: '-170px' }} />
                                <Box sx={{ width: '30px', height: '110px', backgroundColor: '#356E35', ml: '0px', mt: '-130px' }} />
                                <Box sx={{ width: '30px', height: '80px', backgroundColor: '#356E35', ml: '0px', mt: '-100px' }} />
                                <Box sx={{ width: '30px', height: '150px', backgroundColor: '#356E35', ml: '0px', mt: '-170px' }} />
                                <Box sx={{ width: '30px', height: '130px', backgroundColor: '#356E35', ml: '0px', mt: '-150px' }} />
                                <Box sx={{ width: '30px', height: '160px', backgroundColor: '#356E35', ml: '0px', mt: '-180px' }} />
                                <Box sx={{ width: '30px', height: '150px', backgroundColor: '#356E35', ml: '0px', mt: '-170px' }} />
                            </Box>

                            <Box sx={{ width: '400px', height: '20px', mt: '-30px', ml: '150px', display: 'flex', flexDirection: 'row', gap: '90px' }}>
                                <Typography sx={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '12px', color: 'black' }}>13 Oct 2023</Typography>
                                <Typography sx={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '12px', color: 'black' }}>17 Oct 2023</Typography>
                                <Typography sx={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '12px', color: 'black' }}>21 Oct 2023</Typography>
                            </Box>
                        </Box>

                    </Box>
                </Box>

                {/*--------------------------------------------------- Peak KW vs KWp --------------------------------------------------------------------*/}
                <Box sx={{ width: {md:'1058px', xs:'800px'}, height: '30px', backgroundColor: 'white', display: 'flex', flexDirection: 'row', gap: '25px', mt: {md:'5px', xs:'330px'}, ml:{md:'0px', xs:'25px'} }}>
                    <Typography sx={{ color: 'black', fontFamily: 'Inter', fontWeight: 600,  fontSize: '12px', mt: '0px', width: '150px', paddingLeft: '10px', paddingTop: '5px' }}>Peak KW vs KWp</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', ml: {md:'770px', xs:'70%'} }}>
                        <img width={'18px'} height={'18px'} style={{ marginTop: '5px' }} src={img4} alt='' />
                        <img width={'24px'} height={'24px'} style={{ marginTop: '2px' }} src={img13} alt='' />
                        <img width={'18px'} height={'18px'} style={{ marginTop: '5px' }} src={img5} alt='' />
                    </Box>
                </Box>


                {/*--------------------------------------------------- Big graph --------------------------------------------------------------------------- */}
                <Box sx={{ width: {md:'1058px', xs:'800px'}, height: '300px', border: '1px solid #F3F2F7', marginTop: '5px', ml:{md:'0px', xs:'25px'} }}>
                    <Box sx={{ width: {md:'1058px', xs:'800px'}, height: '240px', backgroundColor: 'white', marginTop: '0px', display: 'flex', paddingTop: '10px', flexDirection: 'column', gap: '20px' }}>

                        {/*-------------------------------------------------- Content with lines --------------------------------------------------------------*/}
                        <Box sx={{ width: '1000px', height: '10px', mt: '10px', ml: '30px', display: 'flex', flexDirection: 'row', gap: '40px' }}>
                            <Typography sx={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '12px', color: 'black' }}>2,000</Typography>
                            <Box sx={{ border: '1px solid #699BFF', width: '700px', height: '0px', mt: '8px' }} />
                        </Box>

                        <Box sx={{ width: '1000px', height: '10px', mt: '10px', ml: '30px', display: 'flex', flexDirection: 'row', gap: '40px' }}>
                            <Typography sx={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '12px', color: 'black' }}>1,500</Typography>
                            <Box sx={{ border: '1px solid #699BFF', width: '700px', height: '0px', mt: '8px' }} />
                        </Box>

                        <Box sx={{ width: '1000px', height: '10px', mt: '10px', ml: '30px', display: 'flex', flexDirection: 'row', gap: '40px' }}>
                            <Typography sx={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '12px', color: 'black' }}>1,000</Typography>
                            <Box sx={{ border: '1px solid #699BFF', width: '700px', height: '0px', mt: '8px' }} />
                        </Box>

                        <Box sx={{ width: '1000px', height: '10px', mt: '10px', ml: '30px', display: 'flex', flexDirection: 'row', gap: '40px' }}>
                            <Typography sx={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '12px', color: 'black' }}>500</Typography>
                            <Box sx={{ border: '1px solid #699BFF', width: '700px', height: '0px', mt: '8px', ml: '10px' }} />
                        </Box>

                        <Box sx={{ width: '1000px', height: '10px', mt: '10px', ml: '30px', display: 'flex', flexDirection: 'row', gap: '40px' }}>
                            <Typography sx={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '12px', color: 'black' }}>0</Typography>
                            <Box sx={{ border: '1px solid #699BFF', width: '700px', height: '0px', mt: '8px', ml: '23px' }} />
                        </Box>

                        {/*--------------------------------------------------- Graph ------------------------------------------------------------*/}
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                            <Box sx={{ gap: '1px', display: 'flex', flexDirection: 'row' }}>
                                <Box sx={{ width: '30px', height: '100px', backgroundColor: '#356E35', ml: '110px', mt: '-120px' }} />
                                <Box sx={{ width: '30px', height: '130px', backgroundColor: '#5B8875', ml: '0px', mt: '-150px' }} />
                            </Box>
                            <Box sx={{ gap: '1px', display: 'flex', flexDirection: 'row' }}>
                                <Box sx={{ width: '30px', height: '140px', backgroundColor: '#356E35', ml: '0px', mt: '-160px' }} />
                                <Box sx={{ width: '30px', height: '150px', backgroundColor: '#5B8875', ml: '0px', mt: '-170px' }} />
                            </Box>
                            <Box sx={{ gap: '1px', display: 'flex', flexDirection: 'row' }}>
                                <Box sx={{ width: '30px', height: '110px', backgroundColor: '#356E35', ml: '0px', mt: '-130px' }} />
                                <Box sx={{ width: '30px', height: '140px', backgroundColor: '#5B8875', ml: '0px', mt: '-160px' }} />
                            </Box>
                            <Box sx={{ gap: '1px', display: 'flex', flexDirection: 'row' }}>
                                <Box sx={{ width: '30px', height: '155px', backgroundColor: '#356E35', ml: '0px', mt: '-175px' }} />
                                <Box sx={{ width: '30px', height: '110px', backgroundColor: '#5B8875', ml: '0px', mt: '-130px' }} />
                            </Box>
                            <Box sx={{ gap: '1px', display: 'flex', flexDirection: 'row' }}>
                                <Box sx={{ width: '30px', height: '140px', backgroundColor: '#356E35', ml: '0px', mt: '-160px' }} />
                                <Box sx={{ width: '30px', height: '150px', backgroundColor: '#5B8875', ml: '0px', mt: '-170px' }} />
                            </Box>
                            <Box sx={{ gap: '1px', display: 'flex', flexDirection: 'row' }}>
                                <Box sx={{ width: '30px', height: '140px', backgroundColor: '#356E35', ml: '0px', mt: '-160px' }} />
                                <Box sx={{ width: '30px', height: '150px', backgroundColor: '#5B8875', ml: '0px', mt: '-170px' }} />
                            </Box>
                            <Box sx={{ gap: '1px', display: 'flex', flexDirection: 'row' }}>
                                <Box sx={{ width: '30px', height: '140px', backgroundColor: '#356E35', ml: '0px', mt: '-160px' }} />
                                <Box sx={{ width: '30px', height: '150px', backgroundColor: '#5B8875', ml: '0px', mt: '-170px' }} />
                            </Box>
                            <Box sx={{ gap: '1px', display: 'flex', flexDirection: 'row' }}>
                                <Box sx={{ width: '30px', height: '140px', backgroundColor: '#356E35', ml: '0px', mt: '-160px' }} />
                                <Box sx={{ width: '30px', height: '150px', backgroundColor: '#5B8875', ml: '0px', mt: '-170px' }} />
                            </Box>
                            <Box sx={{ gap: '1px', display: 'flex', flexDirection: 'row' }}>
                                <Box sx={{ width: '30px', height: '140px', backgroundColor: '#356E35', ml: '0px', mt: '-160px' }} />
                                <Box sx={{ width: '30px', height: '150px', backgroundColor: '#5B8875', ml: '0px', mt: '-170px' }} />
                            </Box>

                        </Box>

                        <Box sx={{ width: '800px', height: '20px', mt: '-30px', ml: '150px', display: 'flex', flexDirection: 'row', gap: '60px' }}>

                            <Typography sx={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '12px', color: 'black' }}>17 Oct 2023</Typography>
                            <Typography sx={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '12px', color: 'black' }}>17 Oct 2023</Typography>
                            <Typography sx={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '12px', color: 'black' }}>17 Oct 2023</Typography>
                            <Typography sx={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '12px', color: 'black' }}>17 Oct 2023</Typography>
                            <Typography sx={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '12px', color: 'black' }}>21 Oct 2023</Typography>
                        </Box>
                    </Box>
                </Box>

            </Box>

        </Box>
    )
}

export default Dashboard
