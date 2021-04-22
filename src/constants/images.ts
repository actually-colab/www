const urlify = (image: string) =>
  `${process.env.NODE_ENV === "development" ? "http://localhost:4000" : "https://actuallycolab.org"}/images/${image}`;

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
