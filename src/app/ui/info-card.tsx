import React from "react";
import Image from "next/image";

import Heading from "./heading";
import Paragraph from "./paragraph";
import LinkButton from "./link-button";
import image1 from "../../../public/image 1.png";
import image2 from "../../../public/image 2.png";
import image3 from "../../../public/image 3.png";
import "@/sass/InfoCard.scss";

export default function InfoCard() {
  return (
    <div className="info-card">
      <section className="info-card__info">
        <Heading type="with-line">Why should you have a cat?</Heading>
        <Paragraph>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety levels
        </Paragraph>
        <LinkButton href="/about">Read more</LinkButton>
      </section>
      <div className="info-card__pic-wrapper">
        <div className="info-card__pic--1">
          <Image
            src={image2}
            alt="cat"
            style={{ maxHeight: "168px", width: "auto", float: "right" }}
          />
        </div>
      </div>
      <div className="info-card__pic-wrapper">
        <div className="info-card__pic--2">
          <Image
            src={image3}
            alt="cat"
            style={{ maxHeight: "385px", width: "auto" }}
          />
        </div>
      </div>
      <div className="info-card__pic-wrapper">
        <div className="info-card__pic--3">
          <Image
            src={image1}
            alt="cat"
            style={{ maxHeight: "294px", width: "auto", float: "right" }}
          />
        </div>
      </div>
    </div>
  );
}
