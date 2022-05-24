import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("Home");
  };
  return (
    <>
      <Container>
        <Box sx={{ mt: "30vh", textAlign: "center" }}>
          <h1>404 not found</h1>
          <p>
            ..........oops, seems like the page you are looking for are missing,
            try again later or contact dev.........
          </p>
          <Button color="secondary" onClick={handleBack}>
            Back to Home page
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default NotFound;
