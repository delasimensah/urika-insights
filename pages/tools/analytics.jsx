import React from "react";
import Link from "next/link";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

//mui
import { Breadcrumbs } from "@mui/material";

//components
import Layout from "../../components/Layout";

const Analytics = () => {
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

            <p>Analytics</p>
          </Breadcrumbs>

          <h1 className="leading-normal heading">
            At URIKA Insights, we understand that the quality of analysis
            determines the value of information. We employ a refined suite of
            statistical tools that draw out accurate, insightful and actionable
            findings from the research data.
          </h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              While some of these approaches are not always necessary to address
              client objectives, they can often make the difference between
              researches that tells us what we already know versus research that
              shows us what we never expected.
            </p>
            <p>
              Our strength is our ability to match the client problem or issue
              to the correct analytical approach, and then design a research
              study around that approach. Our team of analysts and statisticians
              offer a broad range of advanced analytical techniques to transform
              data into actionable information.
            </p>
          </div>
        </div>
      </Slide>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Cluster Analysis</h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              Questions that the analysis can address:
              <ol className="pl-5 mt-3 space-y-2 list-decimal">
                <li>
                  How can we better understand and meet the needs of a diverse
                  customer base?
                </li>
                <li>Do different types of customers want different things?</li>
                <li>
                  How do we communicate effectively with diverse customer
                  groups?
                </li>
              </ol>
            </p>
            <p>
              Mindful of the fact that markets are comprised of individuals with
              distinct needs and preferences; our research team uses cluster
              analysis to understand how to better meet the needs of diverse
              markets. The analysis works by using survey data and other types
              of data to group individuals into like-minded segments.
            </p>
            <p>
              We develop detailed descriptions of the characteristics of each
              segment, estimate the size of each segment, create simulation
              programs that classify individuals into segments based on their
              responses to a series of questions and provide algorithms to
              recreate these segments.
            </p>

            <h1 className="leading-normal heading">
              <span className="text-white bg-primary">
                We use cluster analysis to develop targeted communications that
                appeal to distinct segments, and to assist clients in tailoring
                products and services to better meet the needs of the market.
              </span>
            </h1>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 -mt-10 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Conjoint Analysis </h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              Questions that the analysis can address:
              <ol className="pl-5 mt-3 space-y-2 list-decimal">
                <li>
                  What is the optimal mix of product features for maximizing our
                  market share?
                </li>
                <li>What product features drive the purchase decision?</li>
                <li>
                  What product features should be emphasized in our
                  communications campaign?
                </li>
              </ol>
            </p>
            <p>
              URIKA Insights applies conjoint techniques to evaluate the
              viability of new products or services, and to determine the
              optimal mix, or bundle, of features that will motivate customer
              purchase.
            </p>
            <p>
              Conjoint analysis utilizes the logic of the experimental method to
              illustrate the differential impact that attributes of a product or
              service have on customer choice. One of the strengths of the
              analysis lies in its ability to model the process that individuals
              actually go through when they make purchase decisions. In most
              purchase situations buyers make tradeoffs between features, for
              example, between comfort and style, and price and convenience. The
              conjoint technique is structured so that tradeoffs must be made
              between features.
            </p>
            <p>
              In one application of conjoint, Discrete Choice Modeling (DCM)
              research participants evaluate products with specific features
              (e.g., price, brand name) alongside each other, and they choose
              the product they prefer most. Different sets of products are
              presented to each participant, and the levels of features are
              manipulated (e.g., price presented as 10Ghc, 20Ghc or 30Ghc) to
              evaluate the impact of each feature on product choice.
            </p>

            <h1 className="leading-normal heading">
              <span className="text-white bg-primary">
                Our analysis illustrates the importance of particular features
                in motivating product choice, as well as the impact of specific
                levels of features on choice.
              </span>
            </h1>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 -mt-10 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">
            Correspondence Analysis / Multidimensional Scaling / Perceptual
            Mapping
          </h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              Questions that the analysis can address:
              <ol className="pl-5 mt-3 space-y-2 list-decimal">
                <li>
                  How are we perceived relative to our competitors in the
                  marketplace?
                </li>
                <li>What are our brand image strengths and weaknesses?</li>
                <li>
                  Does our brand image reflect key elements of our brand
                  communications strategy?
                </li>
              </ol>
            </p>
            <p>
              URIKA Insights uses these techniques to understand how consumers
              perceive companies, and products and services, in the marketplace.
              For example, by having individuals evaluate a set of competitor
              companies on key image dimensions, we create visual maps
              illustrating how companies are perceived relative to each other in
              the minds of consumers. We then identify strengths and weaknesses
              of companies on these key image dimensions, as well as important
              positioning opportunities. And we evaluate the extent to which a
              company's image is in line with the image it seeks to build
              through its communications strategy.
            </p>

            <h1 className="leading-normal heading">
              <span className="text-white bg-primary">
                We also use these analytical techniques to evaluate competing
                products and services. We identify current brand assets and
                liabilities, and make suggestions regarding how brands should be
                modified or positioned.
              </span>
            </h1>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 -mt-10 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">
            Discriminant Analysis / Logistic Regression Analysis / Logit
            Analysis
          </h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              Questions that the analysis can address:
              <ol className="pl-5 mt-3 space-y-2 list-decimal">
                <li>
                  Which customers are most likely to purchase a product or
                  subscribe to a service?
                </li>
                <li>
                  What characteristics are most important in driving preferences
                  or predicting outcomes?
                </li>
              </ol>
            </p>
            <p>
              URIKA Insights employs these predictive techniques in cases where
              the goal is to predict group membership from a set of
              characteristics or variables. For example, we may want to learn
              which variables predict preferences between two competing brands.
            </p>
            <p>
              In Discriminant analysis, we determine the extent to which the set
              of predictors (which must be continuous as opposed to discrete
              variables) can be combined into a "function", which is then used
              to predict which group a respondent belongs to. If the function is
              accurate in predicting actual brand preference (the function
              predicted that the respondent would prefer Brand X, and the
              respondent actually does prefer Brand X), we learn which
              combination of characteristics is most important for
              "discriminating" between preferences for Brand X and preferences
              for Brand Y.
            </p>

            <h1 className="leading-normal heading">
              <span className="text-white bg-primary">
                We use Logistic Regression analysis to predict group membership.
                However, unlike Discriminant analysis, the predictors can be
                either continuous (e.g., a score on an index) or discrete
                (gender, occupation)
              </span>
            </h1>

            <p>
              We also use Logit Analysis when the goal is to predict a discrete
              outcome (e.g., occupational category) from a set of discrete
              predictors.
            </p>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 -mt-10 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Factor Analysis</h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              Questions that the analysis can address:
              <ol className="pl-5 mt-3 space-y-2 list-decimal">
                <li>
                  Which products or services are likely to bundle well together
                  as a package?
                </li>
                <li>
                  What are the core dimensions along which customers evaluate
                  our products, our services and our company?
                </li>
                <li>
                  Do our customers differentiate between our products and
                  competitor products in the ways that we intend?
                </li>
              </ol>
            </p>
            <p>
              Factor analysis reveals the core dimensions by which individuals
              evaluate services, products, policies, candidates, leaders,
              companies and organizations.
            </p>
            <p>
              Factor analysis can bring order to a seemingly disparate, large
              set of elements. It allows us to focus more precisely on the
              important structures underlying attitudes, opinions and
              preferences.
            </p>
            <p>
              URIKA Insights's team routinely uses factor analysis to analyze
              customer survey data. We identify the core components of customer
              service in the minds of customers (e.g. knowledge, efficiency,
              concern, respect) and use these components to develop highly
              useful reporting tools. These tools focus on monitoring
              performance on the core components, and service quality managers
              use this data to evaluate performance.
            </p>

            <h1 className="leading-normal heading">
              <span className="text-white bg-primary">
                We also use factor analysis extensively in the evaluation of
                individuals and organizations, for example, to identify the
                basic dimensions along which voters evaluate candidates or the
                basic elements that form the foundation of impressions of
                governments, political parties and companies.
              </span>
            </h1>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 -mt-10 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Multiple Regression</h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              Questions that the analysis can address:
              <ol className="pl-5 mt-3 space-y-2 list-decimal">
                <li>
                  Which features of our products and services drive customer
                  satisfaction or purchase intentions most strongly?
                </li>
                <li>
                  How should we prioritize the rollout of product and service
                  enhancements?
                </li>
                <li>
                  Are there important aspects of customer experience we are not
                  measuring?
                </li>
              </ol>
            </p>
            <p>
              Most commonly, we use multiple regression to understand how
              evaluations of product or service attributes drive a set of key
              indicators. These key indicators could include intentions to
              purchase or recommend a product, overall customer satisfaction or
              actual purchase behavior.
            </p>
            <p>
              The analysis allows us to identify which attributes drive
              performance on key indicators most strongly. We use this
              information to provide advice about how to prioritize service
              improvements or product enhancements. We can also evaluate the
              extent to which investments made in improving product and service
              elements are providing a good return, based on an analysis of how
              those elements impact customer experience.
            </p>

            <h1 className="leading-normal heading">
              <span className="text-white bg-primary">
                In addition, URIKA Insights can evaluate the combined strength
                of a set of product or service features in predicting key
                indicators, to evaluate if there are important features missing
                from current product or service offerings.
              </span>
            </h1>
          </div>
        </div>
      </Fade>

      <Fade left duration={1500} distance="60px">
        <div className="px-6 pb-20 -mt-10 space-y-4 md:px-16 lg:px-40">
          <h1 className="heading ">Structural Equation Modeling</h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              Questions that the analysis can address:
              <ol className="pl-5 mt-3 space-y-2 list-decimal">
                <li>
                  What is the process by which our communications strategy
                  influences customers to act?
                </li>
                <li>
                  What variables need to be taken into account to understand why
                  some of our customers purchased one of our new brands and
                  others did not?
                </li>
                <li>
                  Why did this programme produce good outcomes for some
                  participants but not for others?
                </li>
              </ol>
            </p>
            <p>
              Structural Equation Modeling (SEM), also known as causal modeling,
              simultaneous equation modeling, path analysis, among others, is a
              set of statistical procedures used to examine relationships
              between a set of predictor variables and criterion variables. The
              variables can be either latent factors or directly measured
              variables.
            </p>
            <p>
              At URIKA Insights, we use SEM to test models of the relationships
              among variables and how these variables influence behaviors and
              outcomes. For example, we evaluate models of how advertising
              influences brand perceptions and sales; models of how
              communications programmes work to influence important behaviors
              (e.g., smoking, voting, and compliance with medical instructions)
              and models of how customers come to decide whether to continue to
              use a product or to switch to a competitor product.
            </p>

            <h1 className="leading-normal heading">
              <span className="text-white bg-primary">
                A primary strength of SEM is that it helps us understand more
                about the causal chain of events, and therefore helps our
                clients see how their strategies and initiatives impact key
                outcomes.
              </span>
            </h1>
          </div>
        </div>
      </Fade>
    </Layout>
  );
};

export default Analytics;
