import React, { ChangeEvent } from "react";
import { withWelcomeMessage } from "../hoc/withWelcomeMessage";

interface SearchFilterProps {
  onSearchChange: (searchTerm: string) => void;
  searchValue: string;
}

export const SearchFilter = React.memo(
  withWelcomeMessage(function SearchFilter({
    onSearchChange,
    searchValue,
  }: SearchFilterProps) {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      onSearchChange(event.target.value);
    };

    return (
      <input
        type="search"
        placeholder="Search for posts"
        className="form-control"
        value={searchValue}
        onChange={handleChange}
      ></input>
    );
  })
);
