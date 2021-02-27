export type DesktopRedirectPayload = {
  token: string;
};

/**
 * Open the desktop application with the payload
 */
export const openDesktop = (payload: DesktopRedirectPayload) => {
  window.open(`actuallycolab://token=${payload.token}`, "_self");
};
