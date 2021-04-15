/**
 * The link to the project github page
 */
export const GITHUB_URI = "https://github.com/actually-colab";

/**
 * The link to the youtube demo video
 */
export const YOUTUBE_URI = "https://www.youtube.com/watch?v=ParNlHsbSrY";

/**
 * The link to the Hack Illinois devpost
 */
export const DEVPOST_URI = "https://devpost.com/software/actually-colab-real-time-collaborative-jupyter-editor";

/**
 * Open a link in a new tab
 */
export const openLink = (link: string): void => {
  window.open(link, "_blank");
};

export const openGithub = (): void => openLink(GITHUB_URI);

export const openYoutube = (): void => openLink(YOUTUBE_URI);

export const openDevpost = (): void => openLink(DEVPOST_URI);
