import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Icon, IconProps } from "rsuite";

import { palette, spacing } from "../constants/theme";
import { BLOG_URI, DEVPOST_URI, DOCS_URI, GITHUB_URI, YOUTUBE_URI } from "../utils/redirect";
import { MediaQueryContext } from "../contexts";
import { PAGE_WIDTH } from "../constants/dimensions";
import { GradientText } from ".";

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.DEFAULT * 4,
    width: "100%",
    borderTopStyle: "solid",
    borderTopWidth: 1,
    borderTopColor: palette.BASE_BORDER,
  },
  content: {
    paddingTop: spacing.DEFAULT * 4,
    paddingBottom: spacing.DEFAULT * 6,
    paddingLeft: spacing.DEFAULT * 2,
    paddingRight: spacing.DEFAULT * 2,
    width: PAGE_WIDTH.DEFAULT,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
  },
  contentMobile: {
    paddingTop: spacing.DEFAULT * 2,
    paddingBottom: spacing.DEFAULT * 4,
    paddingLeft: spacing.DEFAULT,
    paddingRight: spacing.DEFAULT,
    width: "100%",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  contentWide: {
    width: PAGE_WIDTH.WIDE,
  },
  logoFooter: {},
  logoFooterMobile: {
    gridColumn: "span 3",
    marginBottom: spacing.DEFAULT,
  },
  logoWrapper: {
    fontSize: 18,
    lineHeight: "100%",
    fontWeight: "bold",
  },
  footerSection: {},
  footerTitle: {
    color: "black",
    marginBottom: spacing.DEFAULT,
  },
  footerLinks: {
    lineHeight: "100%",
  },
  footerLink: {
    color: palette.GRAY,
    ":hover": {
      color: palette.CHARCOAL,
    },
  },
  footerLinkMobile: {
    fontSize: 12,
  },
});

const FooterSection: React.FC<{
  title: React.ReactNode;
  links?: {
    title: string;
    icon?: IconProps["icon"];
    url: string;
  }[];
}> = ({ title, links = [] }) => {
  const { isMobile } = React.useContext(MediaQueryContext);

  return (
    <div className={css(styles.footerSection)}>
      <p className={css(styles.footerTitle)}>{title}</p>
      {links.length > 0 && (
        <div className={css(styles.footerLinks)}>
          {links.map((link) => (
            <p key={link.url}>
              <a
                className={css(styles.footerLink, isMobile && styles.footerLinkMobile)}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                {link.title}
                {link.icon !== undefined && (
                  <React.Fragment>
                    &nbsp;
                    <Icon icon={link.icon} />
                  </React.Fragment>
                )}
              </a>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

const Footer: React.FC = () => {
  const { isMobile, isWide } = React.useContext(MediaQueryContext);

  return (
    <div className={css(styles.container)}>
      <div className={css(styles.content, isMobile && styles.contentMobile, isWide && styles.contentWide)}>
        <div className={css(styles.logoFooter, isMobile && styles.logoFooterMobile)}>
          <FooterSection
            title={
              <span className={css(styles.logoWrapper)}>
                <GradientText>actually colab</GradientText>
              </span>
            }
            links={[
              {
                title: "Built at the University of Illinois at Urbana-Champaign",
                url: "https://illinois.edu/",
              },
              { title: "Terms and Conditions", url: "/terms" },
              { title: "Privacy Policy", url: "/privacy" },
            ]}
          />
        </div>
        <FooterSection
          title="Community"
          links={[
            { title: "Developer Blog", url: BLOG_URI },
            { title: "Developer Docs", url: DOCS_URI },
            { title: isMobile ? "GitHub Org" : "GitHub Organization", icon: "github", url: GITHUB_URI },
            { title: isMobile ? "HackIL Devpost" : "HackIllinois Devpost", icon: "trophy", url: DEVPOST_URI },
            { title: "YouTube", icon: "youtube-play", url: YOUTUBE_URI },
          ]}
        />
        <FooterSection
          title="Resources"
          links={[
            { title: isMobile ? "Jupyter" : "Project Jupyter", icon: "related-map", url: "https://jupyter.org/" },
            { title: isMobile ? "AWS" : "Amazon Web Services", icon: "amazon", url: "https://aws.amazon.com/" },
            { title: "React.js", icon: "external-link", url: "https://reactjs.org/" },
            { title: "Electron", icon: "external-link", url: "https://www.electronjs.org/" },
          ]}
        />
        <FooterSection
          title="Follow"
          links={[
            // { title: "Patreon", icon: "heart", url: PATREON_URI },
            {
              title: "Jeff Taylor-Chang",
              icon: "linkedin-square",
              url: "https://www.linkedin.com/in/jefftc/",
            },
            {
              title: "Jeff Taylor-Chang",
              icon: "external-link",
              url: "https://jefftc.com/",
            },
            {
              title: "Bailey Tincher",
              icon: "external-link",
              url: "https://btin.io/",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Footer;
