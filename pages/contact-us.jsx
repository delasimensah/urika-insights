import { useState } from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";

//mui
import { Breadcrumbs, Button } from "@mui/material";

//components
import Layout from "../components/Layout";
import TextInput from "../components/TextInput";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className="h-full px-5 mx-auto mt-10 space-y-10 py-14 md:px-0 md:w-4/5 lg:w-3/5">
        <Breadcrumbs>
          <Link href="/">
            <a>Home</a>
          </Link>

          <p>Contact Us</p>
        </Breadcrumbs>

        <Fade distance="40px" duration={1500} left>
          <div className="mb-10 space-y-10">
            <p className="text-sm text-center md:text-lg">
              If you have a request, a question or any comment, we will be happy
              to hear from you. Please enter your submission in the form below
              and select the 'send message' button to send your email.
            </p>

            <ul className="grid gap-10 md:grid-cols-2">
              <li>
                <h1 className="mb-5 text-base font-medium md:text-lg">
                  Telephone:{" "}
                </h1>
                <p className="text-sm">(+233) 20 644 3192</p>
                <p className="text-sm">(+233) 30 294 5998</p>
                <p className="text-sm">(+233) 55 666 6134</p>
              </li>

              <li>
                <h1 className="mb-5 text-base font-medium md:text-lg">
                  Email:{" "}
                </h1>
                <p className="text-sm">info@urikainsights.com</p>
              </li>

              <li>
                <h1 className="mb-5 text-base font-medium md:text-lg">
                  Postal:{" "}
                </h1>
                <p className="text-sm">PMB Community 11, Tema</p>
              </li>

              <li>
                <h1 className="mb-5 text-base font-medium md:text-lg">
                  Location:{" "}
                </h1>
                <p className="text-sm">
                  3rd Floor A&C Mall Offices, Jungle Street
                </p>
                <p className="text-sm">East Legon, Accra, Ghana</p>
              </li>
            </ul>
          </div>
        </Fade>

        <Fade distance="40px" duration={1500} left>
          <form className="space-y-5">
            <TextInput
              required
              label="Name"
              type="text"
              value={name}
              handleChange={(e) => setName(e.target.value)}
            />

            <TextInput
              required
              label="Email"
              type="email"
              value={email}
              handleChange={(e) => setEmail(e.target.value)}
            />

            <TextInput
              required
              label="Phone"
              type="text"
              value={phone}
              handleChange={(e) => setPhone(e.target.value)}
            />

            <TextInput
              required
              label="Subject"
              type="text"
              value={subject}
              handleChange={(e) => setSubject(e.target.value)}
            />

            <TextInput
              required
              label="Message"
              value={message}
              handleChange={(e) => setMessage(e.target.value)}
              multiline={true}
              maxRows={6}
            />
          </form>

          <Button
            variant="container"
            size="large"
            onClick={handleMessage}
            className="w-40 text-white shadow-none bg-primary"
            disabled={
              name === "" ||
              subject === "" ||
              email === "" ||
              phone === "" ||
              message === ""
            }
          >
            Send Message
          </Button>
        </Fade>
      </div>
    </Layout>
  );
};

export default ContactUs;
