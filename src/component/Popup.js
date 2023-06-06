import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Popup = (props) => {
  let history = useNavigate();
  const {open} = props;
  const handleLogout = () => {
    localStorage.removeItem("token");
    history("/login");
  };
  return (
    <>
      <Box
        className="popup "
        style={{ top: !open ? "-50%" : "3rem" }}
      >
        <h5>Jitendra Kumar</h5>
        <hr/>
        <Button onClick={handleLogout} variant="success" className="btnbtn">
          Logout
        </Button>
      </Box>
    </>
  );
};
