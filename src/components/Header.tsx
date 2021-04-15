import React from "react";
import { StyleSheet, css } from "aphrodite";

import { palette } from "../constants/theme";
import { HEADER_HEIGHT } from "../constants/dimensions";
import { MediaQueryContext } from "../contexts";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    backgroundColor: `${palette.BASE}AA`,
  },
});

const MobileHeader: React.FC = () => {
  return <div className={css(styles.container)} />;
};

const DesktopHeader: React.FC = () => {
  return <div className={css(styles.container)} />;
};

const Header: React.FC = () => {
  const { isMobile } = React.useContext(MediaQueryContext);

  if (isMobile) {
    return <MobileHeader />;
  }

  return <DesktopHeader />;
};

export default Header;
