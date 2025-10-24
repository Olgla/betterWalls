import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contacts from "./components/Contacts";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

const AppContainer = styled.div`
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const MainContent = styled.main`
  padding-top: 80px; /* Account for fixed header */
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainContent>
    </AppContainer>
  );
}

export default App;
