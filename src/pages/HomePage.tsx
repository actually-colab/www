import React from "react";
import { StyleSheet, css } from "aphrodite";
import { useMediaQuery } from "react-responsive";
import { Button, Icon } from "rsuite";

import { palette, spacing } from "../constants/theme";
import { HEADER_HEIGHT, PAGE_WIDTH } from "../constants/dimensions";
import { openDevpost, openYoutube } from "../utils/redirect";
import { MediaQueryContext } from "../contexts";
import { Footer, GradientBorderContainer, GradientText, Header } from "../components";
import ScreenshotChat from "../assets/screenshot-chat.png";

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.BASE,
  },
  bodyContainer: {
    paddingTop: HEADER_HEIGHT,
  },
  section: {
    width: PAGE_WIDTH.DEFAULT,
    paddingLeft: spacing.DEFAULT * 2,
    paddingRight: spacing.DEFAULT * 2,
    margin: "0 auto",
  },
  sectionMobile: {
    width: "auto",
    paddingLeft: 24,
    paddingRight: 24,
  },
  sectionWide: {
    width: PAGE_WIDTH.WIDE,
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
  secondaryTitleText: {
    marginTop: 160,
    marginBottom: 32,
    fontSize: 48,
    lineHeight: "100%",
    color: "black",
    textAlign: "center",
  },
  secondaryTitleTextMobile: {
    marginTop: 40,
    fontSize: 24,
  },
  pricingSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  pricingSectionMobile: {
    flexDirection: "column",
    alignItems: "center",
  },
  pricingContainer: {
    marginTop: spacing.DEFAULT * 4,
    width: 360,
  },
  pricingContainerMobile: {
    marginTop: spacing.DEFAULT * 2,
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

const PricingContainer: React.FC<{
  title: string;
  cost: string;
  description: string;
  features: string[];
  highlight?: boolean;
}> = ({ title, cost, description, features, highlight = false }) => {
  const { isMobile } = React.useContext(MediaQueryContext);

  return (
    <div className={css(styles.pricingContainer, isMobile && styles.pricingContainerMobile)}>
      <GradientBorderContainer visible={highlight}>
        <div className={css(styles.pricingContent)}>
          <div className={css(styles.pricingTitleContainer)}>
            <p className={css(styles.pricingTitle, isMobile && styles.pricingTitleMobile)}>{title}</p>
            <p className={css(styles.pricingCost)}>
              <span className={css(styles.pricingCostValue, isMobile && styles.pricingCostValueMobile)}>{cost}</span>
              <span className={css(styles.pricingCostDuration)}>/ year</span>
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

const HomePage: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isWide = useMediaQuery({ query: "(min-width: 1600px)" });

  return (
    <MediaQueryContext.Provider value={{ isMobile, isWide }}>
      <div className={css(styles.container)}>
        <div className={css(styles.bodyContainer)}>
          <section
            className={css(styles.section, isMobile && styles.sectionMobile, isWide && styles.sectionWide)}
            id="title"
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
          </section>

          <section
            className={css(styles.section, isMobile && styles.sectionMobile, isWide && styles.sectionWide)}
            id="pricing"
          >
            <h1 className={css(styles.secondaryTitleText, isMobile && styles.secondaryTitleTextMobile)}>
              It doesn't have to break the bank
            </h1>

            <p className={css(styles.subtitleText, isMobile && styles.subtitleTextMobile)}>
              The tools on the market are expensive, really really expensive. We asked ourselves why?
              <br />
              Then we asked how can we do better?
            </p>

            <div className={css(styles.pricingSection, isMobile && styles.pricingSectionMobile)}>
              <PricingContainer
                title="The Other Guys"
                cost="$3,690"
                description="Good for a small class or team with a big budget and a fixed number of known users."
                features={[
                  "Supports ~25 distinct users at a time",
                  "Set durations like 1 month, 4 months, etc",
                  "Requires purchasing a license before use",
                  "Server side code execution, users share a single server",
                  "Pre-configured VMs, pay more to upgrade the disk space, RAM, and CPUs",
                ]}
              />

              <PricingContainer
                title="Us"
                cost="$1,732"
                description="Great for small or large classes and teams with completely flexible durations and requirements."
                features={[
                  "No hard limits on number of users",
                  "Completely flexible durations",
                  "Available on demand",
                  "Client side code execution, every user gets their own environment",
                  "Supports remote VMs, bring the hardware you have, or pay for the hardware you need",
                ]}
                highlight
              />
            </div>
          </section>
        </div>

        <Header />
        <Footer />
      </div>
    </MediaQueryContext.Provider>
  );
};

export default HomePage;
