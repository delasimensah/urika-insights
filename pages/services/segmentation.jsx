import React from "react";
import Link from "next/link";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

//mui
import { Breadcrumbs } from "@mui/material";

//components
import Layout from "../../components/Layout";

const Segmentation = () => {
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

            <p>Segmentation Research</p>
          </Breadcrumbs>

          <h1 className="leading-normal heading">
            Segmentation research delivers strategic marketing information that
            is needed in today's challenging business environment where new
            markets and new product categories emerge and traditional markets
            fade away.
          </h1>
        </div>
      </Slide>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 space-y-4 md:px-16 lg:px-40">
          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              Market Segmentation allows organisations to identify unique
              segments in the market so they can tailor product features,
              services, distribution, pricing, and marketing communication
              messages specifically to each segment. Segmentation research
              allows businesses to quantify the sizes and potential economic
              value of each segment, as well as describe the composition of each
              segment.
            </p>

            <p>
              Market Segmentation helps a company to increase its targeting
              precision. So with market segmentation, products and services can
              now be targeted at customers based on their demographic traits,
              lifestyle preferences, geographic locations, or on their
              purchasing or usage behaviour.
            </p>

            <p>Managers rely on our segmentation research to:</p>

            <ol className="pl-5 mt-3 space-y-2 list-decimal">
              <li>Customize service offerings to align with customer needs</li>
              <li>
                Optimize allocation of sales and marketing resources by
                targeting high-value customers segments{" "}
              </li>
              <li>
                Increase promotional impact by positioning products and
                customizing messages to align with segment-specific orientation
              </li>
            </ol>

            <p>
              Our market segmentation research helps clients keep their eye on
              the ball.{" "}
            </p>
          </div>
        </div>
      </Fade>
    </Layout>
  );
};

export default Segmentation;
