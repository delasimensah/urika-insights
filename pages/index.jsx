//components
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <Layout>
      <Carousel />
      <div className="relative md:rounded-md md:shadow-md p-6 md:p-10 md:w-[90vw] md:-top-20 md:mx-auto bg-white space-y-10 z-50">
        <h1 className="heading">
          Welcome to <span className="text-secondary">Urika</span>{" "}
          <span className="text-primary">Research</span>
        </h1>

        <div className="space-y-5 text-sm text-[17px] text-gray-600">
          <p>
            URIKA Research delivers innovative and dependable research that gets
            to the heart of any business or social issue. Whether your goal is
            to improve customer satisfaction, bolster your brand, attract and
            retain high quality employees, or to develop better understanding
            into markets, consumers and societies; we are committed to helping
            you achieve your aspirations through our broad range of market,
            social and opinion research services.
          </p>

          <p>
            Our makeup is unique. Not only do we combine robust research
            methodology with the latest technology in the consumer and market
            research industry, but also our team of researchers have an
            unequalled passion to provide clients with the strategic
            intelligence they need to succeed.
          </p>

          <p>
            URIKA Research understands the value of research and what it can do
            for your organisation. Our focus is not only on delivering quality
            research to our clients; it goes beyond that. We care about our
            clients achieving maximum returns on their investments in research,
            so we work with our clients, even after the research has been
            delivered, to integrate the findings into their operations and see
            their investments work for them.
          </p>
        </div>
      </div>

      <div className="text-white bg-pink-500 h-80">
        <h1>Who we work with</h1>
      </div>
    </Layout>
  );
};

export default Home;
