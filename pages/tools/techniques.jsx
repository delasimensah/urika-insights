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
      <div className="mt-10 bg-research-bg bg-cover h-[150px] md:h-[350px]" />

      <Slide up distance="30px" duration={2000}>
        <div className="relative md:rounded-md md:shadow-md p-6 md:px-10 md:py-16 md:w-[90vw] lg:w-[85vw] md:-top-40 md:mx-auto bg-white space-y-10 z-40 md:border">
          <Breadcrumbs>
            <Link href="/">
              <a>Home</a>
            </Link>

            <p>Tools</p>

            <p>Techniques</p>
          </Breadcrumbs>

          <h1 className="leading-normal heading">
            In order to gain quantifiable and non-quantifiable insights into the
            behaviour, motivations and attitudes of sample populations, we use
            qualitative and quantitative approaches that include:
          </h1>
        </div>
      </Slide>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">In-Depth Interviews</h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              In-depth interviews are interviews conducted face â€“to-face, in
              which the subject matter of the interview is explored in detail
              using unstructured and flexible approach. This method is applied
              to develop deeper understanding of consumer attitudes and the
              reasons behind specific behaviours.
            </p>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 -mt-10 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Focus Groups</h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              Focus groups are depth interviews undertaken with a group of
              respondents. URIKA Insights conducts focus groups to obtain
              implicit, unstructured, visceral, and uncensored ideas and
              reactions that typically cannot be obtained through surveys.
              Unlike individual interviews, the effects arising from social
              behaviour and the interpersonal dynamics of the group members are
              critical to the success of this approach. The views or
              contribution of one person may become the stimulus for another
              personâ€™s contribution or may initiate discussion, debate and
              even arguments.
            </p>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 -mt-10 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Executive Interviews</h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              This type of survey involves interviewing businesspeople at their
              place of work about industrial or business products or services.
            </p>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 -mt-10 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Self-Administered Paper surveys</h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              This type of survey involves respondents personally fill out paper
              questionnaires.
            </p>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 -mt-10 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Telephone Surveys</h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              This method is used to interview respondents over the telephone.
              Unlike face-to-face interviews, the need for interviewer
              travelling time and expenses is eliminated. Also this approach
              allows to be undertaken nationally and internationally from one
              central location.
            </p>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 -mt-10 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Online Surveys</h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              This method involves using either email surveys or web surveys.
              Online surveys are increasingly becoming popular among clients
              because it is cheaper and faster to administer.
            </p>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 -mt-10 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Panel Research</h1>

          <div className="space-y-3 text-sm text-gray-600 md:text-lg">
            <p>
              Panels are established to facilitate ongoing consultation. Here
              comparative data is collected from the sampled respondents on more
              than one occasion. Panels can consist of individuals, households
              or organisations, and can provide dynamic information on:
            </p>

            <ol className="pl-5 mt-3 space-y-2 list-decimal">
              <li>Broad trends in a market.</li>
              <li>
                Case history of specific respondents (e.g. level of repeat
                purchases).
              </li>
              <li>
                Attitudes and reactions over time to particular products or
                services.
              </li>
            </ol>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 -mt-10 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Mystery shopping </h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              Application of this method is useful for examining the operation
              and characteristics of customer service offices or shops (speed of
              service, competence, waiting time, quality, cleanliness, etc).
              Mystery shopping is not only applicable for studying the actual
              process of the serving, but also the quality of the information
              service or the persuading abilities of those being in touch with
              customers.
            </p>
          </div>
        </div>
      </Fade>
    </Layout>
  );
};

export default Techniques;
