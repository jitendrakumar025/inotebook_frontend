import React,{useContext,useEffect,useRef,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/noteContext';
import Noteitem from './Noteitem';

function NotesForm(props) {
  const history=useNavigate()
    const context=useContext(noteContext);
     const [Notes,setNotes]=useState({id:"", etitle:"", edescription:"",etag:''})
    const {notes,GetNotes,EditNote}=context;
    useEffect(()=>{
        if(localStorage.getItem('token')){
          GetNotes();
        }
        else{
        history("/login")
        }

    },[])
    const ref =useRef(null);
    const refClose =useRef(null);
    const updateNote=(currentNote)=>{
          ref.current.click();
          setNotes({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
    }

    const handleClick=(e)=>{
      EditNote(Notes.id,Notes.etitle,Notes.edescription,Notes.etag)
      refClose.current.click();
      props.showAlert("success","Note Updated Successfully")

}
     const onChange=(e)=>{
       setNotes({...Notes,[e.target.name]:e.target.value})
   }
  return (
    <>
    {/* <!-- Button trigger modal --> */}
<button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal"  data-bs-target="#exampleModal">
  Launch demo modal
</button>
{/* <!-- Modal --> */}
<div  className="modal fade"  id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="etitle" value={Notes.etitle} name='etitle' aria-describedby="emailHelp" onChange={onChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="edescription" className="form-label">Description</label>
    <input type="text" className="form-control" id="edescription" value={Notes.edescription} name='edescription' onChange={onChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="etag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="etag" value={Notes.etag} name='etag' onChange={onChange}/>
  </div>
  </form> 
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleClick} >Update Note</button>
      </div>
    </div>
  </div>
</div>
    <div className='row my-3'>
        <h1>Your Notes</h1>
        {notes.length===0 && "Please Add Your Notes"}
         {notes.map((note)=>{
        return <Noteitem key={note._id} note={note} showAlert={props.showAlert} updateNote={updateNote}/>
   })}
    </div>
    </>
  )
}

export default NotesForm
