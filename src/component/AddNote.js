import React,{useContext}  from 'react'
import { useState } from 'react';
import noteContext from '../context/noteContext';

const AddNote = (props) => {
    const context=useContext(noteContext);
    const {AddNotes}=context;
    const [Notes,setNotes]=useState({title:"", description:"",tag:''})
    const handleClick=(e)=>{
            e.preventDefault()
            AddNotes(Notes.title,Notes.description,Notes.tag)
            props.showAlert("success","Note Added Successfully")
            setNotes({title:"", description:"",tag:''})
    }
    const onChange=(e)=>{
        setNotes({...Notes,[e.target.name]:e.target.value})
    }
  return (
    <div className='container'>
           <h1>Add Notes</h1>
      <form >
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name='title' value={Notes.title} aria-describedby="titleHelp" onChange={onChange} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description"value={Notes.description} name='description' onChange={onChange} required />
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" value={Notes.tag}name='tag' onChange={onChange} required/>
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form> 
    </div>
  )
}

export default AddNote
