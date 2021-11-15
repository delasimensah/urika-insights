import { useState } from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";

//mui
import { Breadcrumbs } from "@mui/material";

//components
import Layout from "../components/Layout";
import TextInput from "../components/TextInput";

const ContactUs = () => {
  const [name, setName] = useState("");

  return (
    <Layout>
      <div className="h-full px-5 mx-auto py-14 md:px-0 md:w-4/5 lg:w-3/5">
        <Breadcrumbs>
          <Link href="/">
            <a>Home</a>
          </Link>

          <p>Contact Us</p>
        </Breadcrumbs>

        <Fade distance="40px" duration={1500} left>
          <form className="mt-10 space-y-5">
            <TextInput
              helperText="* required"
              label="Name"
              type="text"
              value={name}
              handleChange={(e) => setName(e.target.value)}
            />

            <TextInput
              label="Name"
              type="text"
              value={name}
              handleChange={(e) => setName(e.target.value)}
            />

            <TextInput
              label="Name"
              // type="text"
              value={name}
              handleChange={(e) => setName(e.target.value)}
              multiline={true}
              maxRows={6}
            />
          </form>
        </Fade>
      </div>
    </Layout>
  );
};

export default ContactUs;
