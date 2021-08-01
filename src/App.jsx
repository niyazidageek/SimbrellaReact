import React from "react";
import { BrowserRouter, Route, Switch, Router} from "react-router-dom";
import Header from "./layout/Header";
import SectionCard from "./layout/SectionCard";
import CitySection from "./layout/CitySection";
import NumberSection from "./layout/NumberSection";
import MapSection from "./layout/MapSection";
import ClientsSection from "./layout/ClientsSection";
import ExecutiveSection from "./layout/ExecutiveSection";
import JobsSection from "./layout/JobsSection";
import NewsSection from "./layout/NewsSection";
import Footer from "./layout/Footer";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <SectionCard />
    <CitySection />
    <NumberSection />
    <MapSection />
    <ClientsSection />
    <ExecutiveSection />
    <JobsSection />
    <NewsSection />
    <Footer />
      <Switch>
        
      </Switch>
    
      </BrowserRouter>
  );
}

export default App;
