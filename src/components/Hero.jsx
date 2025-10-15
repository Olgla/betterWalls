import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  background: linear-gradient(
    135deg,
    var(--color-burgundy) 0%,
    var(--color-merlot) 100%
  );
  color: white;
  padding: 3rem 2rem;
  text-align: center;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 300;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const CTAButton = styled.button`
  background: linear-gradient(
    45deg,
    var(--color-burgundy),
    var(--color-merlot)
  );
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 10px 10px rgb(39 23 28);
  border: 2px solid rgb(139 30 63 / 62%);

  &:hover {
    transform: translateY(-2px);
  }
`;

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>Professional Wall Repairs & Painting</HeroTitle>
        <HeroSubtitle>Women-Owned Excellence in Home Improvement</HeroSubtitle>
        <HeroDescription>
          Transform your space with our expert wall repair and painting
          services. We pride ourselves on quality craftsmanship, attention to
          detail, and exceptional customer service.
        </HeroDescription>
        <CTAButton onClick={scrollToServices}>View Our Services</CTAButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
