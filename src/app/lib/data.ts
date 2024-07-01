import axios from "axios";
import { CatBreedSearchedData } from "./types";

export async function fetchPopularCats() {
  try {
    const cats = await axios.get("/api/cats");
    const sorted = cats.data.mostPopularBreeds?.sort(
      (a: CatBreedSearchedData, b: CatBreedSearchedData) =>
        b.searched - a.searched
    );
    return sorted;
  } catch (err: unknown) {
    console.log(err);
  }
}

export async function fetchCatBreed(breedId: string) {
  try {
    const cat = await axios.get(`/api/cats/images?breedId=${breedId}&limit=9`);
    return cat.data;
  } catch (err) {}
}

export async function searchCatBreeds(searchQuery: string) {
  try {
    const {
      data: { searchList },
    } = await axios.get(
      `/api/cats/search?q=${searchQuery === "all" ? "" : searchQuery}`
    );
    return searchList;
  } catch (err) {
    console.log(err, "err in search");
    return [];
  }
}
