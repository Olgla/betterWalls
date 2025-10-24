import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FAQSection = styled.section`
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

const FAQList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  background: white;
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const FAQQuestion = styled.button`
  width: 100%;
  padding: 1.5rem;
  background: linear-gradient(
    45deg,
    var(--color-burgundy),
    var(--color-merlot)
  );
  color: white;
  border: none;
  text-align: left;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: linear-gradient(
      45deg,
      var(--color-merlot),
      var(--color-burgundy)
    );
  }
`;

const FAQAnswer = styled.div`
  padding: 1.5rem;
  color: #555;
  line-height: 1.6;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const FAQIcon = styled.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [openItems, setOpenItems] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadFAQs = async () => {
      setIsLoading(true);
      // Simulate loading FAQs
      await new Promise((resolve) => setTimeout(resolve, 500));

      const mockFAQs = [
        {
          id: 1,
          question: "How long does a typical wall repair take?",
          answer:
            "Most wall repairs can be completed within 1-3 days, depending on the extent of damage. We'll provide a detailed timeline during your free consultation.",
        },
        {
          id: 2,
          question: "Do you provide free estimates?",
          answer:
            "Yes, we offer free, no-obligation estimates for all our services. Contact us to schedule your consultation.",
        },
        {
          id: 3,
          question: "What types of paint do you use?",
          answer:
            "We use high-quality, eco-friendly paints from trusted brands. We can work with your preferred brand or recommend the best options for your project.",
        },
        {
          id: 4,
          question: "Are you licensed and insured?",
          answer:
            "Yes, we are fully licensed and insured. We carry comprehensive liability insurance to protect your property and our team.",
        },
        {
          id: 5,
          question: "Do you offer warranties on your work?",
          answer:
            "We offer a 2-year warranty on all our work. We stand behind the quality of our craftsmanship and materials.",
        },
      ];

      setFaqs(mockFAQs);
      setIsLoading(false);
    };

    loadFAQs();
  }, []);

  const toggleFAQ = (id) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  if (isLoading) {
    return (
      <FAQSection>
        <Container>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <div>Loading FAQs...</div>
        </Container>
      </FAQSection>
    );
  }

  return (
    <FAQSection>
      <Container>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <FAQList>
          {faqs.map((faq) => (
            <FAQItem key={faq.id}>
              <FAQQuestion onClick={() => toggleFAQ(faq.id)}>
                {faq.question}
                <FAQIcon isOpen={openItems.has(faq.id)}>▼</FAQIcon>
              </FAQQuestion>
              <FAQAnswer isOpen={openItems.has(faq.id)}>{faq.answer}</FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </Container>
    </FAQSection>
  );
};

export default FAQ;
