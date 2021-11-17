import React from "react";
import Link from "next/link";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

//mui
import { Breadcrumbs } from "@mui/material";

//components
import Layout from "../../components/Layout";
import ServicesHero from "../../components/ServicesHero";

const MysteryShopping = () => {
  return (
    <Layout>
      <ServicesHero />

      <Slide up distance="30px" duration={2000}>
        <div className="relative md:rounded-md md:shadow-md p-6 md:px-10 md:py-16 md:w-[90vw] lg:w-[85vw] md:-top-40 md:mx-auto bg-white space-y-10 z-40 md:border">
          <Breadcrumbs>
            <Link href="/">
              <a>Home</a>
            </Link>

            <Link href="/services">
              <a>Services</a>
            </Link>

            <p>Mystery Shopping</p>
          </Breadcrumbs>

          <h1 className="leading-normal heading">
            Our Mystery Shopping research provides a great tool to evaluate your
            customer service standards. Using trained observers who pose as
            customers or potential customers, we are able to accurately identify
            the deficiencies in your service delivery processes at all points of
            contact with the customer.
          </h1>
        </div>
      </Slide>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 space-y-4 md:px-16 lg:px-40">
          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              The systematic approach we employ to mystery shopping provides an
              objective snapshot of the customer's experience at the frontline,
              allowing you to:
            </p>

            <ol className="pl-5 mt-3 space-y-2 list-decimal">
              <li>Monitor employee compliance with procedures</li>
              <li>
                Know how polite, courteous, knowledgeable, and responsive your
                frontline employees are{" "}
              </li>
              <li>Recognize and reward valuable employees</li>
              <li>Indentify training needs and measure training efforts</li>
              <li>
                Benchmark service standards against your competition and the
                market as a whole
              </li>
              <li>Track your service performance over time</li>
            </ol>

            <p>
              Our online reporting platform compiles all mystery shopping data
              into a reporting interface designed to provide a comprehensive
              view of the results within 48 hours after the mystery shopping is
              conducted.
            </p>

            <p>
              We provide a range of tailor-made and cost effective mystery
              shopping services aimed at delivering actionable feedback to our
              clients
            </p>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pt-0 pb-20 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Video Mystery Shopping</h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              Video mystery shopping is the latest and most powerful way of
              experiencing the reality of service being delivered to your
              customers. It is a really effective way of capturing your true
              levels of service. It also allows you to effectively compare your
              service performance against the prescribed service standards.
            </p>

            <p>
              Using state-of-the-art hidden digital cameras, we record the
              entire service experience. The mystery shoppers will enact typical
              face-to-face situations with your frontline staff, objectively
              evaluating their levels of courtesy, what form of greeting they
              used, personal presentation, product knowledge, helpfulness,
              length of queue, speed of service delivery and many more service
              attributes. Video recordings from the mystery shopping can be
              incorporated into training programmes for employees.
            </p>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pt-0 pb-20 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Telephone Mystery Shopping</h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              Recorded telephone mystery shopping is an effective means of
              measuring the quality of service delivered to your customers over
              the telephone. Telephone mystery shopping provides insight into
              the way your calls are answered, the telephone manners of your
              employees, and the way your employees deal with customer
              enquiries.
            </p>

            <p>
              URIKA Insights uses the latest digital recording systems to ensure
              the highest quality of output, including call editing to remove
              audio interference and maximize call clarity.
            </p>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pt-0 pb-20 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Internet/Email Mystery Shopping</h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              With the increasing volume of business traffic via the internet,
              our services include web based and email mystery shopping. We will
              evaluate visitors experiences when they visit your website, the
              ease at which customers can use your online services, the response
              time to customers email enquiries, and so forth.
            </p>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pt-0 pb-20 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Competitor Mystery Shopping</h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              We can also mystery shop your close competitors using the same
              criteria we used for your mystery shopping so you can effectively
              assess the competitiveness of your organisation's service delivery
              quality by benchmarking it against the offerings of your
              competitors.
            </p>

            <p>
              When conducting competitor mystery shopping, we strictly adhere to
              the ethical principles involved so not to infringe on the rights
              of your competitors.
            </p>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pt-0 pb-20 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Incentive-Base Mystery Shopping</h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              Whiles mystery shopping is considered as an effective diagnostic
              tool for identifying the weaknesses in your organisations service
              delivery process, it can also be effectively used to encourage,
              develop and motivate your employees by linking mystery shopping
              results with appraisals and reward mechanisms.
            </p>

            <p>
              Mystery shopping can be used to reward service teams and
              individuals who are performing well. If implemented well,
              incentive-based mystery shopping can motivate and encourage
              employees to consistently main high level of quality customer
              service.
            </p>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pt-0 pb-20 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Syndicated Mystery Shopping</h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              Our Syndicated Mystery Shopping is a collective approach of
              conducting mystery shopping for a number of different client
              organisations, within the same industry, during the same period.
            </p>

            <p>
              This collective approach to mystery shopping brings significant
              benefits to participating organisations.
            </p>

            <ol className="pl-5 mt-3 space-y-2 list-decimal">
              <li>
                As compared to a stand-alone mystery shopping conducted only for
                your organisation, this syndicated study enables your
                organisation to compare their service quality relative to their
                competitors and the general industry norms.{" "}
              </li>
              <li>
                The syndicated mystery shopping can bring significant cost
                savings to participating organisations because the cost involved
                in conducting the mystery shopping is shared, and organisations
                do not have to pay extra for the competitor intelligence they
                receive.{" "}
              </li>
              <li>
                The mystery shopping is conducted every quarter, this allows
                organisations to monitor improvement trends in the service
                delivery process, and quickly take corrective measures if the
                service levels dip.
              </li>
            </ol>

            <p>
              Sign up now for the Syndicated Mystery Shopping and also enjoy the
              benefits of video mystery shopping and online reporting systems.
            </p>
          </div>
        </div>
      </Fade>
    </Layout>
  );
};

export default MysteryShopping;
