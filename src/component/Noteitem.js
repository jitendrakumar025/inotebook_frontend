import React,{useContext}  from 'react'
import noteContext from '../context/noteContext';
import { Box } from '@mui/material';
import ImgMediaCard from '../utils/ImgMedia';

const Noteitem = (props) => {
    const context=useContext(noteContext);
    const {DeleteNote}=context;
    const {note,updateNote,showAlert}=props
  return (
    <Box >
       <ImgMediaCard key={note._id} note={note} updateNote={updateNote} showAlert={showAlert}  DeleteNote={DeleteNote}/>
      {/* <div className="card my-4">
        <div className="card-body ">
            <h5 className="card-title">{note.title}</h5>
             <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> 
            <p className="card-text"  >{note.description}</p>
            <hr />
            <p className="card-text">{note.tag}</p>
            <i className='bx bxs-edit mx-2' onClick={()=>{updateNote(note)}}></i>
            <i className='bx bxs-trash' style={{cursor:{color:"red"}}} onClick={()=>{ DeleteNote(note._id);props.showAlert('success',"Deleted Successfully")}} ></i>        
          </div>
        </div> */}
    </Box>
  )
}

export default Noteitem


