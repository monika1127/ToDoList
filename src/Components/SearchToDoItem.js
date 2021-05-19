import { Input } from "@theme-ui/components";
import React from "react";
import { useRecoilState } from "recoil";
import { searchedState } from "../recoil/recoil";

const SearchToDoItem = () => {
  const [searchValue, setSearchValue] = useRecoilState(searchedState);

  return (
    <Input
      type="text"
      placeholder="search task"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};

export default SearchToDoItem;
