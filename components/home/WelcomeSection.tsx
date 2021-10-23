import { FC } from "react";
import Image from "next/image";
import styles from "../../styles/WelcomeSection.module.css";
import Box from "../Box";

const WelcomeSection: FC = () => {
  return (
    <div className={styles.container}>
      <Box
        w="100%"
        h="15%"
        minHeight={120}
        bgc="#ECECEC"
        alignItems="center"
        justifyContent="flex-end"
      >
        {/* TODO */}
        <div className={styles.menuButton}>MENU</div>
      </Box>
      <Box h="85%" w="100%" position="relative">
        <div className={styles.bigName}>
          {/* @ts-ignore */}
          <div className={styles.nameLetterHalf} attribute="A">
            A
          </div>
          {/* @ts-ignore */}
          <div className={styles.nameLetterHalf} attribute="N">
            N
          </div>
          {/* @ts-ignore */}
          <div className={styles.nameLetterHalf} attribute="D">
            D
          </div>
          {/* @ts-ignore */}
          <div className={styles.nameLetterHalf} attribute="U">
            U
          </div>
          {/* @ts-ignore */}
          <div className={styles.nameLetterHalf} attribute="S">
            S
          </div>
        </div>
        <div className={styles.lastName}>CHEUNG</div>
        <div className={styles.subTitle}>
          <div>Cross Platform</div>
          <div>Developer</div>
        </div>
        <div className={styles.btnGroup}>
          <div className={`${styles.btnBase} ${styles.btn1}`}>ABOUT</div>
          <div className={`${styles.btnBase} ${styles.btn2}`}>RESUME</div>
        </div>
        <div className={styles.gotoButtonContainer}>
          <div className={styles.gotoButtonWords}>VIEW PROFOLIO</div>
          <Image
            src="/circleGotoButton.svg"
            alt="Go to Button"
            width={27}
            height={27}
            priority={true}
          />
        </div>
        <Image
          src="/sportyMeLong.png"
          alt="Me1"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 25%"
          priority={true}
        />
      </Box>
    </div>
  );
};

export default WelcomeSection;
