import React from "react";
import AddNote from "./AddNote";
import NotesForm from "./NotesForm";
import { Popup } from "./Popup";
import { Box, Divider } from "@mui/material";
const Home = (props) => {
  const { showAlert } = props;
  return (
    <>
    <Box >
      <Box sx={{ display: "flex" ,flexDirection:"column" , }}>
         {/* <Popup /> */}
        <AddNote showAlert={showAlert} />
        <Divider/>
      <NotesForm showAlert={showAlert} />
      </Box>
    </Box>
    </>
  );
};

export default Home;
