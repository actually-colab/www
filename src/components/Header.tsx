import React from "react";
import { StyleSheet, css } from "aphrodite";

import { palette, spacing } from "../constants/theme";
import { HEADER_HEIGHT, PAGE_WIDTH } from "../constants/dimensions";
import { MediaQueryContext } from "../contexts";
import { GradientText } from ".";

const styles = StyleSheet.create({
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    backgroundColor: `${palette.BASE}AA`,
    "-webkit-backdrop-filter": "saturate(2) blur(20px)",
    "backdrop-filter": "saturate(2) blur(20px)",
  },
  content: {
    width: PAGE_WIDTH.DEFAULT,
    height: "100%",
    paddingLeft: spacing.DEFAULT * 2,
    paddingRight: spacing.DEFAULT * 2,
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  contentMobile: {
    width: "100%",
    paddingLeft: 24,
    paddingRight: 24,
  },
  contentWide: {
    width: PAGE_WIDTH.WIDE,
  },
  logo: {
    fontSize: 28,
  },
  logoMobile: {
    fontSize: 20,
  },
});

const Header: React.FC = () => {
  const { isMobile, isWide } = React.useContext(MediaQueryContext);

  return (
    <div className={css(styles.container)}>
      <div className={css(styles.content, isMobile && styles.contentMobile, isWide && styles.contentWide)}>
        <h4 className={css(styles.logo, isMobile && styles.logoMobile)}>
          <GradientText>actually colab</GradientText>
        </h4>
      </div>
    </div>
  );
};

export default Header;
