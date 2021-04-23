const urlify = (image: string) => `/images/${image}`;

export const FEATURES = {
  chat: urlify("features/chat.png"),
  kernelGateway: urlify("features/gateway.png"),
  importNotebook: urlify("features/import.png"),
  outputs: urlify("features/outputs.png"),
  share: urlify("features/share.png"),
};

export const SCREENSHOTS = {
  main: urlify("screenshots/main.png"),
};

export const LOGOS = {
  netlify: urlify("logos/netlify.png"),
  sentry: urlify("logos/sentry.png"),
};
