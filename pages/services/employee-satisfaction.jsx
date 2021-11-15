import React from "react";
import Link from "next/link";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

//mui
import { Breadcrumbs } from "@mui/material";

//components
import Layout from "../../components/Layout";

const EmployeeSatisfaction = () => {
  return (
    <Layout>
      <div className="mt-10 bg-services-bg md:bg-cover h-[150px] md:h-[350px]" />

      <Slide up distance="30px" duration={2000}>
        <div className="relative md:rounded-md md:shadow-md p-6 md:px-10 md:py-16 md:w-[90vw] lg:w-[85vw] md:-top-40 md:mx-auto bg-white space-y-10 z-40 md:border">
          <Breadcrumbs>
            <Link href="/">
              <a>Home</a>
            </Link>

            <Link href="/services">
              <a>Services</a>
            </Link>

            <p>Employee Satisfaction Research</p>
          </Breadcrumbs>

          <h1 className="leading-normal heading">
            Organisational leaders often say people are their greatest asset.
            This has become a management cliche, especially with organisations
            doing little to understand their employees aspirations and
            commitment to their work.
          </h1>
        </div>
      </Slide>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 space-y-4 md:px-16 lg:px-40">
          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              Employees play a crucial role in customer relationships. Employees
              also do more than deliver customer service, they personalize the
              relationship between the customer and the organisation. That is
              why it is important to measure your employees commitment to the
              organisation and their morale to deliver high quality service at
              all times. A positive employee climate will enhance customer
              experience, contributing to loyalty and consequently the bottom
              line.
            </p>

            <p>Our Employee satisfaction research allows you to:</p>

            <ol className="pl-5 mt-3 space-y-2 list-decimal">
              <li>
                Assess how happy and satisfied employees are with your
                organisation and its management
              </li>
              <li>Promptly track and resolve employee issues </li>
              <li>Provide a culture of communication</li>
              <li>Pinpoint factors that drive employee loyalty</li>
              <li>
                Determine which organisational culture needs reinforcement and
                which one needs changing.
              </li>
            </ol>

            <p>
              Engaging your employees through Employee satisfaction research is
              an essential part of your organisation's well being. Effectively
              understanding and supporting staff is a pre-requisite to providing
              exceptional customer service.
            </p>

            <p>
              URIKA Research is committed to helping our clients foster a
              culture of service excellence, and employees play a pivotal role
              in creating this culture. Our Employee Satisfaction Research can
              assist you to better understand, motivate and thereby optimize
              your human capital to improve employee performance and positively
              impact your business results.
            </p>
          </div>
        </div>
      </Fade>
    </Layout>
  );
};

export default EmployeeSatisfaction;
