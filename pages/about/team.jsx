import React from "react";
import Link from "next/link";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

//mui
import { Breadcrumbs } from "@mui/material";

//components
import Layout from "../../components/Layout";
import TeamCard from "../../components/TeamCard";

const Team = () => {
  return (
    <Layout>
      <div className="bg-team-bg mt-10 bg-cover h-[150px] md:h-[350px]" />

      <Slide up distance="30px" duration={2000}>
        <div className="relative md:rounded-md md:shadow-md p-6 md:px-10 md:py-16 md:w-[90vw] lg:w-[85vw] md:-top-40 md:mx-auto bg-white space-y-10 z-40 md:border">
          <Breadcrumbs>
            <Link href="/">
              <a>Home</a>
            </Link>

            <Link href="/about">
              <a>About URIKA Research</a>
            </Link>
            <p>Team</p>
          </Breadcrumbs>

          <h1 className="leading-normal heading">
            URIKA Research is led by a team of young professionals with
            inquiring minds and a passion to provide clients with insightful
            research rooted in reality. To every research project we bring our
            extensive experience, global perspective, local knowledge and
            creativity, all tailored to our client's specific needs.
          </h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-base">
            <p>
              The wider team consists of Consultants, Junior Research Associates
              and Support Staff, all of which have many specific areas of
              expertise. We also boast 150 well trained Field Interviewers and
              Supervisors across the 10 regions of Ghana.
            </p>
          </div>
        </div>
      </Slide>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pt-0 pb-20 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Our Team</h1>

          <Fade left delay={1500} duration={1000} distance="30px" cascade>
            <div className="grid gap-10 md:grid-cols-2">
              <TeamCard name="Elorm Mensah" position="Research Manager">
                <p>
                  As Research Manager, Elorm is responsible for the design,
                  implementation and delivery of research for our clients. He
                  works on questionnaire design, sample implementation, quality
                  control, analysis and data interpretation, develop
                  presentations and make recommendations on findings to clients.
                </p>
              </TeamCard>

              <TeamCard name="Anthony Amuzu" position="Senior Research Analyst">
                <p>
                  Anthony has 19 years of experience in conducting quantitative
                  and qualitative research. He has extensive experience in
                  instrument development, sampling, data collection, data
                  analysis and report writing. He has worked with the Ghana
                  Statistical Service (GSS) on various national research
                  projects. In 2008, Anthony worked coordinator with the GSS on
                  the ‘’Job Tracking Survey’’; which looked at the supply and
                  demand dimensions of the Ghanaian Labour Market.
                </p>
              </TeamCard>

              <TeamCard
                name="Joojo Griffin"
                position="Qualitative/Field Manager"
              >
                <p>
                  Joojo has 8 years experience in handling qualitative research
                  projects as well as coordinating data collection process on
                  the field. Prior to joining URIKA Research, Joojo worked with
                  the Ghana Health Services and Virtual Access. He has vast
                  experience in research design and implementation, as well as a
                  strong experience in research management of projects.
                </p>
              </TeamCard>

              <TeamCard name="Naa Atswei" position="Senior Research Associate">
                <p>
                  Naa is a Senior Research Analyst. In her current role, she
                  focuses on research design, managing the data collection
                  process and making sure that rigorous sampling and ethical
                  approaches are used, so as to maintain the quality and
                  integrity of the data collected. Naa has extensive experience
                  in business-to-business research and the use of various
                  statistical models and tools. Naa holds a BSc in Mathematics
                  from the Kwame Nkrumah University of Science and Technology
                  and MSc in Environmetal Studies from the University of Ghana.
                </p>
              </TeamCard>

              <TeamCard
                name="Yaw Akyea"
                position="Senior Research Associate (Data Analysis)"
              >
                <p>
                  As a Senior Research Associate, Kofi is responsible for
                  organizing data collected from the field into meaningful
                  information. Applying innovative statistical tools and
                  research models; Kofi helps the research team deduct sound
                  interpretations from the data collected. He checks the
                  accuracy of the data and makes sure that data collected is of
                  high quality. He also works with the team to interpret the
                  quantitative data into relevant business information.
                </p>
              </TeamCard>

              <TeamCard
                name="Kwabena Gyekye Koranteng"
                position="Senior Research Associate (IT Support)"
              >
                <p>
                  Kwabena is responsible for integrating innovative
                  technological solutions into our research projects. Kwabenas'
                  input helps the team to work effectively through the
                  application of cutting-edge technology that exists in the
                  research industry. Kwabena is an expert at managing software
                  applications and network systems. He is a Microsoft Certified
                  IT Professional, and a Cisco Certified Network Associate.
                  Prior to joining URIKA Research, Kwabena worked with Barclays
                  Bank.
                </p>
              </TeamCard>
            </div>
          </Fade>
        </div>
      </Fade>
    </Layout>
  );
};

export default Team;
