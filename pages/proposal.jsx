import { useState } from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import { services } from "../utils/subLinks";

//mui
import {
  Breadcrumbs,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
} from "@mui/material";

//components
import Layout from "../components/Layout";
import TextInput from "../components/TextInput";

const Proposal = () => {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [comments, setComments] = useState("");

  const handleRequest = async (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className="h-full px-5 mx-auto space-y-10 py-14 md:px-0 md:w-4/5 lg:w-3/5">
        <Breadcrumbs>
          <Link href="/">
            <a>Home</a>
          </Link>

          <p>Request Proposal</p>
        </Breadcrumbs>

        <p className="text-lg text-center">
          If you have a research need, we are happy to put together a proposal
          for you. Our research work is tailored to clients' specific needs.
          Please fill the form below and we will get back to you as soon as
          possible.
        </p>

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
              label="Organization"
              type="text"
              value={organization}
              handleChange={(e) => setOrganization(e.target.value)}
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

            <FormControl fullWidth color="secondary">
              <InputLabel>Service *</InputLabel>
              <Select
                required
                label="Service"
                color="secondary"
                value={service}
                defaultValue="How can we help?"
                onChange={(e) => setService(e.target.value)}
              >
                {services.map((service, idx) => {
                  return (
                    <MenuItem key={idx} value={service} className="capitalize">
                      {service}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            <TextInput
              label="Comments"
              value={comments}
              handleChange={(e) => setComments(e.target.value)}
              multiline={true}
              maxRows={6}
            />
          </form>

          <Button
            variant="container"
            size="large"
            onClick={handleRequest}
            className="w-40 text-white shadow-none bg-primary"
            disabled={
              name === "" ||
              organization === "" ||
              email === "" ||
              phone === "" ||
              service === ""
            }
          >
            Request
          </Button>
        </Fade>
      </div>
    </Layout>
  );
};

export default Proposal;
