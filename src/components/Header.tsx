import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Drawer, Icon, IconButton } from "rsuite";

import { palette, spacing } from "../constants/theme";
import { HEADER_HEIGHT, PAGE_WIDTH } from "../constants/dimensions";
import { BLOG_URI, DOCS_URI, GITHUB_URI, PATREON_URI } from "../utils/redirect";
import { MediaQueryContext } from "../contexts";
import { GradientText } from ".";

const styles = StyleSheet.create({
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    backgroundColor: `${palette.BASE}AA`,
    "-webkit-backdrop-filter": "saturate(2) blur(20px)",
    "backdrop-filter": "saturate(2) blur(20px)",
  },
  content: {
    width: PAGE_WIDTH.DEFAULT,
    height: "100%",
    paddingLeft: spacing.DEFAULT * 2,
    paddingRight: spacing.DEFAULT * 2,
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  contentMobile: {
    width: "100%",
    paddingLeft: 24,
    paddingRight: 24,
  },
  contentWide: {
    width: PAGE_WIDTH.WIDE,
  },
  logo: {
    fontSize: 28,
  },
  logoMobile: {
    fontSize: 20,
  },
  headerMobile: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  drawerContent: {
    width: "100%",
    height: "100%",
    paddingLeft: 24,
    paddingRight: 24,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  drawerTitleContainer: {
    height: HEADER_HEIGHT,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLinks: {
    flex: 1,
    paddingLeft: spacing.DEFAULT * 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLink: {
    fontSize: 16,
    color: palette.CHARCOAL,
    ":hover": {
      color: "black",
    },
  },
  headerLinkMobile: {
    marginBottom: spacing.DEFAULT,
  },
});

const links: {
  title: string;
  url: string;
}[] = [
  { title: "Features", url: "/features" },
  { title: "Mission", url: "/mission" },
  { title: "Blog", url: BLOG_URI },
  { title: "Documentation", url: DOCS_URI },
  { title: "Open Source", url: GITHUB_URI },
  { title: "Sponsor", url: PATREON_URI },
];

const Header: React.FC = () => {
  const { isMobile, isWide } = React.useContext(MediaQueryContext);

  const [isDrawerVisible, setIsDrawerVisible] = React.useState<boolean>(false);

  return (
    <div className={css(styles.container)}>
      <div className={css(styles.content, isMobile && styles.contentMobile, isWide && styles.contentWide)}>
        <h4 className={css(styles.logo, isMobile && styles.logoMobile)}>
          <GradientText>actually colab</GradientText>
        </h4>

        {isMobile ? (
          <div className={css(styles.headerMobile)}>
            <IconButton size="lg" icon={<Icon icon="bars" />} onClick={() => setIsDrawerVisible(true)} />

            <Drawer show={isDrawerVisible} placement="top" size="xs" onHide={() => setIsDrawerVisible(false)}>
              <div className={css(styles.drawerContent)}>
                <div className={css(styles.drawerTitleContainer)}>
                  <h4 className={css(styles.logo, isMobile && styles.logoMobile)}>
                    <GradientText>actually colab</GradientText>
                  </h4>

                  <IconButton size="lg" icon={<Icon icon="close" />} onClick={() => setIsDrawerVisible(false)} />
                </div>

                {links.map((link) => (
                  <a key={link.url} className={css(styles.headerLink, styles.headerLinkMobile)} href={link.url}>
                    {link.title}
                  </a>
                ))}
              </div>
            </Drawer>
          </div>
        ) : (
          <div className={css(styles.headerLinks)}>
            {links.map((link) => (
              <a key={link.url} className={css(styles.headerLink)} href={link.url}>
                {link.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
