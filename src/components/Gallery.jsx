import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

const GallerySection = styled.section`
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
  margin: 0 0 1rem 0;
  font-weight: bold;
`;

const GalleryContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const GalleryItem = styled.div`
  background: linear-gradient(
    45deg,
    var(--color-burgundy),
    var(--color-merlot)
  );
  height: 250px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.1rem;
  text-align: center;
  padding: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const NavButton = styled.button`
  background: linear-gradient(
    45deg,
    var(--color-burgundy),
    var(--color-merlot)
  );
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(139, 30, 63, 0.25);
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const PageIndicator = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const PageDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) =>
    props.active ? "var(--color-burgundy)" : "#bdc3c7"};
  transition: background 0.3s ease;
`;

const Gallery = () => {
  // Placeholder images - replace with actual image URLs
  const allImages = [
    {
      id: 1,
      title: "Wall Repair Project 1",
      description: "Before and after wall repair",
    },
    {
      id: 2,
      title: "Painting Project 1",
      description: "Beautiful interior painting",
    },
    {
      id: 3,
      title: "Wall Repair Project 2",
      description: "Professional drywall repair",
    },
    {
      id: 4,
      title: "Painting Project 2",
      description: "Exterior painting transformation",
    },
    {
      id: 5,
      title: "Wall Repair Project 3",
      description: "Crack repair and texture matching",
    },
    {
      id: 6,
      title: "Painting Project 3",
      description: "Custom color consultation",
    },
    {
      id: 7,
      title: "Wall Repair Project 4",
      description: "Water damage restoration",
    },
    {
      id: 8,
      title: "Painting Project 4",
      description: "Cabinet painting project",
    },
    {
      id: 9,
      title: "Wall Repair Project 5",
      description: "Structural wall repair",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 3;
  const totalPages = Math.ceil(allImages.length / imagesPerPage);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setIsLoading(true);
      await new Promise((r) => setTimeout(r, 250));
      if (mounted) setIsLoading(false);
    };
    load();
    return () => {
      mounted = false;
    };
  }, []);

  const currentImages = allImages.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );

  const goToPreviousPage = useCallback(() => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  }, []);

  const goToNextPage = useCallback(() => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  }, [totalPages]);

  return (
    <GallerySection id="gallery">
      <Container>
        <SectionTitle>Our Work Gallery</SectionTitle>
        <GalleryContainer>
          <GalleryGrid>
            {isLoading ? (
              <div>Loading images...</div>
            ) : (
              currentImages.map((image) => (
                <GalleryItem key={image.id}>
                  <div>
                    <strong>{image.title}</strong>
                    <br />
                    {image.description}
                  </div>
                </GalleryItem>
              ))
            )}
          </GalleryGrid>

          <NavigationContainer>
            <NavButton onClick={goToPreviousPage} disabled={currentPage === 0}>
              ← Previous
            </NavButton>

            <PageIndicator>
              {Array.from({ length: totalPages }, (_, index) => (
                <PageDot key={`page-${index}`} active={index === currentPage} />
              ))}
            </PageIndicator>

            <NavButton
              onClick={goToNextPage}
              disabled={currentPage === totalPages - 1}
            >
              Next →
            </NavButton>
          </NavigationContainer>
        </GalleryContainer>
      </Container>
    </GallerySection>
  );
};

export default Gallery;
