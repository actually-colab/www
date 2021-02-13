import React from "react";
import { StyleSheet, css } from "aphrodite";
import { GoogleLoginResponse } from "react-google-login";

import { GoogleSignInButton } from "../components";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

const LoginPage: React.FC = () => {
  const onGoogleSignInSuccess = React.useCallback((payload: GoogleLoginResponse) => {
    console.log(payload);
  }, []);

  const onGoogleSignInFailure = React.useCallback((error: any) => {
    console.log(error);
  }, []);

  return (
    <div className={css(styles.container)}>
      <GoogleSignInButton onSuccess={onGoogleSignInSuccess} onFailure={onGoogleSignInFailure} />
    </div>
  );
};

export default LoginPage;