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
    <df-messenger
      intent="WELCOME"
      chat-title="faqBot"
      agent-id="536a3108-3771-41e1-884a-8f0621ed8678"
      language-code="en"
    ></df-messenger>
    </>
  );
};

export default Home;
