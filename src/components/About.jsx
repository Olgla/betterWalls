import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
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
  font-weight: bold;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  h3 {
    font-size: 1.8rem;
    color: #2c3e50;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #555;
    margin-bottom: 1.5rem;
  }
`;

const AboutImage = styled.div`
  background: linear-gradient(
    45deg,
    var(--color-burgundy),
    var(--color-merlot)
  );
  height: 400px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  text-align: center;
  padding: 2rem;
`;

const HighlightBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 100%;

  h4 {
    color: var(--color-burgundy);
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    li {
      padding: 0.5rem 0;
      color: #555;

      &:before {
        content: "✓ ";
        color: #16a085;
        font-weight: bold;
      }
    }
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>Better Walls</SectionTitle>
        <AboutContent>
          <AboutText>
            <h3>Your Trusted Home Improvement Partner</h3>
            <p>
              Founded and operated by experienced professionals, Better Walls is
              a women-owned business dedicated to transforming your living
              spaces. We understand that your home is your sanctuary, and we
              treat every project with the care and attention it deserves.
            </p>
            <p>
              With years of experience in the industry, we've built a reputation
              for excellence, reliability, and outstanding customer service. Our
              team combines traditional craftsmanship with modern techniques to
              deliver results that exceed expectations.
            </p>
            <p>
              We believe in empowering women in the construction and home
              improvement industry while providing exceptional service to our
              valued customers.
            </p>
          </AboutText>
          <AboutImage>
            <div>
              <strong>Professional Team</strong>
              <br />
              Experienced & Certified
              <br />
              Women-Owned Business
            </div>
          </AboutImage>
        </AboutContent>
        <HighlightBox>
          <h4>Why Choose Better Walls?</h4>
          <ul>
            <li>Women-owned and operated business</li>
            <li>Quality materials and craftsmanship</li>
            <li>Competitive pricing and fair estimates</li>
          </ul>
        </HighlightBox>
      </Container>
    </AboutSection>
  );
};

export default About;
