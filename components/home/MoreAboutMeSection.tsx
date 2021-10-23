/* eslint-disable react/no-unescaped-entities */
import React, { FC, ReactElement } from "react";

import Image from "next/image";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Box from "../Box";
const Section: FC<{
  header: string;
  content: ReactElement;
  isFirst?: boolean;
}> = ({ header, content, isFirst }) => {
  return (
    <div>
      <Box
        font="quicksand"
        color="#E3E3E3"
        className={`text-3xl xl:text-2xl lg:text-2xl md:text-xl tracking-wider font-medium ${
          isFirst ? "lg:mt-6" : "mt-12 2xl:mt-10"
        }`}
      >
        {header}
      </Box>

      <Box
        font="quicksand"
        color="#ADADAD"
        flexDir="column"
        className="text-base tracking-wider 2xl:tracking-wide lg:tracking-normal font-medium mt-5 sm:mt-3 leading-relaxed lg:leading-6"
      >
        {content}
      </Box>
    </div>
  );
};

const MoreAboutMeSection: FC = () => {
  const isLG = useMediaQuery(1023);
  const isSM = useMediaQuery(640);
  const imgHeight = 1138;
  const imgWidth = 1000;
  const imgOffset = 80;

  return (
    <div>
      <Box
        font="robotoCondensed"
        bgc="#F4F4F4"
        weight="lighter"
        color="#666666"
        pt={isSM ? 60 : 139}
        pb={139}
        className={`flex justify-center mx-auto text-9xl xl:text-8xl lg:text-7xl md:text-7xl sm:text-5xl`}
      >
        MORE ABOUT ME
      </Box>
      <div
        className={`overflow-y-visible flex-wrap flex justify-center mx-auto py-0 flex-row lg:items-center`}
        style={{
          backgroundColor: "#000000",
          height: isLG ? undefined : imgHeight - imgOffset,
        }}
      >
        <div className="w-9/24 2xl:w-5/12 xl:w-4/12 lg:w-8/12 md:w-11/12">
          {isLG ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt={`Exp meLookingRightSide`}
              src={`/meLookingRightSide.png`}
              style={{
                width: "100%",
                transform: `translateY(-${imgOffset}px)`,
              }}
            />
          ) : (
            <div
              className="relative h-full lg:aspect-w-1 lg:aspect-h-1"
              style={{
                height: imgHeight,
                transform: `translateY(-${imgOffset}px)`,
              }}
            >
              <div
                style={{ height: imgHeight, width: isLG ? "100%" : imgWidth }}
                className="absolute right-0"
              >
                <Image
                  layout="fill"
                  objectFit="contain"
                  alt={`Exp meLookingRightSide`}
                  src={`/meLookingRightSide.png`}
                  priority={true}
                />
              </div>
            </div>
          )}
        </div>
        <div
          className={`flex items-center justify-center w-3/12 2xl:w-3/12 xl:w-4/12 lg:w-7/12 md:w-10/12 lg:mr-0 lg:ml-0 lg:mb-16 md:mb-12`}
        >
          <div
            style={{
              height: `calc(100% - ${imgOffset}px)`,
              marginTop: isLG ? -imgOffset + 20 : 0,
            }}
          >
            <Section
              isFirst
              header={"Mentoring"}
              content={
                <>
                  In 2020 and 2021, I successfully helped two friends with
                  business background (zero coding experience) to placed
                  themselves a Fullstack Software Engineer position in a Fortune
                  500 Company and one of the Asia’s assets management firm
                  respectively. <span>&nbsp;</span>I enjoy very much the
                  process, not only does I could help my tech lovers to kick
                  start their career, it also helps me review what I have
                  learnt.
                </>
              }
            />
            <Section
              header={"Sports"}
              content={
                <>
                  I’m lucky enough to receive sports training when I was small
                  that helped my to develop by habit of exercising. Playing
                  sports can help me release stress and clear my mind, which is
                  very important. I'm particularly keen on racket sports and my
                  favourite one is badminton. I also play tennis, table tennis
                  and squash.
                </>
              }
            />
            <Section
              header={"Coffee"}
              content={
                <>
                  With the extra travelling time saved due to the WFH
                  arrangements since the COVID-19 outbreak, I'm able to sneak a
                  nice coffee break early in the morning and start my daily
                  routine with a cup of decend home made cappuccino with my
                  Breville 878 expresso machine.
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreAboutMeSection;
