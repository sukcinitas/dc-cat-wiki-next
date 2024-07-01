import React from "react";
import Image from "next/image";

import image from "../../../public/CatwikiLogoWhite.svg";
import "@/sass/Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Image src={image} alt="Title CatWiki and a cat beside" />
      </div>
      <p className="footer__content">
        <span className="footer__icon">&#169;</span> created by{" "}
        <a
          className="footer__link"
          href="https://github.com/sukcinitas"
          target="_blank"
          rel="noreferrer noopener"
        >
          <b className="underline">sukcinitas</b>
        </a>
        {" - "}
        <a
          className="footer__link footer__link--not-underlined"
          href="https://devchallenges.io"
          target="_blank"
          rel="noreferrer noopener"
        >
          devChallenges.io 2021
        </a>
      </p>
    </footer>
  );
}
