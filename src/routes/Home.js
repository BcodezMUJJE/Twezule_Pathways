import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FieldPhoto from "../assets/pphio1.JPG"; // Assuming this is your field photo
import Destination from "../components/Destinations";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        imgSrc={FieldPhoto}
      />
      <Destination/>
      <Footer/>
    </>
  );
}

export default Home;