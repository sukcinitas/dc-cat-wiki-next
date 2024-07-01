import React from "react";

import "@/sass/ErrorMessage.scss";

export default function ErrorMessage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <p className="error-message">{children}</p>;
}
