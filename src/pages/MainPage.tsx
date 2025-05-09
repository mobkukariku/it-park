import React from "react";
import Courses from "../components/Courses";
import FeedbackForm from "../components/FeedbackForm";
import Hero from "../components/Hero";
import AboutUsSection from "../components/AboutUsSection";
import Roadmap from "../components/Roadmap";

const MainPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Courses />
      <div className="bg-gray-100 p-6">
        <Roadmap />
      </div>
      <AboutUsSection />
      <FeedbackForm />
    </div>
  );
};

export default MainPage;
