import React from "react";

export const FeedWrapper = ({ children }: React.PropsWithChildren) => {
  return <div className="relative top-0 flex-1 pb-10">{children}</div>;
};
