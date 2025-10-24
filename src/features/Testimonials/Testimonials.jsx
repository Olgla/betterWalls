import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TestimonialsSection = styled.section`
  padding: 3rem 2rem;
  background: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: var(--color-burgundy);
  margin: 0 0 3rem 0;
  font-weight: bold;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TestimonialText = styled.p`
  font-style: italic;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
`;

const TestimonialAuthor = styled.div`
  font-weight: bold;
  color: var(--color-burgundy);
  font-size: 1.1rem;
`;

const TestimonialRating = styled.div`
  color: #ffc107;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTestimonials = async () => {
      setIsLoading(true);
      // Simulate loading testimonials
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mockTestimonials = [
        {
          id: 1,
          text: "Better Walls transformed our living room completely. Their attention to detail and professionalism was outstanding.",
          author: "Sarah Johnson",
          rating: 5,
        },
        {
          id: 2,
          text: "Excellent work on our kitchen walls. The team was punctual, clean, and the results exceeded our expectations.",
          author: "Mike Chen",
          rating: 5,
        },
        {
          id: 3,
          text: "Highly recommend their services. They fixed our water-damaged walls and the paint job looks flawless.",
          author: "Emily Rodriguez",
          rating: 5,
        },
      ];

      setTestimonials(mockTestimonials);
      setIsLoading(false);
    };

    loadTestimonials();
  }, []);

  if (isLoading) {
    return (
      <TestimonialsSection>
        <Container>
          <SectionTitle>What Our Customers Say</SectionTitle>
          <div>Loading testimonials...</div>
        </Container>
      </TestimonialsSection>
    );
  }

  return (
    <TestimonialsSection>
      <Container>
        <SectionTitle>What Our Customers Say</SectionTitle>
        <TestimonialsGrid>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id}>
              <TestimonialRating>
                {"★".repeat(testimonial.rating)}
              </TestimonialRating>
              <TestimonialText>"{testimonial.text}"</TestimonialText>
              <TestimonialAuthor>- {testimonial.author}</TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;
