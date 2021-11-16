import React from "react";
import Link from "next/link";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

//mui
import { Breadcrumbs } from "@mui/material";

//components
import Layout from "../../components/Layout";

const Brand = () => {
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

            <p>Brand Research</p>
          </Breadcrumbs>

          <h1 className="leading-normal heading">
            You know how hard it is to build a competitive brand. So do we. At
            URIKA Insights, we have developed a smart and robust proprietary
            tool called the 360 Brand Audit Model. With this tool we are able to
            conduct research into the brand health or customer-based brand
            equity of organisations
          </h1>
        </div>
      </Slide>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 space-y-4 md:px-16 lg:px-40">
          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              This provides our clients with insights into how consumers
              perceive their brand, why consumers choose their brand over
              competing brands and how organisations can express their brands
              effectively.
            </p>

            <p>
              We get into the mind of consumers and help your organisation
              determine such things as:
            </p>

            <ol className="pl-5 mt-3 space-y-2 list-decimal">
              <li>The relative strengths and weaknesses of your brand</li>
              <li>
                Brand position by comparing your brand against its in-market
                competitors{" "}
              </li>
              <li>
                The key attributes consumers associate with your brand and how
                they evaluate your brand
              </li>
              <li>Brand Awareness</li>
              <li>Brand loyalty and switching likelihood</li>
            </ol>

            <p>
              Our rich diagnostics tool for brand research helps provide
              strategic insights that clients can use to:
            </p>

            <ol className="pl-5 mt-3 space-y-2 list-decimal">
              <li>
                <span className="font-semibold">Reinforce</span> their current
                brand position
              </li>
              <li>
                <span className="font-semibold">Refocus</span> to build new
                linkages to its advantage{" "}
              </li>
              <li>
                <span className="font-semibold">Redefine</span> a perceived
                weakness so that it is perceived as a strength
              </li>
              <li>
                <span className="font-semibold">Remove</span> a competitor's
                perceived strength by repositioning attributes of their brand
              </li>
            </ol>

            <p>
              At URIKA Insights, we are committed to helping our clients build
              enduring brands that provide sustainable competitive advantage.
            </p>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pt-0 pb-20 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">The 360 Brand Audit Model</h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              To comprehensively understand Brand Equity and Brand Health on the
              marketplace, URIKA Insights has developed a proprietary tool
              called the 360 Brand Audit Model. Our model uses a unique
              qualitative and quantitative methodology that takes an all-around
              view of Brand Health and audits all dimensions that may add value
              or weaken brand equity. Our model also compensates for some of the
              common weaknesses found in other models used to evaluate Brand
              Health. The 360 Brand Audit Model gains insights from
              cross-section of all stakeholders of the organisation and measures
              Brand Health through seven dimensions:
            </p>
          </div>

          <div className="flex justify-center">
            <img src="/images/360audit.jpg" alt="" className="w-[460px]" />
          </div>
        </div>
      </Fade>
    </Layout>
  );
};

export default Brand;
