import React from 'react'
import Sidebar from './Sidebar'
import { Avatar, Box, Typography } from '@mui/material'
import img from './Asset/Calender-Date.png'
import img1 from './Asset/Cloud.png'
import img2 from './Asset/Themomether.png'
import img3 from './Asset/Droplet.png'
import img4 from './Asset/Tower.png'
import img5 from './Asset/solar.png'
import img6 from './Asset/Transform.png'
import img7 from './Asset/bulb.png'
import img8 from './Asset/battery.png'
import img9 from './Asset/Vector 2531.png'
import img10 from './Asset/Line 260.png'
import img11 from './Asset/Line 261.png'
import img12 from './Asset/Calender.png'
import img13 from './Asset/Refresh.png'
import img14 from './Asset/Settings.png'
import img15 from './Asset/Ellipse 2141.png'
import img16 from './Asset/Ellipse 2142.png'
import img17 from './Asset/Ellipse 2143.png'
import img18 from './Asset/Ellipse 2144.png'
import img19 from './Asset/Ellipse 2145.png'
import img20 from './Asset/Ellipse 2136.png'
import img21 from './Asset/Ellipse 2137.png'
import img22 from './Asset/Ellipse 2138.png'
import img23 from './Asset/Ellipse 2139.png'
import img24 from './Asset/Ellipse 2140.png'
import img25 from './Asset/Ellipse 2146.png'
import img26 from './Asset/Expand.png'




const Dashboard2 = () => {
    return (
        <Box sx={{ ml: { sm: '-12px', xs: '-260px' }, backgroundColor: '#F3F2F7', width: { md: '1360px', xs: '809px' }, height: { md: '900px', xs: '1500px' } }}>

            <Sidebar />
            {/*----------------------------------------------- Frame-1 ---------------------------------------------------------------*/}
            <Box variant="elevation" sx={{ width: {md:'1050px', xs:'700px'}, height: '30px', backgroundColor: 'white', display: {md:'flex', xs:'none'}, flexDirection: 'row', gap: '25px', mt: '50px', ml: '300px' }}>
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

            {/*----------------------------------------------- Frame-2 ---------------------------------------------*/}
            <Box sx={{ width: {md:'1050px', xs:'700px'}, height: '270px',  mt: '2px', ml: {md:'300px', xs:'320px'}, border: '1px solid #F3F2F7', display: 'flex', flexDirection: {md:'row', xs:'column'}, gap:'3px' }}>
                <Box sx={{ width: '370px', height: '270px', marginTop: {md:'2px', xs:'60px'}, backgroundColor: 'white', paddingLeft:'30px', paddingTop:'17px' }}>
                    <Box sx={{ width: '300px', height: '240px', ml: '20px', paddingTop: '10px' }}>
                        <Box sx={{ width: '44px', height: '44px', borderRadius: '24px', border: '2px solid black', marginTop: '50px', ml: '15px', position: 'absolute' }}> <Avatar src={img4} /></Box>
                        <Box sx={{ width: '44px', height: '44px', borderRadius: '24px', border: '2px solid black', ml: '110px', mt: '30px', position: 'absolute' }}> <Avatar src={img5} /></Box>
                        <Box sx={{ width: '44px', height: '44px', borderRadius: '24px', border: '2px solid black', ml: '205px', mt: '50px', position: 'absolute' }}> <Avatar src={img6} /></Box>
                        <Box sx={{ width: '44px', height: '44px', borderRadius: '24px', border: '2px solid black', mt: '130px', ml: '110px', position: 'absolute' }}> <Avatar src={img7} /></Box>
                        <Box sx={{ width: '44px', height: '44px', ml: '105px', mt: '90px', position: 'absolute' }}> <img alt='' src={img8} /></Box>
                        <Box sx={{ ml: '130px', mt: '75px', position: 'absolute' }}> <img alt='' src={img9} /></Box>
                        <Box sx={{ ml: '35px', mt: '90px', position: 'absolute' }}> <img alt='' src={img10} /></Box>
                        <Box sx={{ ml: '158px', mt: '90px', position: 'absolute' }}> <img alt='' src={img11} /></Box>
                    </Box>
                    <Box sx={{ width: '80px', height: '60px', mt: '-233px', ml: '20px' }}>
                        <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, textAlign: 'center' }}>Grid</Typography>
                        <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400 }}>490.11 [KW]</Typography>
                        <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400 }}>1000 [KWh]</Typography>
                    </Box>
                    <Box sx={{ width: '80px', height: '60px', mt: '-80px', ml: '115px' }}>
                        <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, textAlign: 'center' }}>Solar</Typography>
                        <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400 }}>237.31 [KW]</Typography>
                        <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400 }}>500 [KWh]</Typography>
                    </Box>
                    <Box sx={{ width: '80px', height: '60px', mt: '-40px', ml: '225px' }}>
                        <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, textAlign: 'center', marginLeft: '-35px' }}>DG</Typography>
                        <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400 }}>0 [KW]</Typography>
                        <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400 }}>50 [KWh]</Typography>
                    </Box>
                    <Box sx={{ width: '80px', height: '60px', mt: '120px', ml: '125px' }}>
                        <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, textAlign: 'center', marginLeft: '-35px' }}>Load</Typography>
                        <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400 }}>727.42 [KW]</Typography>
                        <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400 }}>200 [KWh]</Typography>
                    </Box>
                </Box>

                {/*------------------------------------------------ Squared box  --------------------------------------------------------------------------*/}
                <Box sx={{ width: '700px', height: '270px', border: '1px solid #F3F2F7' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row',  }}>
                        <Box sx={{ width: '340px', height: '133px', border: '1px solid #F3F2F7', backgroundColor:'white' }}>
                            <Box sx={{ width: '340px', height: '30px', backgroundColor: '#356E35' }}>
                                <Typography sx={{ color: 'white', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>Capacity</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>DC</Typography>
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>AC</Typography>
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>AC</Typography>
                            </Box>

                            <Box sx={{ justifyContent: 'flex-end', ml: '240px', mt: '-70px' }}>
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>650.3 (KWp)</Typography>
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>650.3 (KWp)</Typography>
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>650.3 (KWp)</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ width: '340px', height: '133px', border: '1px solid #F3F2F7', ml: '3px', backgroundColor:'white' }}>
                            <Box sx={{ width: '340px', height: '30px', backgroundColor: '#356E35' }}>
                                <Typography sx={{ color: 'white', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>Capacity</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>DC</Typography>
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>AC</Typography>
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>AC</Typography>
                            </Box>

                            <Box sx={{ justifyContent: 'flex-end', ml: '240px', mt: '-70px' }}>
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>650.3 (KWp)</Typography>
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>650.3 (KWp)</Typography>
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>650.3 (KWp)</Typography>
                            </Box>
                        </Box>

                    </Box>

                    {/*------------------------------------------ Squared box four --------------------------------------------------------------------------*/}
                    <Box sx={{ display: 'flex', flexDirection: 'row', mt: '7px' }}>
                        <Box sx={{ width: '340px', height: '133px', border: '1px solid #F3F2F7', backgroundColor:'white' }}>
                            <Box sx={{ width: '340px', height: '30px', backgroundColor: '#356E35' }}>
                                <Typography sx={{ color: 'white', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>Capacity</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>DC</Typography>
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>AC</Typography>
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>AC</Typography>
                            </Box>

                            <Box sx={{ justifyContent: 'flex-end', ml: '240px', mt: '-70px' }}>
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>650.3 (KWp)</Typography>
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>650.3 (KWp)</Typography>
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>650.3 (KWp)</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ width: '340px', height: '133px', border: '1px solid #F3F2F7', ml: '3px', backgroundColor:'white' }}>
                            <Box sx={{ width: '340px', height: '30px', backgroundColor: '#356E35' }}>
                                <Typography sx={{ color: 'white', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>Capacity</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>DC</Typography>
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>AC</Typography>
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>AC</Typography>
                            </Box>

                            <Box sx={{ justifyContent: 'flex-end', ml: '240px', mt: '-70px' }}>
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>650.3 (KWp)</Typography>
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>650.3 (KWp)</Typography>
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>650.3 (KWp)</Typography>
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Box>

            {/*---------------------------------------------------- Last Frame  ----------------------------------------------------------------------*/}
            <Box sx={{ width:{md:'1050px', xs:'700px'}, height: '300px', marginTop: {md:'3px', xs:'340px'}, display: 'flex', flexDirection: {md:'row', xs:'column'}, gap: '3px', ml: {md:'300px', xs:'320px'}, position: 'absolute' }}>
                <Box sx={{ width: '360px', height: '300px' }}>
                    <Box sx={{ width: '360px', height: '30px', border: '1px solid #F3F2F7', backgroundColor: 'white', mt:'3px' }}>
                        <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, lineHeight: 18, marginTop: '-95px', marginLeft: '5px' }}>Total Instant Power [KW]</Typography>
                        <Box sx={{ gap: '15px', display: 'flex', flexDirection: 'row', marginTop: '-117px', marginLeft: '280px' }}>
                            <img width={'15px'} height={'15px'} src={img13} />
                            <img width={'15px'} height={'15px'} src={img14} />
                        </Box>
                    </Box>

                    {/*-------------------------------------------------- Left Box ----------------------------------------------------------*/}
                    <Box sx={{ width: '360px', height: '260px', backgroundColor: 'white', marginTop: '3px' }}>
                        <Box sx={{ width: '280px', height: '15px', marginLeft: '20px', marginTop: '5px', display: 'flex', paddingTop: '20px', flexDirection: 'row', gap: '8px' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '3px' }}>
                                <img width={'15px'} height={'15px'} src={img15} />
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Roboto', fontWeight: 400 }}>INV-1</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '3px' }}>
                                <img width={'15px'} height={'15px'} src={img16} />
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Roboto', fontWeight: 400 }}>INV-2</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '3px' }}>
                                <img width={'15px'} height={'15px'} src={img17} />
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Roboto', fontWeight: 400 }}>INV-3</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '3px' }}>
                                <img width={'15px'} height={'15px'} src={img18} />
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Roboto', fontWeight: 400 }}>INV-4</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '3px' }}>
                                <img width={'15px'} height={'15px'} src={img19} />
                                <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Roboto', fontWeight: 400 }}>INV-5</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ width: '240px', height: '170px', marginLeft: '45px', marginTop: '5px', paddingTop: '20px' }}>
                            <Box sx={{ marginLeft: '110px', marginTop: '70px', position: 'absolute' }}> <img src={img20} /></Box>
                            <Box sx={{ marginLeft: '30px', marginTop: '70px', position: 'absolute' }}> <img src={img21} /></Box>
                            <Box sx={{ paddingLeft: '40px', marginTop: '20px', position: 'absolute' }}> <img src={img22} /></Box>
                            <Box sx={{ paddingLeft: '60px', marginTop: '100px', position: 'absolute' }}> <img src={img23} /></Box>
                            <Box sx={{ marginLeft: '110px', marginTop: '20px', position: 'absolute' }}> <img src={img24} /></Box>
                            <Box sx={{ marginLeft: '75px', marginTop: '70px', position: 'absolute' }}> <img src={img25} /></Box>

                            <Typography sx={{ color: '#DF3614', fontSize: '12px', fontFamily: 'Roboto', fontWeight: 400, position: 'absolute', ml: '190px', mt: '90px' }}>101.37</Typography>
                            <Typography sx={{ color: '#990096', fontSize: '12px', fontFamily: 'Roboto', fontWeight: 400, position: 'absolute', ml: '30px', mt: '20px' }}>100.28</Typography>
                            <Typography sx={{ color: '#FB9A03', fontSize: '12px', fontFamily: 'Roboto', fontWeight: 400, position: 'absolute', ml: '100px', mt: '180px' }}>98.1</Typography>
                            <Typography sx={{ color: '#3266CC', fontSize: '12px', fontFamily: 'Roboto', fontWeight: 400, position: 'absolute', ml: '140px', mt: '10px' }}>98.1</Typography>
                            <Typography sx={{ color: '#109619', fontSize: '12px', fontFamily: 'Roboto', fontWeight: 400, position: 'absolute', ml: '-10px', mt: '100px' }}>102.46</Typography>


                        </Box>
                    </Box>
                </Box>

                {/*------------------------------------ Right Box  -------------------------------------------------------------------*/}
                <Box sx={{ width: '680px', height: '300px', ml: '3px', mt:'3px' }}>
                    <Box sx={{ width: '680px', height: '30px', border: '1px solid #F3F2F7', backgroundColor: 'white' }}>
                        <Typography sx={{ color: 'black', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, paddingLeft: '5px', paddingTop: '5px' }}>Inverter Wise Capacity [KWp]</Typography>
                        <Box sx={{ height: '25px', marginTop: '-20px', marginLeft: '230px', width: '300px', display: 'flex', flexDirection: 'row', gap: '5px' }}>
                            <img width={'20px'} height={'18px'} src={img12} />
                            <Typography sx={{ border: '0.5px solid gray', color: 'black', fontFamily: 'Inter', fontWeight: 600, width: '80px', height: '20px', fontSize: '12px', marginTop: '0px' }}>12/Oct/2023</Typography>
                            <Typography sx={{ color: 'black', fontFamily: 'Inter', fontWeight: 600, width: '20px', fontSize: '12px', mt: '0px' }}>to</Typography>
                            <Typography sx={{ border: '0.5px solid gray', color: 'black', fontFamily: 'Inter', fontWeight: 600, width: '80px', height: '20px', fontSize: '12px', mt: '0px' }}>21/Oct/2023</Typography>
                            <img width={'15px'} height={'15px'} src={img13} />
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', ml: '580px', mt: '-25px' }}>
                            <img width={'18px'} height={'18px'} src={img26} />
                            <img width={'18px'} height={'18px'} style={{ marginTop: '0px' }} src={img14} />
                        </Box>
                    </Box>

                    <Box sx={{ width: '680px', height: '260px', backgroundColor: 'white', marginTop: '5px', display: 'flex', paddingTop: '20px', flexDirection: 'column', gap: '20px' }}>

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

        </Box>

    )
}

export default Dashboard2
