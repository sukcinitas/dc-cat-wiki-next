"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import "@/sass/SearchBar.scss";
import Button from "./button";

export default function SearchBar({
  searchList,
}: Readonly<{
  searchList: { name: string; id: string }[];
}>) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  const handleSearch = (term: string): void => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const nameList = searchList.map(
    (cat: { name: string; id: string }): React.ReactElement => (
      <li key={cat.id} className="search__item">
        <Link href={`/breed/${cat.id}`}>{cat.name}</Link>
      </li>
    )
  );

  const findCat = () => {
    const searchQuery = searchParams.get("search")?.toLowerCase() ?? "";
    const cat = searchList.find((cat) =>
      cat.name.toLowerCase().includes(searchQuery)
    );
    return cat?.id ?? "";
  };

  return (
    <div className="search">
      {/* Desktop view */}
      <form
        className="search__bar"
        onSubmit={() => router.push(`/breed/${findCat()}`)}
      >
        <input
          className="modal__bar-input search__bar-input"
          type="text"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          placeholder="Enter your breed"
          defaultValue={searchParams.get("search")?.toString()}
        />
        <span className="material-icons search__icon">search</span>
      </form>
      <div
        className={`search__panel ${
          searchParams.get("search") ? "search__panel--visible" : ""
        }`}
      >
        {nameList.length > 0 && <ul className="search__list">{nameList}</ul>}
      </div>

      {/* Mobile view */}
      <Button classes={["search__button"]} cb={() => setModalOpen(true)}>
        <span>Search</span>
        <span className="material-icons search__button-icon">search</span>
      </Button>

      <div className={modalOpen ? "modal" : "modal--hidden"}>
        <Button cb={() => setModalOpen(false)} classes={["modal__btn"]}>
          <span className="material-icons search__icon--close modal__icon--close">
            close
          </span>
        </Button>

        <form className="modal__bar search__bar">
          <input
            className="modal__bar-input search__bar-input"
            type="text"
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            placeholder="Enter your breed"
            defaultValue={searchParams.get("search")?.toString()}
          />
          <Button type="submit" classes={["modal__icon search__icon"]}>
            <span className="material-icons">search</span>
          </Button>
        </form>

        <div className="modal__panel search__panel">
          {nameList.length > 0 && searchParams.get("search") && modalOpen && (
            <ul className="modal__list search__list">{nameList}</ul>
          )}
        </div>
      </div>
    </div>
  );
}
