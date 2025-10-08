import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Team from "../component/Team";
import Technology from "../component/Technology";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Technology />
      <Team />
    </>
  );
}

export default Home;
