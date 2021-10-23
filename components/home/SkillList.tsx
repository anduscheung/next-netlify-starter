import { FC } from "react";
import Box from "../Box";

const SkillGroup: FC<{
  title: string;
  subTitle: string;
  noMarginBottom?: boolean;
  hasExtraRightPadding?: boolean;
}> = ({
  title,
  subTitle,
  noMarginBottom = false,
  hasExtraRightPadding = false,
}) => {
  return (
    <div
      className={`flex-1 ${
        noMarginBottom ? "" : "mb-16 2xl:mb-16 xl:mb-14 lg:mb-12"
      }`}
    >
      <Box
        className={`tracking-wide text-4xl 2xl:text-4xl lg:text-3xl md:text-2xl mb-4 2xl:mb-3 lg:mb-2 sm:mb-1`}
        font="roboto"
        weight={300}
        color="#E7E7E7"
      >
        {title}
      </Box>
      <Box
        className={`flex-1 tracking-normal 2xl:tracking-wide text-2xl 2xl:text-xl xl:text-xl lg:text-lg md:text-base sm:text-sm${
          hasExtraRightPadding ? "md:pr-4" : ""
        }`}
        font="quicksand"
        weight={600}
        color="#989898"
      >
        {subTitle}
      </Box>
    </div>
  );
};

const SkillList: FC = () => {
  return (
    <div className="bg-grey3 container mx-auto py-10% sm:py-15%">
      <div className="w-7/12 2xl:w-7/12 xl:w-8/12 md:w-10/12 mx-auto">
        <Box
          className="text-2xl 2xl:text-2xl xl:text-xl lg:text-lg tracking-none mb-14 2xl:mb-14 xl:mb-12 lg:mb-10 2sm:mb-8"
          font="quicksand"
          weight={500}
          color="#b5b5b5"
        >
          I have worked with the followings:
        </Box>
        <SkillGroup
          title="React Family"
          subTitle="React & React Native on TypeScript / Redux Thunk / Redux Saga"
        />
        <div className="flex tracking-none mb-16 2xl:mb-16 xl:mb-14 lg:mb-12">
          <SkillGroup
            noMarginBottom
            hasExtraRightPadding
            title="Backend"
            subTitle="Node.js on TypeScript / Python"
          />
          <SkillGroup
            noMarginBottom
            hasExtraRightPadding
            title="Database"
            subTitle="MySQL / PostgreSQL / Firebase"
          />
        </div>
        <SkillGroup
          title="Archetectures"
          subTitle="AWS Route 53 / EC2 / S3 / RDS / CloudFront / DynamoDB / Lambda / Digital Ocean / Cloudflare / Netlify / Docker"
        />
        <SkillGroup
          title="Testing tools & frameworks"
          subTitle="Jest / Cypress"
        />
        <SkillGroup
          title="More other tools"
          subTitle="Sentry / Swagger / Github Action / Circle CI / Twillio / SendGrid / Zapier / Hubspot / Slack / Wordpress / Wix"
        />
      </div>
    </div>
  );
};

export default SkillList;
