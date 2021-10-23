import { FC } from "react";
import ExperienceSectionTemplate from "../ExperienceSectionTemplate";

const ExperienceShergon: FC = () => {
  return (
    <ExperienceSectionTemplate
      backgroundColor="#F9F9F9"
      workingPeriod="June 2018 - June 2019"
      company="Shergon Publishing"
      role="Frontend Engineer"
      content={
        <>
          Shergon was my first job after my graduation. I was responsible for
          the frontend development of a integrated administrative system using
          ReactJS and was in charged of extending the system to a mobile app
          using React Native.
          <span>&nbsp;</span>
          Since the team was small, we did not have time to design thoughtfully
          before launching a feature. Instead, we usually quickly build a
          clickable prototype and make design on top of of that. Because of that
          unique experience I was trained to create UI SUPER QUICK and this
          skill is very valuable to my future career.
        </>
      }
      imagePosition="left"
      imageName="expShergon"
      imgHeight={903.66}
      imgWidth={1067}
    />
  );
};

export default ExperienceShergon;
