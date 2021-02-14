export type DesktopRedirectPayload = {
  token: string;
};

/**
 * Open the desktop application with the payload
 */
export const openDesktop = (payload: DesktopRedirectPayload) => {
  const link = document.createElement("a");
  link.href = `actuallycolab://token=${payload.token}`;
  document.body.appendChild(link);
  link.click();
};
