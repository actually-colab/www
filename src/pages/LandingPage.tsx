import React from "react";
import { StyleSheet, css } from "aphrodite";
import { useMediaQuery } from "react-responsive";

import ScreenshotLong from "../assets/screenshot-long.png";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  containerMobile: {},
  contentBackground: {
    margin: 80,
    display: "flex",
    background: "-webkit-linear-gradient(top left, #f55673, #E2CC52)",
    borderRadius: 20
  },
  contentBackgroundMobile: {
    margin: 20
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alingSelf: "flex-start",
    textAlign: "center",
    margin: 4,
    padding: 40,
    borderRadius: 16,
    backgroundColor: "white"
  },
  contentMobile: {
    padding: 20
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    background: "-webkit-linear-gradient(top left, #f55673, #E2CC52)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent"
  },
  titleMobile: {
    fontSize: 32
  },
  screenshot: {
    maxWidth: "100%",
    objectFit: "contain"
  }
});

const LandingPage: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className={css(styles.container, isMobile && styles.containerMobile)}>
      <div className={css(styles.contentBackground, isMobile && styles.contentBackgroundMobile)}>
        <div className={css(styles.content, isMobile && styles.contentMobile)}>
          <a className={css(styles.title, isMobile && styles.titleMobile)} href="https://github.com/actually-colab">
            actually colab
          </a>
          <p>because Google Colab isn't actually collaborative</p>
          <img className={css(styles.screenshot)} src={ScreenshotLong} alt="Actually Colab" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
