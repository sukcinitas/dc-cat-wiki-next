import React from "react";

import { fetchCatBreed } from "@/app/lib/data";
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

  const catInfo = mapCatInfo(cat.catInfo?.[0]);
  const catImageInfo = mapCatImageInfo(cat?.catInfo);

  return (
    <div className="cat-page">
      <CatInfoCard catInfo={catInfo} />
      <OtherPhotos catImageInfo={catImageInfo} />
    </div>
  );
}
