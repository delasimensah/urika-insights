//components
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="bg-purple-500 h-[400px]"></div>
      <div className="relative md:rounded-md md:shadow-md h-80 md:w-[80vw] md:-top-20 md:mx-auto bg-white">
        <h1>Welcome to Urika Insights</h1>
      </div>

      <div className="text-white bg-pink-500 h-80">
        <h1>Who we work with</h1>
      </div>
    </Layout>
  );
};

export default Home;
