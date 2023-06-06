import React, { useContext } from "react";
import { useState } from "react";
import noteContext from "../context/noteContext";
import { MoodRounded } from "@mui/icons-material";
import { Box } from "@mui/material";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { AddNotes } = context;
  const [Notes, setNotes] = useState({
    title: "",
    description: "",
    tag: "",
    image: "",
  });
  const [file, setFile] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    Notes.image = file;
    console.log(Notes);
    AddNotes(Notes.title, Notes.description, Notes.tag, Notes.image);
    props.showAlert("success", "Note Added Successfully");
    Notes.image = "";
    setNotes({ title: "", description: "", tag: "", image: "" });
    console.log(Notes);
  };

  const onChange = (e) => {
    setNotes({ ...Notes, [e.target.name]: e.target.value});
  };
  return (
    <Box className="container_notes">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: "1rem",
        }}
      >
        <h1>Collect Your Memories Here</h1> <MoodRounded />
      </Box>
      <form>
        <Box className="mb-4">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            defaultValue={Notes.image}
            placeholder="Upload Image"
            onChange={(e)=>{setFile(e.target.files[0]);
            }}
            // required
          />
        </Box>
        <Box className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={Notes.title}
            aria-describedby="titleHelp"
            onChange={onChange}
            required
          />
        </Box>
        <Box className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            value={Notes.description}
            name="description"
            onChange={onChange}
            required
          />
        </Box>
        <Box className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            value={Notes.tag}
            name="tag"
            onChange={onChange}
            required
          />
        </Box>

        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </Box>
  );
};

export default AddNote;
