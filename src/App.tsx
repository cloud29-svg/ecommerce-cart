

import { Header } from "./components/Header";
import {TopBar } from "./components/TopBar"
import { CategoryGrid } from "./components/CategoryGrid";
import { BestsellerSection } from "./components/BestsellerSection";
import { CtaBanner } from "./components/CtaBanner";
import { FeaturedPosts } from "./components/FeaturedPosts";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialSection } from "./components/TestimonialSection";
import { Footer } from "./components/Footer"


import "./App.css";

function App() {
  return (
    
  
        <div className="app">
          <TopBar />
          <Header />
          
          <CategoryGrid />
          <BestsellerSection />
          <ServicesSection />
          <FeaturedPosts />
          <TestimonialSection />
          <CtaBanner />
         <Footer />
         
         </div>
      
  );
}

export default App;