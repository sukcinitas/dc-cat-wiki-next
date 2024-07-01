import React from "react";

import "@/sass/Paragraph.scss";

export default function Paragraph({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <p className="paragraph">{children}</p>;
}
