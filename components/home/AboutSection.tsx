import { FC } from "react";
import Image from "next/image";
import Box from "../Box";

const Section: FC<{ title: string; body: string; noBottomMargin?: boolean }> =
  ({ title, body, noBottomMargin = false }) => {
    return (
      <>
        <Box
          className="tracking-normal leading-normal 2xl:leading-normal xl:leading-normal mb-6 text-4xl 2xl:text-3xl lg:text-2xl"
          font="quicksand"
          weight={500}
          color="#646464"
        >
          {title}
        </Box>
        <Box
          className={`tracking-wide leading-loose 2xl:leading-loose xl:leading-loose lg:leading-loose text-xl 2xl:text-lg lg:text-base  ${
            noBottomMargin ? "" : "mb-16 sm:mb-12"
          } `}
          font="quicksand"
          weight={500}
          color="#646464"
        >
          {body}
        </Box>
      </>
    );
  };

const AboutSection: FC = () => {
  return (
    <div className="container flex-wrap flex justify-center mx-auto py-10% sm:py-15%">
      <div className="w-4/12 2xl:w-4/12 xl:w-5/12 lg:w-5/12 md:w-10/12 pr-20 2xl:pr-16 lg:pr-12 md:pr-0">
        <Section
          title="#About me"
          body="I’m a self-motivated fast learner and problem solver who enjoy
            building stuff from scratch. I’m passionate in constructing beautiful
            user-first applications, and always hungry to explore new web
            technologies."
        />
        <Section
          noBottomMargin
          title="#Specialist in Web/App development"
          body="During my three years of professional experience, I'm well trained
            with solid front-end skills, together with backend experience in
            building commercial level NodeJS Restful applications. I worked with
            both SQL and no SQL database, AWS, Digital Ocean, and Docker. I am
            also familiar with Scrum, test-driven development, GitFlow and
            continuous delivery."
        />
      </div>
      <div className="w-3/12 2xl:w-5/24 xl:w-1.5/12 md:hidden mt-6">
        <div className="aspect-w-1 aspect-h-1 relative">
          <Image
            alt="Work me"
            src="/workMe.png"
            layout="fill"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
