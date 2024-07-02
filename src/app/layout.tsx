import type { Metadata } from "next";

import Header from "./ui/header";
import Footer from "./ui/footer";
import "@/sass/App.scss";
import "@/sass/Button.scss";

export const metadata: Metadata = {
  title: "Cats Wiki",
  description: "Information about cat breeds at your hands",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <div className="main">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
