import React from "react";

import { fetchCatBreed } from "@/app/lib/data";
import { CatInfo } from "@/app/lib/types";
import CatInfoCard from "@/app/ui/cat-info-card";
import OtherPhotos from "@/app/ui/other-photos";
import { mapCatImageInfo, mapCatInfo } from "@/app/lib/util/mapInfo";

export default async function CatPage({
  params,
}: Readonly<{
  params: { breed: string };
}>) {
  const { breed } = params;
  const cat = await fetchCatBreed(breed);
  const catInfo: CatInfo = cat.catInfo?.[0]
    ? mapCatInfo(cat.catInfo?.[0])
    : {
        url: "",
        name: "",
        description: "",
        qualities: {
          textQualities: {
            temperament: "",
            origin: "",
            life_span: "",
          },
          numberQualities: {
            adaptability: 0,
            affection_level: 0,
            child_friendly: 0,
            grooming: 0,
            intelligence: 0,
            health_issues: 0,
            social_needs: 0,
            stranger_friendly: 0,
          },
        },
      };
  const catImageInfo: Array<string> = cat?.catInfo
    ? mapCatImageInfo(cat?.catInfo)
    : [];

  return (
    <div className="cat-paeg">
      <CatInfoCard catInfo={catInfo} />
      <OtherPhotos catImageInfo={catImageInfo} />
    </div>
  );
}
