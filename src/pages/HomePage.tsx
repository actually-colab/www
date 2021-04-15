import React from "react";
import { StyleSheet, css } from "aphrodite";
import { useMediaQuery } from "react-responsive";

import { palette } from "../constants/theme";
import { MediaQueryContext } from "../contexts";
import { GradientText, Header } from "../components";
import { HEADER_HEIGHT } from "../constants/dimensions";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },
  bodyContainer: {
    paddingTop: HEADER_HEIGHT,
  },
  titleContainer: {
    width: 780,
    paddingLeft: 32,
    paddingRight: 32,
    margin: "0 auto",
  },
  titleContainerMobile: {
    width: "auto",
    paddingLeft: 24,
    paddingRight: 24,
  },
  titleContainerWide: {
    width: 1200,
  },
  titleText: {
    marginTop: 160,
    marginBottom: 0,
    fontSize: 72,
    textAlign: "center",
  },
  titleTextMobile: {
    marginTop: 40,
    fontSize: 40,
  },
  subtitleText: {
    fontSize: 24,
    textAlign: "center",
    color: palette.GRAY,
  },
  subtitleTextMobile: {
    fontSize: 16,
  },
});

const HomePage: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isWide = useMediaQuery({ query: "(min-width: 1600px)" });

  return (
    <MediaQueryContext.Provider value={{ isMobile }}>
      <div className={css(styles.container)}>
        <Header />

        <div className={css(styles.bodyContainer)}>
          <div
            className={css(
              styles.titleContainer,
              isMobile && styles.titleContainerMobile,
              isWide && styles.titleContainerWide
            )}
          >
            <h1 className={css(styles.titleText, isMobile && styles.titleTextMobile)}>
              Collaboration <GradientText>actually</GradientText> done right
            </h1>

            <p className={css(styles.subtitleText, isMobile && styles.subtitleTextMobile)}>
              We make it free and easy for anyone to work together anytime, anywhere. We developed a custom cloud
              notebook editor to deliver better collaboration without the cost. What will you build next?
            </p>
          </div>
        </div>
      </div>
    </MediaQueryContext.Provider>
  );
};

export default HomePage;
