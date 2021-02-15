import React from "react";
import { StyleSheet, css } from "aphrodite";

import screenshot from "../assets/screenshot.png";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    backgroundColor: "#FFF",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  contentBackground: {
    background: "-webkit-linear-gradient(top left, #f55673, #E2CC52)",
    borderRadius: 20
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
    padding: 40,
    borderRadius: 16,
    backgroundColor: "white"
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    background: "-webkit-linear-gradient(top left, #f55673, #E2CC52)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent"
  },
  screenshot: {
    maxWidth: 960,
    maxHeight: "75%",
    objectFit: "contain"
  }
});

const LandingPage: React.FC = () => {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.contentBackground)}>
        <div className={css(styles.content)}>
          <a className={css(styles.title)} href="https://github.com/actually-colab">
            actually colab
          </a>
          <p>because Google Colab isn't actually collaborative</p>
          <img className={css(styles.screenshot)} src={screenshot} alt="Actually Colab" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
