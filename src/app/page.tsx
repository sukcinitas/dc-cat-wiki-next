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
  const searchQuery = searchParams?.search ?? "";
  const [cats, searchList] = await Promise.all([
    fetchPopularCats(),
    searchCatBreeds(searchQuery),
  ]);

  return (
    <div className="home-page">
      <MainCard
        data={mapCatImageNameInfo(cats)}
        searchList={searchList ?? []}
      />
      <InfoCard />
    </div>
  );
}
