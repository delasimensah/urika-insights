import React from "react";
import Link from "next/link";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

//mui
import { Breadcrumbs } from "@mui/material";

//components
import Layout from "../../components/Layout";

const Techniques = () => {
  return (
    <Layout>
      <div className="bg-right bg-home-bg md:bg-cover h-[150px] md:h-[350px]" />

      <Slide up distance="30px" duration={2000}>
        <div className="relative md:rounded-md md:shadow-md p-6 md:px-10 md:py-16 md:w-[90vw] lg:w-[85vw] md:-top-40 md:mx-auto bg-white space-y-10 z-50 md:border">
          <Breadcrumbs>
            <Link href="/">
              <a>Home</a>
            </Link>

            <p>About URIKA Research</p>
          </Breadcrumbs>

          <h1 className="leading-normal heading">
            We pursue every research work with passion, intellectual curiosity
            and high degree of personal interest. We also have the flexibility
            to adapt our methods to fit our clients' unique needs.
          </h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              It is this personal touch that many clients find most exciting
              about working with URIKA Research, For us it's the satisfaction
              that comes from helping our clients shine.
            </p>
          </div>
        </div>
      </Slide>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 -mt-10 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Our History</h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              Established in 2009, URIKA Research is a young and dynamic
              research firm defined by its commitment to employ innovative
              research approaches that ensure clients get dependable insights
              and the most perspective from their research.
            </p>
            <p>
              Integrating research and technology; we provide a unique ability
              to combine primary research, secondary research, competitor
              intelligence, and expert insight to address our clients' strategic
              research needs. Our expertise is focused on areas of Brand
              Research, Customer Experience Research and Management, Product and
              Concept Research, Employee Satisfaction Research, Competitor
              Intelligence, Social and Opinion Research,and Ad hoc Research for
              organisations who want a one-time research designed for a
              particular purpose. We also provide corporate training programmes
              to organisations. In the near future, we plan to expand out
              portfolio of services to include Advertising Research and Media
              Research
            </p>

            <p>
              URIKA Research works with clients from a broad range of industries
              that include: Financial Services, Retail and FMCG, Hotel and
              Restaurants, Call Centres, Telecommunications, and Automotive Car
              Dealerships.
            </p>

            <h1 className="leading-normal heading">
              <span className="text-white bg-primary">
                What makes us stand out is that we care about how our clients
                use their research results. We consult with our clients on how
                to integrate the research findings into their operations and see
                it work for them.
              </span>
            </h1>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pt-0 pb-20 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Our Vision</h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              Our Vision at URIKA Research to be become a Ghanaian grown premier
              research company that delivers world class research knowledge to
              businesses, government, and organisations in Africa so they can be
              sustainable and compete intelligently on the global stage.
            </p>
          </div>
        </div>
      </Fade>
    </Layout>
  );
};

export default Techniques;
