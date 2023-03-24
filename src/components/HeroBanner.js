import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

function HeroBanner() {
	return (
		<>
			<Box sx={{
				mt: { lg: '212px', xs: '70px'},
				ml: { sm: '50px'}
			}} position='relative' p='20px' >
				
				<Typography color='#FF2625' fontWeight='600' fontSize='26px'>Fitnes Club</Typography>

				<Typography fontWeight={700} mb='23px' mt='30px' sx={{ fontSize: { lg: '44px', xs: '40px'} }}>Sweat, Smile <br /> and Repeat</Typography>

				<Typography fontSiz='22px' lineHeight='35px' mb={4}>Check out the most effective exercises</Typography>

				<Button variant='contained' color='error' href='#exercises' sx={{ backgroundColor: '#ff2625', padding: '10px' }}>Explore Exercises</Button>
				<Typography
					fontWeight={600}
					color='#ff2625'
					sx={{
						opacity: 0.125,
						display: { lg: 'block', xs: 'none'}
					}}
					fontSize='200px'
				>
					Exercise
				</Typography>
				<img src={HeroBannerImage} alt='...' className='hero-banner-img' />
			
			</Box>	
		</>
	)
}

export default HeroBanner