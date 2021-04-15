import React from "react";
import { StyleSheet, css } from "aphrodite";
import { useMediaQuery } from "react-responsive";
import { Button, Icon } from "rsuite";

import { palette, spacing } from "../constants/theme";
import { HEADER_HEIGHT } from "../constants/dimensions";
import { openDevpost, openYoutube } from "../utils/redirect";
import { MediaQueryContext } from "../contexts";
import { GradientText, Header } from "../components";
import ScreenshotChat from "../assets/screenshot-chat.png";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },
  bodyContainer: {
    paddingTop: HEADER_HEIGHT,
  },
  titleContainer: {
    width: 880,
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
    marginBottom: 32,
    fontSize: 72,
    lineHeight: "100%",
    color: "black",
    textAlign: "center",
  },
  titleTextMobile: {
    marginTop: 40,
    fontSize: 40,
  },
  subtitleText: {
    fontSize: 20,
    lineHeight: "140%",
    textAlign: "center",
    color: palette.GRAY,
  },
  subtitleTextMobile: {
    fontSize: 16,
  },
  titleButtons: {
    marginTop: spacing.DEFAULT,
    textAlign: "center",
  },
  screenshot: {
    marginTop: 80,
    maxWidth: "100%",
    objectFit: "contain",
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
              notebook editor to deliver better collaboration without the cost.
              {isWide ? " " : <br />}
              What will you build with it?
            </p>

            <div className={css(styles.titleButtons)}>
              <Button onClick={openYoutube}>
                <Icon icon="logo-video" />
                &nbsp;&nbsp;Watch the demo
              </Button>{" "}
              <Button onClick={openDevpost}>
                <Icon icon="file-text-o" />
                &nbsp;&nbsp;Read our Devpost
              </Button>
            </div>

            <img className={css(styles.screenshot)} src={ScreenshotChat} alt="Actually Colab" />
          </div>
        </div>
      </div>
    </MediaQueryContext.Provider>
  );
};

export default HomePage;
