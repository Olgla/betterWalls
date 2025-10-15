import React from "react";
import styled from "styled-components";

const ServicesSection = styled.section`
  padding: 3rem 2rem;
  background: #faf6f2;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: var(--color-burgundy);
  margin: 0;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ServiceCard = styled.div`
  background: linear-gradient(
    45deg,
    var(--color-burgundy),
    var(--color-merlot)
  );
  border-radius: 15px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  /* Ensure readable text on dark background */
  color: white;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 2rem;
  color: white;
`;

const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  color: inherit;
  margin-bottom: 1.5rem;
  font-weight: bold;
`;

const ServiceDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: inherit;
  margin-bottom: 2rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;

  li {
    padding: 0.5rem 0;
    color: inherit;

    &:before {
      content: "• ";
      color: rgba(255, 255, 255, 0.9);
      font-weight: bold;
    }
  }
`;

const Services = () => {
  return (
    <ServicesSection id="services">
      <Container>
        <SectionTitle>Our Services</SectionTitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceIcon>🔨</ServiceIcon>
            <ServiceTitle>Wall Repairs</ServiceTitle>
            <ServiceDescription>
              Professional wall repair services to restore your walls to their
              original beauty. We handle everything from small holes and cracks
              to major structural repairs.
            </ServiceDescription>
            <ServiceFeatures>
              <li>Drywall repair and patching</li>
              <li>Crack and hole filling</li>
              <li>Texture matching</li>
              <li>Water damage restoration</li>
              <li>Pre-paint preparation</li>
            </ServiceFeatures>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>🎨</ServiceIcon>
            <ServiceTitle>Painting Services</ServiceTitle>
            <ServiceDescription>
              Transform your space with our expert painting services. We use
              high-quality paints and professional techniques to deliver
              stunning, long-lasting results.
            </ServiceDescription>
            <ServiceFeatures>
              <li>Interior and exterior painting</li>
              <li>Color consultation</li>
              <li>Priming and preparation</li>
              <li>Specialty finishes</li>
              <li>Cabinet and furniture painting</li>
            </ServiceFeatures>
          </ServiceCard>
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services;
