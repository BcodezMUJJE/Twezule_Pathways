import Hero from "../components/Hero";
import FieldPhoto from "../assets/pphio1.JPG"; // Assuming this is your field photo
import Destination from "../components/Destinations";

function Home() {
  return (
    <>
      <Hero
        cName="hero"
        imgSrc={FieldPhoto}
      />
      <Destination/>
    </>
  );
}

export default Home;