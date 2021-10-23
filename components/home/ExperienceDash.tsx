import { FC } from "react";
import ExperienceSectionTemplate from "../ExperienceSectionTemplate";

const ExperienceDash: FC = () => {
  return (
    <ExperienceSectionTemplate
      backgroundColor="#262626"
      textColor="#d3d3d3"
      headersColor="#FFFFFF"
      workingPeriod="July 2019 - Dec 2019"
      company="Dash Living"
      role="Full Stack Engineer"
      content={
        <>
          2019 was a remarkable year because I joint Dash. It was my first ever
          full stack experience and it was absolutely delightful. I was given
          the chance to touch every part of the tech-stack and worked with a
          group of friendly peers and mentors.
          <span>&nbsp;</span>
          During the period, I was assigned to rotate around different parts of
          the codebase, the Dashare website, mobile app as well as the admin
          panel and bunch of integrations with a numbers of software/IOT
          services providers. I have learnt significant amount of knowledge from
          this experience.
          <span>&nbsp;</span>
          Unfortunately, 80% of the IT team was laid off due to the bad
          financial position of the company due to protest activities. However,
          the company had shown me the picture of how a brilliant software team
          should look like.
        </>
      }
      imageName="expDash"
      imagePosition="center"
    />
  );
};

export default ExperienceDash;
