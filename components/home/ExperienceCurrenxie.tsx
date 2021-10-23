import { FC } from "react";
import ExperienceSectionTemplate from "../ExperienceSectionTemplate";

const ExperienceCurrenxie: FC = () => {
  return (
    <ExperienceSectionTemplate
      backgroundColor="#F4F4F4"
      workingPeriod="Jan 2020 - Oct 2020"
      company="Currenxie"
      role="Mobile Engineer"
      content={
        <>
          I joint this digital finance company to full-fill their needs on
          mobile development. I was mainly responsible to extend their client
          side web app onto a mobile app from sketch using React XP, and I also
          contributed to some of their webapp tasks.
          <span>&nbsp;</span>
          The app was ready to launch when I leave the team. We run agile and
          our code base is very organized which I think it was quite a
          delightful development experience.
        </>
      }
      imageName="expCurrenxie"
      imagePosition="right"
      imgHeight={808.79}
      imgWidth={600}
    />
  );
};

export default ExperienceCurrenxie;
