import React, { useState } from 'react'
import { Box } from '@mui/material'

import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import HeroBanner from '../components/HeroBanner'

function Home() {
	//both states are position in Home, 
	//because every change is going to be reflected all across the application
	const [bodyPart, setBodyPart] = useState('all')
	const [exercises, setExercises] = useState([])
	
	return (
		<>
			<Box>
				<HeroBanner />
				<SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      			<Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
			</Box>
		</>
	)
}

export default Home