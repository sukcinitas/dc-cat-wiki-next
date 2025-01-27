import React from "react";
import Image from "next/image";

import Heading from "./heading";
import Paragraph from "./paragraph";
import CatInfoCardTable from "./cat-info-card-table";
import "@/sass/CatInfoCard.scss";
import sizes from "../lib/util/sizes";

type TCatInfoCardProps = {
  catInfo: {
    name: string;
    description: string;
    url: string;
    qualities: {
      textQualities: {
        temperament: string;
        origin: string;
        life_span: string;
      };
      numberQualities: {
        adaptability: number;
        affection_level: number;
        child_friendly: number;
        grooming: number;
        intelligence: number;
        health_issues: number;
        social_needs: number;
        stranger_friendly: number;
      };
    };
  };
};

const CatInfoCard = ({
  catInfo: { name, description, url, qualities },
}: TCatInfoCardProps) => {
  return (
    <section className="cat-info-card">
      <div className="cat-info-card__photo-wrapper">
        <div className="relative cat-info-card__photo">
          <Image
            src={url}
            alt="cat"
            fill={true}
            sizes={sizes[0]}
            priority={true}
          />
        </div>
        <span className="cat-info-card__detail"></span>
      </div>
      <div className="cat-info-card__table">
        <Heading type="small">{name}</Heading>
        <Paragraph>{description}</Paragraph>
        <CatInfoCardTable qualities={qualities} />
      </div>
    </section>
  );
};

export default CatInfoCard;
