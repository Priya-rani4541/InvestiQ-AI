import Navbar from "../components/layout/Navbar/Navbar";
import Hero from "../components/hero/Hero";
import CompanySearch from "../components/search/CompanySearch";
import UploadCard from "../components/upload/UploadCard";
import FeatureCards from "../components/cards/FeatureCards";

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <CompanySearch />

      <UploadCard />

      <FeatureCards />
    </>
  );
};

export default Home;