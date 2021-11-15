import React from "react";
import Link from "next/link";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

//mui
import { Breadcrumbs } from "@mui/material";

//components
import Layout from "../../components/Layout";

const ProductDevelopment = () => {
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

            <p>Product Development Research</p>
          </Breadcrumbs>

          <h1 className="leading-normal heading">
            The ability to create and sustain a meaningful competitive advantage
            requires a robust new product development pipeline. Ensuring that
            new products receive a favourable reception in the marketplace
            requires sound research and timely customer input throughout the
            product development process.
          </h1>
        </div>
      </Slide>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 space-y-4 md:px-16 lg:px-40">
          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>Our Product Development Research helps managers to:</p>

            <ol className="pl-5 mt-3 space-y-2 list-decimal">
              <li>
                Understand the perceived benefits of the new product concept
                from the customer's viewpoint
              </li>
              <li>Know the weaknesses in the new product concept </li>
              <li>Identify likely interest in the new product concept</li>
              <li>
                Identify potential target market for the new product concepts
              </li>
              <li>
                Identify pricing issues and how much customers will be willing
                to pay for the new product or service{" "}
              </li>
              <li>Develop appropriate market entry strategies</li>
            </ol>
          </div>
        </div>
      </Fade>
    </Layout>
  );
};

export default ProductDevelopment;
