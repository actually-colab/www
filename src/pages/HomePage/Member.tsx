import React from "react";
import { StyleSheet, css } from "aphrodite";

import { palette, spacing } from "../../constants/theme";
import { MediaQueryContext } from "../../contexts";
import { GradientBorderContainer } from "../../components";

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.DEFAULT,
    marginLeft: spacing.DEFAULT * 2,
    marginRight: spacing.DEFAULT * 2,
  },
  member: {
    width: 200,
    padding: spacing.DEFAULT,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    borderRadius: 6,
    backgroundColor: palette.BASE,
  },
  memberMobile: {},
  memberImage: {
    width: 120,
    marginRight: spacing.DEFAULT,
    borderRadius: 20 - spacing.DEFAULT / 2,
  },
  memberImageMobile: {},
  textContainer: {
    marginTop: spacing.DEFAULT / 2,
  },
  name: {
    color: "black",
  },
  description: {
    color: palette.GRAY,
  },
});

/**
 * A member profile
 */
const Member: React.FC<{ name: string; description: string; image: string; link: string }> = ({
  name,
  description,
  image,
  link,
}) => {
  const { isMobile } = React.useContext(MediaQueryContext);

  return (
    <a className={css(styles.container)} href={link}>
      <GradientBorderContainer>
        <div className={css(styles.member, isMobile && styles.memberMobile)}>
          <img className={css(styles.memberImage, isMobile && styles.memberImageMobile)} src={image} alt={name} />

          <div className={css(styles.textContainer)}>
            <h6 className={css(styles.name)}>{name}</h6>
            <p className={css(styles.description)}>{description}</p>
          </div>
        </div>
      </GradientBorderContainer>
    </a>
  );
};

export default Member;
