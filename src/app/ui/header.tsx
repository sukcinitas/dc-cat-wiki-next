import React from "react";
import Image from "next/image";
import Link from "next/link";

import image from "../../../public/CatwikiLogo.svg";
import "@/sass/Header.scss";

export default function Header() {
  return (
    <header className="header">
      <Link href={"/"} className="header__logo">
        <Image
          src={image}
          alt="Title CatWiki and a cat beside"
          priority={true}
        />
      </Link>
    </header>
  );
}
