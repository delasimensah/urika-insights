import { useState } from "react";
import Fade from "react-reveal/Fade";

//mui
import { Button } from "@mui/material";

//components
import TextInput from "./TextInput";

const NewsLetter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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
        >
          Sign Up
        </Button>
      </div>
    </Fade>
  );
};

export default NewsLetter;
