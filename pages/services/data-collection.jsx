import React from "react";
import Link from "next/link";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

//mui
import { Breadcrumbs } from "@mui/material";

//components
import Layout from "../../components/Layout";

const DataCollection = () => {
  return (
    <Layout>
      <div className="mt-10 bg-services-bg bg-cover h-[150px] md:h-[350px]" />

      <Slide up distance="30px" duration={2000}>
        <div className="relative md:rounded-md md:shadow-md p-6 md:px-10 md:py-16 md:w-[90vw] lg:w-[85vw] md:-top-40 md:mx-auto bg-white space-y-10 z-40 md:border">
          <Breadcrumbs>
            <Link href="/">
              <a>Home</a>
            </Link>

            <Link href="/services">
              <a>Services</a>
            </Link>

            <p>Field and Data Collection Services</p>
          </Breadcrumbs>

          <h1 className="leading-normal heading">
            URIKA Insights provides data collection and field services for
            clients who may require only information collection from their
            respondents on the field. Here, clients will usually supply us with
            a questionnaire and sample frame and we deliver the completed
            questionnaire back to them.
          </h1>
        </div>
      </Slide>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 space-y-4 md:px-16 lg:px-40">
          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              Additionally, we also provide data entry and data processing
              services to clients if they require it.
            </p>

            <p>
              We know that the proper execution of fieldwork is crucial to the
              end quality Insights project. With our experience and well-trained
              interviewers, you can trust us to deliver quality interviews on
              time, every time.
            </p>

            <p>We have:</p>

            <ol className="pl-5 mt-3 space-y-2 list-decimal">
              <li>
                A large field force that can collect data all across Ghana
              </li>
              <li>Highly trained field interviewers</li>
              <li>
                High quality standards and ethical approaches that are used
                during the data collection in order to maintain the integrity of
                the information gathered.
              </li>
            </ol>
          </div>
        </div>
      </Fade>
    </Layout>
  );
};

export default DataCollection;
