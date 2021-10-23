import { FC } from "react";
import Box from "../Box";
import Image from "next/image";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const BigText: FC<{ text: string }> = ({ text }) => {
  return (
    <Box
      font="playfair"
      color="#575757"
      className="text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl leading-tight tracking-wider"
    >
      {text}
    </Box>
  );
};

const SubText: FC<{ text: string }> = ({ text }) => {
  return (
    <Box
      font="quicksand"
      color="#8A8A8A"
      weight={500}
      className="text-lg lg:text-base sm:text-sm leading-loose text-center"
    >
      {text}
    </Box>
  );
};

const CopyrightText: FC<{ text: string }> = ({ text }) => {
  return (
    <Box
      position="absolute"
      bottom={50}
      color="#5C5C5C"
      font="roboto"
      className="tracking-wider font-normal text-base lg:text-sm sm:text-xs"
    >
      {text}
    </Box>
  );
};

const ContactMeSection: FC = () => {
  const isLG = useMediaQuery(1023);
  const isSM = useMediaQuery(640);
  const imageEdge = isSM ? 80 : 99;
  const paraSpaceBase = isSM ? 25 : 45;
  return (
    <div
      className="flex bg-white flex-col justify-center items-center container mx-auto py-10% sm:py-15%"
      style={{ height: isSM ? 800 : isLG ? 1000 : 1200, position: "relative" }}
    >
      <Box flexDir="column" alignItems="center" justifyContent="center">
        <BigText text="I occasionally take on" />
        <BigText text="freelance opportunities." />
        <div style={{ height: paraSpaceBase, width: 1 }}></div>
        <SubText
          text={
            isSM
              ? "Eager to get some help?"
              : "Have an exciting project where you need some help?"
          }
        />
        <SubText text="Engage me throught email or Linkedin." />
        <div style={{ height: paraSpaceBase + 15, width: 1 }}></div>
      </Box>
      <Box justifyContent="center">
        <div>
          <Image
            className="cursor-pointer hover:opacity-60"
            height={imageEdge}
            width={imageEdge}
            alt={`iconGoogle`}
            src={`/iconGoogle.png`}
            priority={true}
          />
        </div>
        <div style={{ height: 1, width: isSM ? 20 : 30 }}></div>
        <div>
          <Image
            className="cursor-pointer hover:opacity-60"
            height={imageEdge}
            width={imageEdge}
            alt={`iconLinkedin`}
            src={`/iconLinkedin.png`}
            priority={true}
          />
        </div>
      </Box>
      <CopyrightText text="Copyright @ 2021, Andus Cheung" />
    </div>
  );
};

export default ContactMeSection;
