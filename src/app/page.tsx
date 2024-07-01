import React from "react";

import InfoCard from "./ui/info-card";
import MainCard from "./ui/main-card";
import { mapCatImageNameInfo } from "./lib/util/mapInfo";
import { fetchPopularCats, searchCatBreeds } from "./lib/data";

export default async function HomePage({
  searchParams,
}: Readonly<{
  searchParams: { search?: string };
}>) {
  const cats = await fetchPopularCats();
  const mapped = mapCatImageNameInfo(cats);

  const searchQuery = searchParams?.search ?? "";
  const searchList = await searchCatBreeds(searchQuery);

  return (
    <div className="home-page">
      <MainCard data={mapped} searchList={searchList} />
      <InfoCard />
    </div>
  );
}
