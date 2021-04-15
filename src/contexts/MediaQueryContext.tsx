import React from "react";

const MediaQueryContext = React.createContext<{
  isMobile: boolean;
  isWide: boolean;
}>({
  isMobile: false,
  isWide: false,
});

export default MediaQueryContext;
