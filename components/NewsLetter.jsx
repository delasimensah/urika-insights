import { useState } from "react";
import Fade from "react-reveal/Fade";

//mui
import { Button, Snackbar, Alert } from "@mui/material";

//components
import TextInput from "./TextInput";

const NewsLetter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  const reset = () => {
    setName("");
    setEmail("");
    setLoading(false);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    setLoading(true);

    const response = await fetch("https://formspree.io/f/mzbowgoo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    if (response.status === 200) {
      reset();
      handleOpen();
    } else {
      reset();
      handleOpenError();
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleOpenError = () => {
    setOpenError(true);
  };

  const handleCloseError = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenError(false);
  };

  return (
    <Fade left distance="40px" duration={1000}>
      <div className="flex flex-col items-center px-10 py-20 space-y-3 md:px-0 bg-gray-50">
        <h1 className="heading">Sign Up For Our Newsletter</h1>

        <div className="py-3 space-y-5 md:3/5 lg:w-2/5">
          <TextInput
            label="Name"
            type="text"
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />

          <TextInput
            label="Email"
            type="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <Button
          variant="container"
          size="large"
          className="w-40 text-white shadow-none bg-primary"
          disabled={name === "" || email === ""}
          onClick={handleSignup}
        >
          {loading ? "Sending..." : "Sign Up"}
        </Button>

        <div className="flex flex-col items-center pt-10">
          <a
            href="/brochure-2021.pdf"
            download
            rel="noopener noreferrer"
            target="_blank"
            className="text-secondary"
          >
            Download our Brochure
          </a>

          <p className="text-primary">(PDF file - 1.50 Mb)</p>
        </div>
      </div>

      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Signup successful
        </Alert>
      </Snackbar>

      <Snackbar
        open={openError}
        autoHideDuration={4000}
        onClose={handleCloseError}
      >
        <Alert
          onClose={handleCloseError}
          severity="error"
          sx={{ width: "100%" }}
        >
          Signup not successful
        </Alert>
      </Snackbar>
    </Fade>
  );
};

export default NewsLetter;
