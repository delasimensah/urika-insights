import Slide from "react-reveal/Slide";

//components
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import Clients from "../components/Clients";

const Home = () => {
  return (
    <Layout>
      <Carousel />

      <Slide up distance="30px" duration={2000}>
        <div className="relative mt-10 md:border md:rounded-md md:shadow-md p-6 md:px-10 md:py-16 md:w-[90vw] lg:w-[85vw] md:-top-20 md:mx-auto bg-white space-y-10 z-40">
          <h1 className="heading">
            Welcome to <span className="text-secondary">URIKA</span>{" "}
            <span className="text-primary">Research</span>
          </h1>

          <div className="space-y-5 text-sm text-gray-600 md:text-lg">
            <p>
              URIKA Research delivers innovative and dependable research that
              gets to the heart of any business or social issue. Whether your
              goal is to improve customer satisfaction, bolster your brand,
              attract and retain high quality employees, or to develop better
              understanding into markets, consumers and societies; we are
              committed to helping you achieve your aspirations through our
              broad range of market, social and opinion research services.
            </p>

            <p>
              Our makeup is unique. Not only do we combine robust research
              methodology with the latest technology in the consumer and market
              research industry, but also our team of researchers have an
              unequalled passion to provide clients with the strategic
              intelligence they need to succeed.
            </p>

            <p>
              URIKA Research understands the value of research and what it can
              do for your organisation. Our focus is not only on delivering
              quality research to our clients; it goes beyond that. We care
              about our clients achieving maximum returns on their investments
              in research, so we work with our clients, even after the research
              has been delivered, to integrate the findings into their
              operations and see their investments work for them.
            </p>
          </div>
        </div>
      </Slide>

      <div className="px-6 pt-10 pb-20 space-y-10 md:px-16 lg:px-40">
        <h1 className="heading ">Who we work with</h1>

        <Clients />
      </div>
    </Layout>
  );
};

export default Home;
