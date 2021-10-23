import { FC } from "react";
import ExperienceSectionTemplate from "../ExperienceSectionTemplate";

const ExperienceDatalouder: FC = () => {
  return (
    <ExperienceSectionTemplate
      backgroundColor="#F9F9F9"
      workingPeriod="Since Nov 2020"
      company="Datalouder"
      role="Senior Software Engineer"
      content={
        <>
          Datalouder is a small startup that bring innovation into the
          traditional stock industry with statistic and big data. It has a great
          working environment where I can challenge myself and demonstrate my
          full potential.
          <span>&nbsp;</span>
          My daily job includes project planning, product design,
          implement/maintain the Datalouder frontend, backend, data pipeline and
          infrastructure. I am also responsible to lead junior engineers,
          perform code reviews and conduct interviews.
        </>
      }
      imageName="expDatalouder"
      imgHeight={903.66}
      imgWidth={1067}
    />
  );
};

export default ExperienceDatalouder;
