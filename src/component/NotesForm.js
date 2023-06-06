import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/noteContext";
import Noteitem from "./Noteitem";
import { Box } from "@mui/material";

function NotesForm(props) {
  const history = useNavigate();
  const context = useContext(noteContext);
  const [file, setFile] = useState("");
  // const [profile, setProfile] = useState("");
  const { notes, GetNotes, EditNote } = context;
//  console.log(notes);
  const [Notes, setNotes] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
    eimage: "",
  });
  // console.log(Notes);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      GetNotes();
    } else {
      history("/login");
    }
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNotes({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
      eimage: currentNote.imagePath,
    });
    // console.log(Notes);
  };
  // const handleUpload = async (file) => {
  //   // const formData = new FormData();
  //   // formData.append("file", file);
  //    console.log(file);
  //   EditNote(Notes.id,
  //     Notes.etitle,
  //     Notes.edescription,
  //     Notes.etag,
  //     file
  //     );
  //     // setProfile(notes.imagePath);
  //   //  console.log(GetNotes);
  //     // console.log(notes.imagePath);
  //   // console.log(Notes);
  //   // console.log(notes);
  //   // const profileResult = await dispatch(
  //   //   // uploadProfile({ id, profile: formData })
  //   // ).unwrap();
  //   // setProfile(profileResult.data.file);
  // };
  const handleClick = (e) => {
    Notes.eimage = file;
    //  console.log(Notes);
    EditNote(
      Notes.id,
      Notes.etitle,
      Notes.edescription,
      Notes.etag,
      Notes.eimage
    );
    refClose.current.click();
    props.showAlert("success", "Note Updated Successfully");
  };
  const onChange = (e) => {
    setNotes({ ...Notes, [e.target.name]: e.target.value });
  };
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <Box
                  className="mb-3"
                  sx={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "1px",
                  }}
                >
                  <img
                    src={Notes.eimage ? Notes.eimage : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                    alt="img"
                    height="100px"
                    width="100px"
                    border="1px solid black"
                    borderradius="5px"
                  />
                  <input
                    type="file"
                    className="form-control"
                    id="eimage"
                    defaultValue={Notes.eimage}
                    name="eimage"
                    // aria-describedby="emailHelp"
                  onChange={(e) =>
                    setFile(e.target.files[0] ? e.target.files[0] : "")
                    // handleUpload(e.target.files[0])
                    }
                  />
                </Box>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    value={Notes.etitle}
                    name="etitle"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    value={Notes.edescription}
                    name="edescription"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    value={Notes.etag}
                    name="etag"
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <Box className="row my-5 text-center mx-2" maxWidth="600vw">
        <h2>Your Collection</h2>
        {notes.length === 0 && "Please Add Your Notes"}

        {notes.map((note) => {
          return (
            <Box className="col-md-4 my-4 noteItem ">
              <Noteitem
                key={note._id}
                note={note}
                showAlert={props.showAlert}
                updateNote={updateNote}
              />
            </Box>
          );
        })}
      </Box>
    </>
  );
}

export default NotesForm;
