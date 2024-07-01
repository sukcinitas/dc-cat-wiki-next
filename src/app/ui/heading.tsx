import React from "react";

import "@/sass/Heading.scss";

interface HeadingProps {
  children: React.ReactNode;
  type?: string;
}

export default function Heading({ children, type }: HeadingProps) {
  let heading;
  if (type === "small") {
    heading = <h4 className="heading heading--small">{children}</h4>;
  } else if (type === "small-bold") {
    heading = <h2 className="heading heading--small-bold">{children}</h2>;
  } else if (type === "with-line") {
    heading = <h2 className="heading heading--with-line">{children}</h2>;
  } else {
    heading = <h2 className="heading">{children}</h2>;
  }
  return heading;
}
