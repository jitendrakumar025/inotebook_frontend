import React from 'react'
import AddNote from './AddNote';
import NotesForm from './NotesForm';
const Home = (props) => {
 const {showAlert}=props
  return (
    <div className='container'>
   <AddNote showAlert={showAlert} />
   <NotesForm showAlert={showAlert} />
  </div>


  )
}

export default Home
