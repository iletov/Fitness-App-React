import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utility/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
	const [exerciseDetail, setExerciseDetail] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const fetchExercisesData = async () => {
			//exercise detail view
			const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com/exercises';
			//youtube videos for the sellected exercise
			const youTubeSearch = 'https://youtube-search-and-download.p.rapidapi.com';
		
			const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercise/${id}`, exerciseOptions)
			setExerciseDetail(exerciseDetailData); // setting it to the state
			console.log({exerciseDetailData})
			
			
		}	

		fetchExercisesData();
	}, [id])


  return (
	<>
		<Box>
			<Detail exerciseDetail={exerciseDetail} /> 
			<ExerciseVideos />
			<SimilarExercises />
		</Box>
	</>
	
  )
}

export default ExerciseDetail;
