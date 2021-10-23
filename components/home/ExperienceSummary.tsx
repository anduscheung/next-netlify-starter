import { FC } from "react";
import Box from "../Box";

const Experience: FC<{
  title: string;
  subTitle: string;
  titleForSmallScreen: string;
  subTitleForMediumScreen: string;
  subTitleForSmallScreen: string;
  noRightBorder?: boolean;
}> = ({
  title,
  subTitle,
  noRightBorder = false,
  titleForSmallScreen,
  subTitleForMediumScreen,
  subTitleForSmallScreen,
}) => {
  return (
    <div className="flex-1 flex justify-center items-center relative">
      <div className="flex flex-col items-center">
        <Box
          className="tracking-wide 2sm:tracking-wider lg:tracking-normal leading-none mb-2 md:mb-0.5 sm:mb-0.5 text-charcoal text-5xl 2xl:text-5cxl xl:text-4xl md:text-3xl 2sm:text-4xl font-medium"
          color="#464646"
          font="roboto"
        >
          <div className="2sm:hidden">{title}</div>
          <div className="hidden 2sm:block">{titleForSmallScreen}</div>
        </Box>
        <Box
          className="tracking-wide leading-loose 2xl:leading-loose text-xl 2xl:text-lg lg:text-base sm:text-sm"
          color="#828282"
          font="quicksand"
          weight={600}
        >
          <div className="md:hidden">{subTitle}</div>
          <div className="hidden md:block 2sm:hidden">
            {subTitleForMediumScreen}
          </div>
          <div className="hidden 2sm:block">{subTitleForSmallScreen}</div>
        </Box>
        {!noRightBorder && (
          <div className="bg-darkSilver absolute right-0 w-3px lg:w-2px h-3/5 2xl:h-4/5  top-1/5 2xl:top-1/10" />
        )}
      </div>
    </div>
  );
};

const ExperienceSummary: FC = () => {
  return (
    <div className="bg-grey container py-7% lg:py-8% sm:py-12%">
      <div className="w-9/12 xl:w-10/12 lg:w-10/12 md:w-full sm:w-full md:px-2% sm:px-0 2sm:px-4% flex-wrap flex justify-center mx-auto">
        <Experience
          title="+5 Years"
          titleForSmallScreen="6Y"
          subTitle="Development Exp"
          subTitleForMediumScreen="Dev Experience"
          subTitleForSmallScreen="Dev Exp"
        />
        <Experience
          title="+10,000"
          titleForSmallScreen="10K"
          subTitle="Coding Hours"
          subTitleForMediumScreen="Coding Hours"
          subTitleForSmallScreen="Coding Hrs"
        />
        <Experience
          title="+3 Years"
          titleForSmallScreen="4Y"
          subTitle="Professional Exp"
          subTitleForMediumScreen="Pro Experience"
          subTitleForSmallScreen="Pro Exp"
          noRightBorder
        />
      </div>
    </div>
  );
};

export default ExperienceSummary;
