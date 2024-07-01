import React from "react";
import Link from "next/link";

import "@/sass/Button.scss";

const LinkButton = ({
  href,
  children,
  classes = [],
}: {
  href: string;
  children: React.ReactNode;
  classes?: string[];
}) => (
  <span className={`${["btn", ...classes].join(" ")}`}>
    <Link href={href}>
      {children}
      {/* TODO: */}
      {/* <span className="material-icons btn__icon">arrow_right_alt</span> */}
    </Link>
  </span>
);

export default LinkButton;
