/**
 * The link to the project github page
 */
export const GITHUB_URI = "https://github.com/actually-colab";

/**
 * The link to the desktop github page
 */
export const GITHUB_DESKTOP_URI = `${GITHUB_URI}/desktop`;

/**
 * The link to the youtube demo video
 */
export const YOUTUBE_URI = "https://www.youtube.com/watch?v=ParNlHsbSrY";

/**
 * The link to the Hack Illinois devpost
 */
export const DEVPOST_URI = "https://devpost.com/software/actually-colab-real-time-collaborative-jupyter-editor";

/**
 * The link to the blog
 */
export const BLOG_URI = "https://docs.actuallycolab.org/blog/";

/**
 * The link to the docs
 */
export const DOCS_URI = "https://docs.actuallycolab.org/docs/";

/**
 * The link to the patreon account
 */
export const PATREON_URI = "https://www.patreon.com/actuallycolab";

/**
 * Open a link in a new tab
 */
export const openLink = (link: string): void => {
  window.open(link, "_blank");
};

export const openGithub = (): void => openLink(GITHUB_URI);

export const openGithubDesktop = (): void => openLink(GITHUB_DESKTOP_URI);

export const openYoutube = (): void => openLink(YOUTUBE_URI);

export const openDevpost = (): void => openLink(DEVPOST_URI);

export const openPatreon = (): void => openLink(PATREON_URI);
