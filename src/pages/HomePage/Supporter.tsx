import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Tooltip, Whisper } from "rsuite";

import { spacing } from "../../constants/theme";
import { MediaQueryContext } from "../../contexts";

const styles = StyleSheet.create({
  supporter: {
    maxWidth: 100,
    maxHeight: 100,
    marginLeft: spacing.DEFAULT / 2,
    marginRight: spacing.DEFAULT / 2,
    marginBottom: spacing.DEFAULT,
  },
  supporterMobile: {
    maxWidth: 80,
    maxHeight: 80,
  },
  logo: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    filter: "invert(90%)",
  },
  logoMobile: {},
});

/**
 * A sponsor or supporter that helps the project operate either fiscally or with tools
 */
const Supporter: React.FC<{ name: string; tooltip: string; link: string; image: string }> = ({
  name,
  tooltip,
  link,
  image,
}) => {
  const { isMobile } = React.useContext(MediaQueryContext);

  return (
    <Whisper trigger="hover" placement="bottom" delay={500} speaker={<Tooltip>{tooltip}</Tooltip>}>
      <a href={link} target="_blank" rel="noreferrer">
        <div className={css(styles.supporter, isMobile && styles.supporterMobile)}>
          <img className={css(styles.logo, isMobile && styles.logoMobile)} src={image} alt={name} />
        </div>
      </a>
    </Whisper>
  );
};

export default Supporter;
