import { FC, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/TransitionSection.module.css";
import Box from "../Box";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const TransitionSection: FC = () => {
  const isLG = useMediaQuery(1023);
  const is2XL = useMediaQuery(1536);
  return (
    <div className={styles.container}>
      <Box h="100%" w="100%" position="relative">
        <Box w="100%" bgc="#0E0E0E">
          <Image
            className={styles.image}
            src="/meAtStairs.png"
            alt="Me at stairs"
            layout="fill"
            objectFit={is2XL ? "cover" : "contain"}
            objectPosition="50% 70%"
            priority={true}
          />
        </Box>

        <Box h="100%" w="100%" position="absolute" justifyContent="center">
          <div className={styles.words}>
            <div className="text-4xl 2xl:text-4xl md:text-3xl">
              <Box
                className="font-bold tracking-wider justify-start lg:justify-center leading-tight"
                font="robotoCondensed"
              >
                I tell myself to learn
              </Box>
              <Box
                className="font-bold tracking-wider justify-start lg:justify-center leading-tight"
                font="robotoCondensed"
              >
                from the past
              </Box>
            </div>
            <Box
              className="font-medium sm:font-medium tracking-wide mt-12 lg:mt-12 md:mt-8 text-base lg:text-sm justify-start lg:justify-center"
              font="roboto"
            >
              Things I did make me a better person.
            </Box>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default TransitionSection;
