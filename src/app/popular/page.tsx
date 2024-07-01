import React from "react";
import Heading from "../ui/heading";
import { fetchPopularCats } from "../lib/data";
import { CatBreedSearchedData } from "../lib/types";
import CatCard from "../ui/cat-card";

export default async function PopularCatsPage() {
  const popularCats = await fetchPopularCats();

  const list = popularCats.map((cat: CatBreedSearchedData, index: number) => (
    <CatCard
      key={cat.id}
      id={cat.id}
      index={index + 1}
      name={cat.name}
      description={cat.description}
      url={cat.image.url}
    />
  ));

  return (
    <div className="popular-cats-page">
      <Heading type="small-bold">Top 10 most searched breeds</Heading>
      {list}
    </div>
  );
}
