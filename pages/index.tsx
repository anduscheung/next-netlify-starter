import React from "react";
import type { NextPage } from "next";
import WelcomeSection from "../components/home/WelcomeSection";
import AboutSection from "../components/home/AboutSection";
import ExperienceSummary from "../components/home/ExperienceSummary";
import SkillList from "../components/home/SkillList";
import TransitionSection from "../components/home/TransitionSection";
import ExperienceDatalouder from "../components/home/ExperienceDatalouder";
import ExperienceCurrenxie from "../components/home/ExperienceCurrenxie";
import ExperienceDash from "../components/home/ExperienceDash";
import ExperienceShergon from "../components/home/ExperienceShergon";
import ExperienceOCIO from "../components/home/ExperienceOCIO";
import MoreAboutMeSection from "../components/home/MoreAboutMeSection";
import ContactMeSection from "../components/home/ContactMeSection";

const Home: NextPage = () => {
  return (
    <>
      <WelcomeSection />
      <AboutSection />
      <ExperienceSummary />
      <SkillList />
      <TransitionSection />
      <ExperienceDatalouder />
      <ExperienceCurrenxie />
      <ExperienceDash />
      <ExperienceShergon />
      <ExperienceOCIO />
      <MoreAboutMeSection />
      <ContactMeSection />
    </>
  );
};

export default Home;
