import Hero from "../components/Hero";
import Qatar from "../assets/pray.jpg";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Hero
        cName="hero"
        imgSrc={Qatar}
        title="What We Offer"
        text="Our services include helping members plan, schedule, and manage their church-related activities and events."
      />
      <Trip/>
    </>
  );
}

export default Service;
