import React from "react";
import Image from "next/image";
import Link from "next/link";

import Heading from "./heading";
import Paragraph from "./paragraph";
import "@/sass/CatCard.scss";
import sizes from "../lib/util/sizes";

interface CatCardProps {
  id: string;
  index: number;
  url: string;
  name: string;
  description: string;
}

const CatCard = ({ id, index, url, name, description }: CatCardProps) => {
  return (
    <div className="cat-card">
      <Link
        href={`/breed/${id}`}
        className="cat-card__image cat-card__image-btn relative"
      >
        <Image src={url} alt="cat" fill={true} sizes={sizes[0]} />
      </Link>
      <div className="cat-card__info">
        <Heading type="small">
          <Link href={`/breed/${id}`}>{`${index}. ${name}`}</Link>
        </Heading>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
};

export default CatCard;
