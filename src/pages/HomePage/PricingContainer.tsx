import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Icon } from "rsuite";

import { palette, spacing } from "../../constants/theme";
import { MediaQueryContext } from "../../contexts";
import { GradientBorderContainer } from "../../components";

const styles = StyleSheet.create({
  pricingContainer: {
    marginTop: spacing.DEFAULT * 2,
    marginLeft: spacing.DEFAULT,
    marginRight: spacing.DEFAULT,
    width: 360,
  },
  pricingContainerMobile: {
    width: "100%",
    marginTop: spacing.DEFAULT * 2,
    marginLeft: "auto",
    marginRight: "auto",
  },
  pricingContent: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 6,
  },
  pricingTitleContainer: {},
  pricingTitle: {
    fontSize: 20,
    lineHeight: "100%",
    color: "black",
  },
  pricingTitleMobile: {
    fontSize: 18,
  },
  pricingCost: {},
  pricingCostValue: {
    fontSize: 32,
    lineHeight: "100%",
    fontWeight: "bold",
    color: "black",
  },
  pricingCostValueMobile: {
    fontSize: 24,
  },
  pricingCostDuration: {
    marginLeft: 4,
    fontSize: 16,
    color: palette.GRAY,
  },
  pricingDescription: {
    marginTop: spacing.DEFAULT,
    marginBottom: spacing.DEFAULT * 1.5,
  },
  pricingFeature: {},
});

/**
 * A pricing breakdown with a list of features
 */
const PricingContainer: React.FC<{
  title: string;
  cost: string;
  per: string;
  description: string;
  features: string[];
  highlight?: boolean;
}> = ({ title, cost, per, description, features, highlight = false }) => {
  const { isMobile } = React.useContext(MediaQueryContext);

  return (
    <div className={css(styles.pricingContainer, isMobile && styles.pricingContainerMobile)}>
      <GradientBorderContainer visible={highlight}>
        <div className={css(styles.pricingContent)}>
          <div className={css(styles.pricingTitleContainer)}>
            <p className={css(styles.pricingTitle, isMobile && styles.pricingTitleMobile)}>{title}</p>
            <p className={css(styles.pricingCost)}>
              <span className={css(styles.pricingCostValue, isMobile && styles.pricingCostValueMobile)}>{cost}</span>
              <span className={css(styles.pricingCostDuration)}>/ {per}</span>
            </p>

            <p className={css(styles.pricingDescription)}>{description}</p>

            {features.map((feature) => (
              <p key={feature} className={css(styles.pricingFeature)}>
                <Icon icon="check-circle" style={{ color: palette.PRIMARY }} />
                &nbsp;&nbsp;{feature}
              </p>
            ))}
          </div>
        </div>
      </GradientBorderContainer>
    </div>
  );
};

export default PricingContainer;
