"use server";

import { CatBreedSearchedData } from "./types";

export async function fetchPopularCats() {
  try {
    const result = await fetch(process.env.BASE_URL + "/api/cats");
    const cats = await result.json();
    const sorted = cats.mostPopularBreeds.sort(
      (a: CatBreedSearchedData, b: CatBreedSearchedData) =>
        b.searched - a.searched
    );
    return sorted;
  } catch (err: unknown) {
    console.error(err);
  }
}

export async function fetchCatBreed(breedId: string) {
  try {
    const result = await fetch(
      process.env.BASE_URL + `/api/cats/images?breedId=${breedId}&limit=9`
    );
    const cat = await result.json();
    return cat;
  } catch (err) {
    console.error(err);
  }
}

export async function searchCatBreeds(searchQuery: string) {
  try {
    const result = await fetch(
      process.env.BASE_URL +
        `/api/cats/search?q=${searchQuery === "all" ? "" : searchQuery}`
    );
    const { searchList } = await result.json();
    return searchList;
  } catch (err) {
    console.error(err);
  }
}
