import React from "react";
import Image from "next/image";
import Link from "next/link";

import SearchBar from "./search-bar";
import Heading from "./heading";
import "@/sass/MainCard.scss";
import image from "../../../public/CatwikiLogoWhite.svg";
import imageSmall from "../../../public/CatwikiLogoSmall.svg";
import LinkButton from "./link-button";

interface CatInfo {
  id: string;
  name: string;
  url: string;
}

export default async function MainCard({
  data,
  searchList,
}: Readonly<{
  data: Array<CatInfo>;
  searchList: any;
}>) {
  const list = data.map((cat: CatInfo) => (
    <div key={cat.id} className="main-card__cat-row-element">
      <div className="main-card__cat-row-wrapper">
        <span className="main-card__cat-row-detail"></span>
        <Link href={`/breed/${cat.id}`} className="relative">
          <div className="main-card__cat-row-image">
            <Image src={cat.url} alt="cat" layout="fill" />
          </div>
        </Link>
      </div>
      <p className="main-card__cat-row-text">{cat.name}</p>
    </div>
  ));

  return (
    <div className="main-card">
      <section className="main-card__top-section">
        <picture>
          <source media="(min-width:550px)" srcSet={image} />
          <source media="(min-width:0px)" srcSet={imageSmall} />
          <div className="main-card__logo relative">
            <Image src={image} alt="cat" fill={true} />
          </div>
        </picture>
        <p className="main-card__text">Get to know more about your cat breed</p>
        <SearchBar searchList={searchList} />
      </section>
      <section className="main-card__bottom-section">
        <p className="main-card__additional">Most Searched Breeds</p>
        <div className="main-card__wrapper">
          <Heading>66+ Breeds for you to discover</Heading>
          <LinkButton href="/popular">See more</LinkButton>
        </div>
        <div className="main-card__cat-row">{list}</div>
      </section>
    </div>
  );
}
