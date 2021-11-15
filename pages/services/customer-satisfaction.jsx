import React from "react";
import Link from "next/link";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

//mui
import { Breadcrumbs } from "@mui/material";

//components
import Layout from "../../components/Layout";

const CustomerSatisfaction = () => {
  return (
    <Layout>
      <div className="mt-10 bg-services-bg bg-cover h-[150px] md:h-[350px]" />

      <Slide up distance="30px" duration={2000}>
        <div className="relative md:rounded-md md:shadow-md p-6 md:px-10 md:py-16 md:w-[90vw] lg:w-[85vw] md:-top-40 md:mx-auto bg-white space-y-10 z-50 md:border">
          <Breadcrumbs>
            <Link href="/">
              <a>Home</a>
            </Link>

            <Link href="/services">
              <a>Services</a>
            </Link>

            <p>Customer Satisfaction Research</p>
          </Breadcrumbs>

          <h1 className="leading-normal heading">
            In today's competitive marketplace, choice is abundant and customers
            have more control. Consequently, organisations must be intelligent
            about their customers and make every effort to satisfy their needs.
          </h1>
        </div>
      </Slide>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 space-y-4 md:px-16 lg:px-40">
          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              Measuring customer satisfaction is fundamental to improving
              standards of customer care and retention. In order to enhance the
              service you offer, it is vital to talk to your customers and
              gather feedback on what they found to be good and what they found
              to be lacking in the service you gave them
            </p>

            <p>
              Our Customer Satisfaction Research gives the knowledge to make
              informed decisions on how to:
            </p>

            <ol className="pl-5 mt-3 space-y-2 list-decimal">
              <li>Optimize customer satisfaction</li>
              <li>Eliminate customer dissatisfaction </li>
              <li>Increase customer retention</li>
              <li>Determine optimal customer service standards</li>
              <li>Maximise ROI through customer satisfaction strategies.</li>
            </ol>

            <p>
              The knowledge you receive from our Customer Satisfaction Research
              helps management to better understand customers' needs and how to
              better serve those needs.
            </p>
          </div>
        </div>
      </Fade>
    </Layout>
  );
};

export default CustomerSatisfaction;
