import React from "react";
import Link from "next/link";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

//mui
import { Breadcrumbs } from "@mui/material";

//components
import Layout from "../components/Layout";

const ArticlesCaseStudies = () => {
  return (
    <Layout>
      <div className="bg-right bg-home-bg md:bg-cover h-[150px] md:h-[350px]" />

      <Slide up distance="30px" duration={2000}>
        <div className="relative md:rounded-md md:shadow-md p-6 md:px-10 md:py-16 md:w-[90vw] lg:w-[85vw] md:-top-40 md:mx-auto bg-white space-y-10 z-50 md:border">
          <Breadcrumbs>
            <Link href="/">
              <a>Home</a>
            </Link>

            <p>Research Articles And Case Studies</p>
          </Breadcrumbs>

          <h1 className="leading-normal heading">
            Intellectual curiosity and the application of knowledge to enhance
            organisational performance is our passion. We enjoy learning and
            sharing our insights with others.
          </h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              Peruse this section of our site which contains an array of
              articles, white papers and case studies that is compiled to
              provide organisations with current knowledge and examples of best
              business practices around the world.
            </p>
          </div>
        </div>
      </Slide>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 -mt-10 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Articles</h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              Here is a list of business articles put together from various
              sources by the URIKA Research team. The articles are in pdf
              format.
            </p>

            <p className="text-sm font-semibold">No articles available</p>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 -mt-10 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">White Papers</h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              A white paper is a paper that is research-based and includes an
              educated opinion on a topic. Below is a list of white papers. The
              white papers are in pdf format.
            </p>

            <p className="text-sm font-semibold">No white papers available</p>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 -mt-10 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Case Studies</h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              Below is a list of business case studies highlights
              thought-provoking perspectives on critical business issues. The
              case studies are in pdf format.
            </p>

            <p className="text-sm font-semibold">No case studies available</p>
          </div>
        </div>
      </Fade>
    </Layout>
  );
};

export default ArticlesCaseStudies;
