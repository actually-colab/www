export const openDesktop = (token: string) => {
  const link = document.createElement("a");
  link.href = `actuallycolab://token=${token}`;
  document.body.appendChild(link);
  link.click();
};
