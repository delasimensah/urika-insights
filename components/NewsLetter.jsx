import { useState } from "react";

//mui
import { Button } from "@mui/material";

//components
import TextInput from "./TextInput";

const NewsLetter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col items-center py-10 space-y-3 bg-gray-50">
      <h1 className="heading">Sign Up For Our Newsletter</h1>

      <div className="py-3 space-y-5 md:w-2/5">
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
        className="w-40 text-white bg-red-500 rounded-none shadow-none"
      >
        Sign Up
      </Button>
    </div>
  );
};

export default NewsLetter;
