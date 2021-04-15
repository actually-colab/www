import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  text: {
    fontWeight: "inherit",
    background: "-webkit-linear-gradient(top left, #f55673, #E2CC52)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
});

const GradientText: React.FC = ({ children }) => {
  return <span className={css(styles.text)}>{children}</span>;
};

export default GradientText;
