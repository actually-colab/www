import React from "react";

const MediaQueryContext = React.createContext<{
  isMobile: boolean;
}>({
  isMobile: false,
});

export default MediaQueryContext;
