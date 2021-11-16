import React from "react";
import Link from "next/link";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

//mui
import { Breadcrumbs } from "@mui/material";

//components
import Layout from "../../components/Layout";

const CoporateTraining = () => {
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

            <p>Corporate Training Programmes</p>
          </Breadcrumbs>

          <h1 className="leading-normal heading">
            Many organisations trust and rely on URIKA Insights to help them
            meet their training and employee development needs.
          </h1>
        </div>
      </Slide>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 space-y-4 md:px-16 lg:px-40">
          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              We deliver outstanding workforce training programmes designed to
              achieve measureable results.
            </p>

            <p>
              Our training sessions are designed to be interactive and full of
              educative games that will reinforce key concepts and principles.
            </p>

            <p>
              We have several training programmes on different topics,
              including:
            </p>

            <ol className="pl-5 mt-3 space-y-2">
              <li>Customer service Excellence</li>
              <li>Communication skills</li>
              <li>Team Building: Developing high performance teams</li>
              <li>Business Etiquette</li>
              <li>Management Concepts</li>
              <li>Call Centre Training</li>
            </ol>
          </div>
        </div>
      </Fade>
    </Layout>
  );
};

export default CoporateTraining;
