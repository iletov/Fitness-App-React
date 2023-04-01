import React, { useState, useEffect } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utility/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

function SearchExercises({setExercises, bodyPart, setBodyPart}) {
	const [search, setSearch] = useState('');
	
	const [bodyParts, setBodyParts] = useState([]);

	useEffect(() => {
		const fetchExercisesData = async () => {
			const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
			//after that..

			setBodyParts(['all', ...bodyPartsData]);

		};

		fetchExercisesData(); //call the functions when the app loads
	}, []);//show all categories, and call it only on the start

	const handleSearch = async () => {// search for exercises 
		if(search) { //if search exist fetch data
			const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
			
			const searchedExercises = exercisesData.filter(
				(item) =>  item.name.toLowerCase().includes(search)
						|| item.target.toLowerCase().includes(search)
						|| item.equipment.toLowerCase().includes(search)
						|| item.bodyPart.toLowerCase().includes(search)
			);

			window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

			setSearch(''); //clear the search results
			setExercises(searchedExercises);
		}
	};

	return (
		<>
			<Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
				<Typography fontWeight={700} mb='49px' textAlign='center'
							sx={{	fontSize: { lg: '44px', xs: '30px'} }} >
					Awesome Exercises You <br/> Should Know
				</Typography>
				<Box position='relative' mb='72px'>
					<TextField
						sx={{ 	input: { fontWeight: '700', border: 'none', borderRadius: '4px'},
								width: { lg: '1170px', xs: '350px'},
								backgroundColor: '#fff', borderRadius: '40px' }}
						height='76px'
						value={search}
						onChange={(e) => setSearch(e.target.value.toLowerCase())}
						placeholder='Search Exercises'
						type='text'
					/>
					<Button className='search-btn' sx={{ bgcolor: '#FF2625', 
														color: '#fff', 
														textTransform: 'none', 
														width: { lg: '173px', xs: '80px' }, 
														height: '56px', 
														position: 'absolute', 
														right: '0px', 
														fontSize: { lg: '20px', xs: '14px' } }}
														onClick={handleSearch}>
						Search
					</Button>
				</Box>
				<Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
					 <HorizontalScrollbar data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} isBodyParts />
				</Box>
			</Stack>
		</>
	)
}

export default SearchExercises