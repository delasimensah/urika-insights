import React from "react";
import Link from "next/link";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

//mui
import { Breadcrumbs } from "@mui/material";

//components
import Layout from "../../components/Layout";

const CustomerExperience = () => {
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

            <p>360 Customer Experience Optimization</p>
          </Breadcrumbs>

          <h1 className="leading-normal heading">
            Customer experiences play a critical role in keeping organisations
            profitable and competitive. To help our clients strategically
            deliver superior service experiences to their customers, URIKA
            Research has put together an integrated suite of tools called the
            360 Customer Experience Optimizer (360 CEO).
          </h1>
        </div>
      </Slide>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 space-y-4 md:px-16 lg:px-40">
          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              The 360 CEO pulls together all the service performance measures,
              thereby providing managers of customer service experience a
              comprehensive view of
            </p>

            <ol className="pl-5 mt-3 space-y-2 list-decimal">
              <li>
                How well their organisation is attaining the service standards
                (Mystery Shopping){" "}
              </li>
              <li>
                How customers view the organisation ( Customer Satisfaction
                surveys/measures of complaints){" "}
              </li>
              <li>
                How effective is the organisation building relationships
                (Retention rates/ measures of cross-selling)
              </li>
              <li>
                How effective is the organisation at selling (Sales figures){" "}
              </li>
            </ol>

            <p>
              What makes 360 CEO a robust tool for optimizing and strategically
              managing the quality of a service delivery process is that, unlike
              traditional approaches to service measurements; where there is
              very little integration between measures of the service
              performance such as customer satisfaction, staff attitudes,
              mystery shopping, customer complaints, etc; the 360 CEO aggregates
              all the service performance measures, thereby providing the
              comprehensive overview required for excellent service management.
              With 360 CEO, great customer service no longer becomes a mere
              rhetoric; it becomes an achievable and sustainable plan that
              cultivates customer loyalty.
            </p>

            <p>
              360 CEO tools and methods can be grouped into four categories:
            </p>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pt-0 pb-20 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Customer and Employee Feedback</h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              Using a combination of customer satisfaction exit interviews,
              follow-up interviews and employee feedback, we able to gather
              useful information that can be fed into the 360 Customer
              Experience Optimizer (360 CEO) process to continuously fine tune
              the service experience delivered to your customers.
            </p>

            <p>
              Customer Satisfaction Exit Interviews are taken within minutes
              after the service experience. This can take a more targeted
              approach by obtaining feedback from the customers about a specific
              service encounter soon after the interaction occurs. Here
              customers can be targeted by profile, by purchases or
              non-purchases made, or can be selected completely at random.
            </p>

            <p>
              Follow-up Interviews allow us to monitor a cross-sectional group
              of the same customers continuously, anytime they interact with
              your organisation. Through this method we are able to monitor the
              consistency of the service quality, and quickly take corrective
              measures if the service quality falls. These follow-up interviews
              are either done by telephone interviews or face-to-face
              interviews.
            </p>

            <p>
              All organisations depend on employees to deliver quality service.
              Employees' feelings about the policies, practices and procedures
              with which they are engaged are important factors to their ability
              and willingness to satisfy customers. Measures of employee
              satisfaction and commitment of employees to specific policies,
              practices and procedures that support customer-centric behaviour
              have an influence on customer experiences and overall business
              performance.
            </p>

            <p>
              Combining the three approaches of; customer satisfaction exit
              interviews, follow-up interviews, and employee satisfaction
              interviews, we are able to obtain valuable feedback that allows
              management to quickly adapt the service delivery process to be
              more responsive to their customers' needs.
            </p>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pt-0 pb-20 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Performance Audits and Monitoring</h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              While customer feedback is essential; on their own they do not
              provide sufficiently detailed information to allow management to
              identify and correct the specific weaknesses in the service
              delivery process. This is because customers usually don't remember
              the specific detail of the service encounter; they can only give
              an overall impression of the service. The performance audits and
              monitoring approach measures the process rather than the outcomes
              of the service encounter. The emphasis is on the service
              experience as it unfolds, looking at which activities and
              procedures do or do not happen rather than gathering opinions
              about the service experience.
            </p>

            <p>
              Performance audits and monitoring is done through two
              observational measurement methods. Performance audits involve
              using mystery shoppers to who pose as actual customers, experience
              the service, and report back. Monitoring involves the use of
              trained objective observers who monitor actual customer
              interactions.
            </p>

            <p>
              Performance audits and monitoring augment customer feedbacks by
              providing essential information about specific service behaviours
              and the service environment. The Information gathered allows
              precise comparisons among employees, business branches, regions,
              and service channels to ensure that standards are consistently
              followed.
            </p>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pt-0 pb-20 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Learning Management</h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              Capturing and integrating information about the quality of service
              delivery and customer impressions is important, but it is only the
              first step. The information needs to loop back into training
              initiatives so that knowledge and performance deficiencies among
              employees are directly and continually addressed.
            </p>

            <p>
              Lessons are designed to correspond to specific skill sets that are
              measured through customer feedback, monitoring and performance
              audits. Thus, the information that is deployed to employees can
              directly address deficits in the service delivery process.
            </p>

            <p>
              Lessons are conducted combining two approaches.The first is the
              classroom type learning which involves only a small group of
              employees at a time, or done on branch to branch basis, so that
              material is relevant to their specific needs. The second approach
              is using very short e-mail lessons sent at regular intervals,
              allowing employees to receive focused knowledge reinforcement
              without appreciably interfering with their workflow.
            </p>

            <p>
              The learning management process is valuable not only for its
              ability to reinforce specific behaviours, but also for its
              capability of quickly integrating shortcomings in the service
              delivery process into the lesson plan, so that poor service
              delivery gaps are quickly closed.
            </p>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pt-0 pb-20 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Incentive Programmes</h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              360 Customer Experience Optimizer (360 CEO) provides a
              comprehensive metrics for rewarding service staff at all levels of
              the organisation. The data collected is aggregated, weighted and
              scored, allowing comparisons and benchmarking among branches and
              employees. These scores can then be linked to periodic bonuses,
              recognition or redemption services.
            </p>

            <p>
              The motivational power of this approach lies in the fact that the
              metrics it generates are relevant, easy to understand, frequently
              reported, and fair. Because the data is continuously viewable, and
              the criteria are clear and achievable, employees know they have
              the power to affect the outcome.
            </p>
          </div>
        </div>
      </Fade>
    </Layout>
  );
};

export default CustomerExperience;
