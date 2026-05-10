import React from 'react';
import { FaCode, FaMobileAlt, FaPalette, FaCloud, FaBrain, FaLightbulb } from 'react-icons/fa';
import '../styles/Services.css';

function Services() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom web applications with modern tech stack",
      icon: FaCode
    },
    {
      id: 2,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps",
      icon: FaMobileAlt
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces",
      icon: FaPalette
    },
    {
      id: 4,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure",
      icon: FaCloud
    },
    {
      id: 5,
      title: "AI & ML",
      description: "Intelligent systems powered by AI",
      icon: FaBrain
    },
    {
      id: 6,
      title: "Consulting",
      description: "Strategic technology guidance",
      icon: FaLightbulb
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">Comprehensive solutions for your digital needs</p>
        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  <IconComponent />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
