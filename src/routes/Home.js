import Hero, { HomeCallToAction } from "../components/Hero";
import FieldPhoto from "../assets/pphio1.JPG";
import Destination from "../components/Destinations";

function Home() {
  return (
    <>
      <Hero imgSrc={FieldPhoto} />
      <Destination embedded />
      <HomeCallToAction />
    </>
  );
}

export default Home;
