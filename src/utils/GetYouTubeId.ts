export const getYouTubeId = (url?: string) => {
  if (typeof url === "string") {
    const urlObject = new URL(url);
    const videoId = urlObject.searchParams.get("v");

    if (videoId) {
      return videoId;
    }

    const pathnameParts = urlObject.pathname.split("/");
    if (pathnameParts[1] === "embed") {
      return pathnameParts[2] || undefined;
    }
    if (pathnameParts[1] === "shorts") {
      return pathnameParts[2] || undefined;
    }

    return undefined;
  } else {
    return undefined;
  }
};
