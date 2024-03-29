import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  container: {
    borderRadius: 9,
    padding: 3,
  },
  border: {
    background: "-webkit-linear-gradient(top left, #f55673, #E2CC52)",
  },
});

/**
 * A simple wrapper div with a gradient border
 */
const GradientBorderContainer: React.FC<{ visible?: boolean }> = ({ visible = true, children }) => {
  return <div className={css(styles.container, visible && styles.border)}>{children}</div>;
};

export default GradientBorderContainer;
