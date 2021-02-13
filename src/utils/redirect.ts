/**
 * Open the desktop application with the payload
 */
export const openDesktop = (payload: { token: string; email: string; name: string }) => {
  const link = document.createElement("a");
  link.href = `actuallycolab://token=${payload.token}&email=${payload.email}&name=${payload.name}`;
  document.body.appendChild(link);
  link.click();
};
