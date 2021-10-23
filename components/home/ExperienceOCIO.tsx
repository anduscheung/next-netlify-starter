/* eslint-disable react/no-unescaped-entities */
import { FC } from "react";
import ExperienceSectionTemplate from "../ExperienceSectionTemplate";

const ExperienceOCIO: FC = () => {
  return (
    <ExperienceSectionTemplate
      backgroundColor="#F4F4F4"
      workingPeriod="July 2017 - June 2018"
      company="CityU HK"
      role="Student Developer"
      content={
        <>
          2017 was the year everything get started. During my study, I worked as
          a student developer with a group of talented future stars in CityU's
          Office of Chief and Information Officer (OCIO) department and
          contributed to the launched of the University’s official portal app
          with Fuse Open.
          <span>&nbsp;</span>When I graduated with my Bachelor Degree in
          Electronic Engineer, with the happy experience in OCIO, I decided to
          start my career in the software engineering field, focused on web/app
          development.
        </>
      }
      imageName="expOCIO"
      imagePosition="right"
      imgHeight={850}
      imgWidth={1067}
    />
  );
};

export default ExperienceOCIO;
