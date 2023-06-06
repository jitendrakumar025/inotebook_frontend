 import NoteContext from "./noteContext";
 import { useState } from "react";

 const NoteState = (props) => {
  //  const host = process.env.REACT_APP_SERVER_URL;
   const host = "http://localhost:5000";
   const notesInitial = [];
   const [notes, setNotes] = useState(notesInitial);
   
 //Get all notes
  const GetNotes = async () => {
  //API Call
     const response = await fetch(`${host}/api/notes/fetchnotes`, {
       method: "GET", // *GET, POST, PUT, DELETE, etc.
       headers: {
        //  "Content-Type": "application/json", 
         "auth_token":localStorage.getItem('token')
         // 'Content-Type': 'application/x-www-form-urlencoded',
       }
       // body data type must match "Content-Type" header
     });
     const json =await response.json();
    //  console.log(json);
     setNotes(json)
  }



  //Add a note
   const AddNotes = async (title, description, tag, file) => {
    //API Call
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("tag", tag);
    formData.append("file", file);


      const response = await fetch(`${host}/api/notes/addnotes`, {
       method: "POST", // *GET, POST, PUT, DELETE, etc.
       headers: {
        //  "Content-Type": "application/json",
         "auth_token":
           localStorage.getItem('token'),
         // 'Content-Type': 'application/x-www-form-urlencoded',
       },
      //  body: JSON.stringify({title, description, tag,image}), // body data type must match "Content-Type" header
       body: formData, // body data type must match "Content-Type" header
     });
      const note = await response.json(); // parses JSON response into native JavaScript objects
      setNotes(notes.concat(note));

 
    //  const json =await response.json();
    //  console.log(json)
   };



  //Delete a note
   const DeleteNote =async (id,imageUrl) => {
    //API Call
    const response = await fetch(`${host}/api/notes/deletenotes?id=${id}&imageUrl=${imageUrl}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        // "Content-Type": "application/json",
        "auth_token":localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
     const json = response.json();
     console.log(json);
     console.log("Deleting your note " + id);
     const newNotes = notes.filter((note) => {
       return note._id !== id;
     });
     setNotes(newNotes);
   };



  //Edit a note
   const EditNote = async (id, title, description, tag, file ) => {
    //API Call
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("tag", tag);
    formData.append("file", file);

    // console.log(formData);
     const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
       method: "PUT", // *GET, POST, PUT, DELETE, etc.
       headers: {
        //  "Content-Type": "application/json",
         "auth_token":localStorage.getItem('token'),
         // 'Content-Type': 'application/x-www-form-urlencoded',
       },
      //  body: JSON.stringify({title, description, tag,file }), // body data type must match "Content-Type" header
       body: formData, // body data type must match "Content-Type" header
     });
      const json =await response.json(); // parses JSON response into native JavaScript objects
      //  console.log(json);
      let newNotes=JSON.parse(JSON.stringify(notes))
     for (let index = 0; index < notes.length; index++) {
       const element = newNotes[index];
       if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
        element.imagePath=json.imagePath;
        // newNotes[index].title = title;
        // newNotes[index].description = description;
        // newNotes[index].tag = tag;
         break;
       }

     }
    //  console.log(newNotes);
     setNotes(newNotes);
   };

   return (
     <NoteContext.Provider
       value={{
         notes,
         setNotes,
         AddNotes,
         DeleteNote,
         EditNote,
         GetNotes,
       }}
     >
    
       {props.children}
     </NoteContext.Provider>
   );
 };
 export default NoteState;
