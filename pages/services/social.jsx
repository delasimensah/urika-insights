import React from "react";
import Link from "next/link";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

//mui
import { Breadcrumbs } from "@mui/material";

//components
import Layout from "../../components/Layout";

const Social = () => {
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

            <p>Opinion and Social Research</p>
          </Breadcrumbs>

          <h1 className="leading-normal heading">
            Public opinion and perceptions on key social issues like public
            health, politics, the business environment, and education has a
            profound impact not only on governments, but also on the
            profitability of companies.
          </h1>
        </div>
      </Slide>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 space-y-4 md:px-16 lg:px-40">
          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              We have expertise in the design, validation, and execution of
              public opinion surveys. Through the application of rigorous
              sampling and survey quality-control procedures we produce accurate
              representations of the views of the population.
            </p>

            <p>Organisations rely on our Opinion and Social Research to:</p>

            <ol className="pl-5 mt-3 space-y-2">
              <li>
                Understand new social trends and perceptions that exist within
                the society
              </li>
              <li>Gauge public opinion on key issues</li>
              <li>
                Research into public health, politics, education, environment,
                etc
              </li>
            </ol>
          </div>
        </div>
      </Fade>
    </Layout>
  );
};

export default Social;
