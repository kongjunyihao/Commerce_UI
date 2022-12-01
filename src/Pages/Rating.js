import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function ProductRating({value, text}){
  return(
    <Stack spacing={1}>
      <Rating name="half-rating-read" value={value} precision={0.5} readOnly/>
      <span>{text && text}</span>
    </Stack>
  );
}
