import React from "react";
import { StyleSheet, css } from "aphrodite";
import { useMediaQuery } from "react-responsive";
import { Button, Icon } from "rsuite";

import { palette, spacing } from "../../constants/theme";
import { HEADER_HEIGHT, PAGE_WIDTH } from "../../constants/dimensions";
import { FEATURES, SCREENSHOTS } from "../../constants/images";
import { openDevpost, openGithubDesktop, openYoutube } from "../../utils/redirect";
import { MediaQueryContext } from "../../contexts";
import { Footer, GradientText, Header } from "../../components";
import Feature from "./Feature";
import PricingContainer from "./PricingContainer";

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.BASE,
  },
  bodyContainer: {
    paddingTop: HEADER_HEIGHT,
  },
  section: {
    width: PAGE_WIDTH.DEFAULT,
    paddingTop: 160,
    paddingLeft: spacing.DEFAULT * 2,
    paddingRight: spacing.DEFAULT * 2,
    margin: "0 auto",
  },
  sectionMobile: {
    width: "auto",
    paddingTop: 80,
    paddingLeft: 24,
    paddingRight: 24,
  },
  sectionWide: {
    width: PAGE_WIDTH.WIDE,
  },
  titleText: {
    marginBottom: 32,
    fontSize: 72,
    lineHeight: "100%",
    color: "black",
    textAlign: "center",
  },
  titleTextMobile: {
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
  bodyText: {
    fontSize: 20,
    lineHeight: "140%",
    textAlign: "left",
    color: palette.GRAY,
  },
  bodyTextMobile: {
    fontSize: 14,
  },
  titleButtons: {
    textAlign: "center",
  },
  titleButton: {
    marginTop: spacing.DEFAULT,
  },
  screenshot: {
    marginTop: 80,
    maxWidth: "100%",
    objectFit: "contain",
  },
  secondaryTitleText: {
    marginBottom: 32,
    fontSize: 48,
    lineHeight: "100%",
    color: "black",
    textAlign: "center",
  },
  secondaryTitleTextMobile: {
    fontSize: 24,
  },
  featureImageRounded: {
    maxWidth: "100%",
    objectFit: "contain",
    borderRadius: 20,
  },
  pricingLabel: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 24,
    color: "black",
  },
  pricingLabelMobile: {
    fontSize: 20,
  },
  pricingSection: {
    marginBottom: spacing.DEFAULT * 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  pricingSectionMobile: {
    flexDirection: "column",
    alignItems: "center",
  },
});

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
              <Button className={css(styles.titleButton)} onClick={openYoutube}>
                <Icon icon="logo-video" />
                &nbsp;&nbsp;Watch the demo
              </Button>
              &nbsp;&nbsp;
              <Button className={css(styles.titleButton)} onClick={openDevpost}>
                <Icon icon="file-text-o" />
                &nbsp;&nbsp;Read our Devpost
              </Button>
            </div>

            <img className={css(styles.screenshot)} src={SCREENSHOTS.main} alt="Actually Colab" />
          </section>

          <section
            className={css(styles.section, isMobile && styles.sectionMobile, isWide && styles.sectionWide)}
            id="features"
          >
            <h1 className={css(styles.secondaryTitleText, isMobile && styles.secondaryTitleTextMobile)}>
              A cloud based Jupyter editor unlike any of its kind
            </h1>

            <p className={css(styles.subtitleText, isMobile && styles.subtitleTextMobile)}>
              We took a new approach to an old problem. We built the editor from the ground up to integrate tightly with
              our collaboration features but paid our respects to what came before. If you're a Jupyter user, you should
              still feel right at home.
            </p>

            <Feature
              direction="left"
              title="Share with just the right amount of access"
              description="You alone are in control of your notebooks, unless you want to share. We let you choose who can view and edit your notebooks and you can revoke permission at any time."
            >
              <img className={css(styles.featureImageRounded)} src={FEATURES.share} alt="Sharing" />
            </Feature>

            <Feature
              direction="right"
              title="Chat with your team, fellow students, and instructors"
              description="Have a question for the instructor? No problem, you can message them via the built-in chat. We have a built-in chat feature because coding together is better than coding alone."
            >
              <img className={css(styles.featureImageRounded)} src={FEATURES.chat} alt="Chat" />
            </Feature>

            <Feature
              direction="left"
              title="View everyone's outputs"
              description="Sometimes you want to run code yourself, other times you want to see what your instructor or teammate has instead. We let you choose whose outputs you are viewing with the click of a button."
            >
              <img className={css(styles.featureImageRounded)} src={FEATURES.outputs} alt="Outputs" />
            </Feature>

            <Feature
              direction="right"
              title="Import the notebooks you already have"
              description="Hey we get it, we're not your first Jupyter editor and that's okay. You can import the notebooks, and if you ever need your notebook back you can export them too."
            >
              <img className={css(styles.featureImageRounded)} src={FEATURES.importNotebook} alt="Import" />
            </Feature>

            <Feature
              direction="left"
              title="Use a remote machine when you need raw power your computer can't provide"
              description="By default we let you run your notebooks on your own computer but sometimes that doesn't cut it. Need a Tesla A100 for Deep Learning? Connect directly to a VM from your favorite cloud providers."
            >
              <img className={css(styles.featureImageRounded)} src={FEATURES.kernelGateway} alt="Gateway" />
            </Feature>
          </section>

          <section
            className={css(styles.section, isMobile && styles.sectionMobile, isWide && styles.sectionWide)}
            id="pricing"
          >
            <h1 className={css(styles.secondaryTitleText, isMobile && styles.secondaryTitleTextMobile)}>
              It doesn't have to break the bank
            </h1>

            <p className={css(styles.subtitleText, isMobile && styles.subtitleTextMobile)}>
              The tools on the market are all expensive, so we took a new angle. Institutions and organizations pay to
              run workshops and classes, but individuals can use the regular platform with small teams for free. Let's
              look at some examples of how we stack up against what's available now.
            </p>

            <h6 className={css(styles.pricingLabel, isMobile && styles.pricingLabelMobile)}>
              Let's say you're&nbsp;
              <span style={{ textDecoration: "underline" }}>hosting a 5 day professional training seminar</span>
            </h6>

            <div className={css(styles.pricingSection, isMobile && styles.pricingSectionMobile)}>
              <PricingContainer
                title="The Other Guys"
                cost="$34"
                per="seminar"
                description="They'll host everything for you, but it comes at a cost to both your wallet and flexibility due to a centralized VM."
                features={[
                  "5 fixed students + 1 instructor",
                  "Each user has their own notebook",
                  "Server side code execution, users share a single server",
                  "Pre-configured VMs, pay more to upgrade the disk space, RAM, and CPUs",
                ]}
              />

              <PricingContainer
                title="Us"
                cost="$13"
                per="seminar"
                description="Requires more setup for first time users, but lets you use as little or as much compute as you need straight from your favorite provider."
                features={[
                  "5 students at a time + 1 instructor",
                  "Each user has their own notebook",
                  "Client side code execution, every user has their own environment",
                  "Supports remote VMs, bring the hardware you have, or pay for the hardware you need",
                ]}
                highlight
              />
            </div>

            <p className={css(styles.subtitleText, isMobile && styles.subtitleTextMobile)}>
              Through the help of grants and donations, we aim to deliver the service at no cost to our users. If you
              believe in our work and our mission, please consider donating to help keep it free for individuals.
            </p>

            <div className={css(styles.titleButtons)}>
              <Button className={css(styles.titleButton)} onClick={openGithubDesktop}>
                <Icon icon="star" />
                &nbsp;&nbsp;Star us on GitHub
              </Button>
              {/* &nbsp;&nbsp;
              <Button className={css(styles.titleButton)} appearance="primary" onClick={openPatreon}>
                <Icon icon="heart" />
                &nbsp;&nbsp;Sponsor us on Patreon
              </Button> */}
            </div>
          </section>

          <section
            className={css(styles.section, isMobile && styles.sectionMobile, isWide && styles.sectionWide)}
            id="sponsors"
          >
            <h1 className={css(styles.secondaryTitleText, isMobile && styles.secondaryTitleTextMobile)}>
              Made possible by our sponsors, grants, and support
            </h1>

            <p className={css(styles.subtitleText, isMobile && styles.subtitleTextMobile)}>Coming soon</p>
          </section>

          <section
            className={css(styles.section, isMobile && styles.sectionMobile, isWide && styles.sectionWide)}
            id="mission"
          >
            <h1 className={css(styles.secondaryTitleText, isMobile && styles.secondaryTitleTextMobile)}>
              Our mission is to expand opportunities for collaborative remote learning
            </h1>

            <p className={css(styles.bodyText, isMobile && styles.bodyTextMobile)}>
              One of the biggest challenges, and one that we are acutely aware of now more than ever, is that it can be
              really hard to deliver the same learning experience remotely. One way that a lot of students got exposure
              to areas of CS is through workshops like the ones hundreds attended each year run by ADSA on campus. Those
              workshops would offer an opportunity for younger students to interact and work with their peers, following
              along with the presentation and seeing their code run before their own eyes. Unfortunately, the tools on
              the market for collaborating on code and running workshops are either built only for a handful of users or
              cost exorbitant amounts of money. Inspired by our experiences working directly with professors, hearing
              their frustrations with what's available to them today, and our experiences running workshops through
              ADSA, we aimed to build something better and to make it completely Open Source and free for individuals.
              We want students anywhere around the world to be able to join workshops with hundreds or thousands of
              their peers and learn in real-time. We want students to be able to follow along with the teacher during
              class and see for themselves how the code works. So we set out to make that a reality.
            </p>

            <p
              className={css(styles.bodyText, isMobile && styles.bodyTextMobile)}
              style={{ textIndent: spacing.DEFAULT * 2 }}
            >
              ~ Jeff &amp; Bailey
            </p>
          </section>
        </div>

        <Header />
        <Footer />
      </div>
    </MediaQueryContext.Provider>
  );
};

export default HomePage;
