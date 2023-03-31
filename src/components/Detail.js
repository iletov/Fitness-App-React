import React from 'react'
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  
  console.log(gifUrl);
  return (
    <Stack gap='60px' sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} Loading='lazy' className='detail-image' />
      <Stack sx={{ fontSize: { lg: '64px', xs: '30px' } }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize" >
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}.
        </Typography>
      </Stack>
    </Stack>
  )
}

export default Detail