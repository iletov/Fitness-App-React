import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utility/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';

const ExerciseDetail = () => {
	const [exerciseDetail, setExerciseDetail] = useState({});
	const [exerciseVideos, setExerciseVideos] = useState([]);


	const { id } = useParams();

	useEffect(() => {
		const fetchExercisesData = async () => {
			
			const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com/exercises'; //exercise detail view
			const youTubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'; //youtube videos for the sellected exercise

			const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercise/${id}`, exerciseOptions)
			setExerciseDetail(exerciseDetailData); // setting it to the state
			// console.log({exerciseDetailData})
			
			const exerciseVideosData = await fetchData(`${youTubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
			setExerciseVideos(exerciseVideosData.contents)
			// console.log(exerciseVideosData)

		}	

		fetchExercisesData();
	}, [id])


  return (
	<>
		<Box>
			<Detail exerciseDetail={exerciseDetail} /> 
			<ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />

		</Box>
	</>
	
  )
}

export default ExerciseDetail;
