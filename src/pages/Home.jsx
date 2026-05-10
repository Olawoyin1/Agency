import Hero from '../components/Hero';
import Services from '../components/Services';
import FeaturedProjects from '../components/FeaturedProjects';

function Home() {
  return (
    <div className="home">
      <Hero />
      <Services />
      <FeaturedProjects />
    </div>
  );
}

export default Home;
