import React from "react";
import { StyleSheet, css } from "aphrodite";
import { GoogleLoginResponse } from "react-google-login";

import { DesktopRedirectPayload, openDesktop } from "../utils/redirect";
import { GoogleSignInButton } from "../components";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  signInContainerBackground: {
    width: 512,
    background: "-webkit-linear-gradient(top left, #f55673, #E2CC52)",
    borderRadius: 20
  },
  signInContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
    padding: 40,
    borderRadius: 16,
    backgroundColor: "white"
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    background: "-webkit-linear-gradient(top left, #f55673, #E2CC52)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent"
  },
  redirectText: {
    textAlign: "center",
    color: "#8C8A93",
    cursor: "pointer"
  },
  hereText: {
    color: "#f55673"
  }
});

const LoginPage: React.FC = () => {
  const [redirectPayload, setRedirectPayload] = React.useState<DesktopRedirectPayload | null>(null);

  const onGoogleSignInSuccess = React.useCallback((payload: GoogleLoginResponse) => {
    const minimalPayload: DesktopRedirectPayload = {
      token: payload.tokenId
    };

    setRedirectPayload(minimalPayload);
    openDesktop(minimalPayload);
  }, []);

  const onGoogleSignInFailure = React.useCallback((error: any) => {
    console.log(error);
  }, []);

  return (
    <div className={css(styles.container)}>
      <div className={css(styles.signInContainerBackground)}>
        <div className={css(styles.signInContainer)}>
          <span className={css(styles.title)}>actually colab</span>
          <p>just sign in with Google and we'll take care of the rest</p>

          {redirectPayload !== null ? (
            <p className={css(styles.redirectText)} onClick={() => openDesktop(redirectPayload)}>
              click <span className={css(styles.hereText)}>here</span> if you aren't redirected automatically
            </p>
          ) : (
            <div>
              <GoogleSignInButton onSuccess={onGoogleSignInSuccess} onFailure={onGoogleSignInFailure} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
