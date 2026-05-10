import About from '../components/About';
import '../styles/AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Learn more about AgencyHub and our mission</p>
      </div>
      <About />
      <div className="team-section">
        <h2>Our Team</h2>
        <p>
          Our diverse team of experienced professionals brings together expertise in software development, 
          design, strategy, and project management. We're passionate about delivering exceptional results.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
