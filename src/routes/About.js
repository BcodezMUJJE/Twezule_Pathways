import Hero from "../components/Hero";
import CableCar from "../assets/worship.jpg";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Hero
        cName="hero"
        imgSrc={CableCar}
        title="About Us"
      />
      <AboutUs/>
    </>
  );
}

export default About;