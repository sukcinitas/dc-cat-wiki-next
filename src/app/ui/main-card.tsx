import React from "react";
import Image from "next/image";
import Link from "next/link";

import SearchBar from "./search-bar";
import Heading from "./heading";
import "@/sass/MainCard.scss";
import image from "../../../public/CatwikiLogoWhite.svg";
import LinkButton from "./link-button";
import sizes from "../lib/util/sizes";

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
            <Image
              src={cat.url}
              alt="cat"
              fill={true}
              sizes="(max-width: 620px) 100vw, (max-width: 1060px) 50vw, (max-width: 1260px) 33vw, 25vw"
            />
          </div>
        </Link>
      </div>
      <p className="main-card__cat-row-text">{cat.name}</p>
    </div>
  ));

  return (
    <div className="main-card">
      <section className="main-card__top-section">
        <div className="main-card__logo relative">
          <Image
            src={image}
            alt="cat"
            fill={true}
            priority={true}
            sizes={sizes[0]}
          />
        </div>
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
