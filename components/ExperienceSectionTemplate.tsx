import React, { FC, ReactElement } from "react";
import Box from "./Box";
import Image from "next/image";
import { useMediaQuery } from "../hooks/useMediaQuery";
const HeadersAndTexts: FC<{
  workingPeriod: string;
  company: string;
  role: string;
  content: ReactElement;
  headersColor?: string;
  textColor?: string;
}> = ({ workingPeriod, company, role, content, headersColor, textColor }) => {
  return (
    <div>
      <Box
        font="quicksand"
        color={headersColor || "#646464"}
        className="text-base tracking-wider font-normal "
      >
        {workingPeriod}
      </Box>
      <Box
        font="playfair"
        color={headersColor || "#1d1d1f"}
        className="text-6xl 2xl:text-5xl lg:text-6xl md:text-5xl tracking-wide 2xl:tracking-wider font-medium mt-5 lg:mt-5"
        ml={-3}
      >
        {company}
      </Box>
      <Box
        font="roboto"
        color={headersColor || "#646464"}
        className="text-3xl 2xl:text-2xl lg:text-2xl md:text-xl tracking-wider font-medium mt-7 2xl:mt-6 lg:mt-7 md:mt-5"
      >
        {role}
      </Box>

      <Box
        font="quicksand"
        color={textColor || "#646464"}
        flexDir="column"
        className="text-base tracking-wider 2xl:tracking-wide lg:tracking-normal font-medium mt-12 2xl:mt-10 lg:mt-10 leading-relaxed lg:leading-6"
      >
        {content}
      </Box>
    </div>
  );
};

const ExperienceSectionTemplate: FC<{
  backgroundColor: string;
  workingPeriod: string;
  company: string;
  role: string;
  content: ReactElement;
  imageName: string;
  imagePosition?: "left" | "right" | "center" | "OCIO";
  headersColor?: string;
  textColor?: string;
  imgWidth?: number; // for position left/right
  imgHeight?: number; // for position left/right
}> = ({
  backgroundColor,
  workingPeriod,
  company,
  role,
  content,
  imageName,
  imagePosition = "left",
  headersColor,
  textColor,
  imgWidth,
  imgHeight,
}) => {
  const isLG = useMediaQuery(1023);

  // image at center
  if (imagePosition === "center") {
    return (
      <div
        className={`container overflow-hidden flex-wrap flex justify-center items-center mx-auto py-10% lg:py-15% sm:py-15% flex-col`}
        style={{ backgroundColor }}
      >
        <div
          className={`w-5/12 2xl:w-6/12 xl:w-8/12 lg:w-7/12 md:w-10/12 mb-24 lg:mb-16 md:mb-12`}
        >
          <HeadersAndTexts
            workingPeriod={workingPeriod}
            company={company}
            role={role}
            content={content}
            headersColor={headersColor}
            textColor={textColor}
          />
        </div>
        <div className="w-7/12 2xl:w-9/12 xl:w-10/12 lg:w-8/12 md:w-11/12 ">
          {isLG ? (
            <img
              alt={`Exp ${imageName}`}
              src={`/${imageName}.png`}
              style={{ width: "100%" }}
            />
          ) : (
            <div className="relative" style={{ height: 750 }}>
              <div
                style={{ height: imgHeight || 648.77, width: imgWidth || 1067 }}
                // style={{ height: 648.77, width: 1067 }}
                className="absolute top-0"
              >
                <Image
                  layout="fill"
                  objectFit="contain"
                  alt={`Exp ${imageName}`}
                  src={`/${imageName}.png`}
                  priority={true}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // image at left/right
  return (
    <div
      className={`overflow-x-hidden overflow-y-visible flex-wrap flex justify-center mx-auto py-10% sm:py-15% ${
        imagePosition === "right" ? "flex-row-reverse" : "flex-row"
      } lg:flex-col-reverse lg:items-center`}
      style={{ backgroundColor }}
    >
      <div
        className={`${
          imagePosition === "left"
            ? "w-9/24 2xl:w-5/12 xl:w-6/12"
            : "w-7/24 2xl:w-4/12 xl:w-6/12"
        } lg:w-8/12 md:w-11/12`}
      >
        {isLG ? (
          <img
            alt={`Exp ${imageName}`}
            src={`/${imageName}.png`}
            style={{ width: "100%" }}
          />
        ) : (
          <div
            className="relative h-full lg:aspect-w-1 lg:aspect-h-1"
            style={{ height: isLG ? undefined : imgHeight }}
          >
            <div
              style={{ height: imgHeight, width: isLG ? "100%" : imgWidth }}
              // style={{ height: '100%', width: '100%' }}
              className={`absolute ${
                imagePosition === "left" ? "right-0" : "left-0"
              }`}
            >
              <Image
                layout="fill"
                objectFit="contain"
                // objectPosition="100% 0%"
                alt={`Exp ${imageName}`}
                src={`/${imageName}.png`}
                priority={true}
              />
            </div>
          </div>
        )}
      </div>
      <div
        className={`w-3/12 2xl:w-3/12 xl:w-4/12 lg:w-7/12 md:w-10/12 ${
          imagePosition === "right"
            ? "mr-24 2xl:mr-20 xl:mr-14"
            : "ml-24 2xl:ml-20 xl:ml-16"
        } lg:mr-0 lg:ml-0  lg:mb-16 md:mb-12`}
      >
        <HeadersAndTexts
          workingPeriod={workingPeriod}
          company={company}
          role={role}
          content={content}
          textColor={textColor}
        />
      </div>
    </div>
  );
};

export default ExperienceSectionTemplate;
