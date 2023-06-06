import  React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

 const ImgMediaCard=(props)=> {
    // const context=useContext(noteContext);
    // const {DeleteNote}=context;
    const {note,updateNote,DeleteNote }=props
  return (
    <Card sx={{ Width: 345 }} className='cardClass'>
      <CardMedia
        component="img"
        alt="img here"
        height="200"
        loading="lazy"
        image={note.imagePath}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="greenYellow">
        {note.title}  
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {note.description} 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{updateNote(note)}}>Edit</Button>
        <Button size="small"  onClick={()=>{ DeleteNote(note._id,note.imagePath);props.showAlert('success',"Deleted Successfully")}} >Delete</Button>
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard;