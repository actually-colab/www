import React from "react";
import { StyleSheet, css } from "aphrodite";

import { palette, spacing } from "../../constants/theme";
import { MediaQueryContext } from "../../contexts";

const styles = StyleSheet.create({
  feature: {
    marginTop: spacing.DEFAULT * 5,
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  featureLeft: {},
  featureRight: {
    flexDirection: "row-reverse",
  },
  featureMobile: {
    flexDirection: "column",
  },
  featureTextContainer: {
    flex: 1,
    padding: spacing.DEFAULT,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  featureTitleMobile: {
    fontSize: 16,
  },
  featureDescription: {
    fontSize: 16,
    color: palette.GRAY,
  },
  featureDescriptionMobile: {
    fontSize: 14,
  },
  featureImageContainer: {
    flex: 1,
    maxHeight: 300,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: palette.BASE_FADED,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  featureImageContainerLeft: {
    marginRight: spacing.DEFAULT,
  },
  featureImageContainerRight: {
    marginLeft: spacing.DEFAULT,
  },
  featureImageContainerMobile: {
    marginLeft: "auto",
    marginRight: "auto",
  },
});

/**
 * A feature display with an image, title, and description
 */
const Feature: React.FC<{
  title: React.ReactNode;
  description: React.ReactNode;
  direction: "left" | "right";
}> = ({ title, description, direction, children }) => {
  const { isMobile } = React.useContext(MediaQueryContext);

  return (
    <div
      className={css(
        styles.feature,
        direction === "left" ? styles.featureLeft : styles.featureRight,
        isMobile && styles.featureMobile
      )}
    >
      <div
        className={css(
          styles.featureImageContainer,
          direction === "left" ? styles.featureImageContainerLeft : styles.featureImageContainerRight,
          isMobile && styles.featureImageContainerMobile
        )}
      >
        {children}
      </div>

      <div className={css(styles.featureTextContainer)}>
        <p className={css(styles.featureTitle, isMobile && styles.featureTitleMobile)}>{title}</p>
        <p className={css(styles.featureDescription, isMobile && styles.featureDescriptionMobile)}>{description}</p>
      </div>
    </div>
  );
};

export default Feature;
