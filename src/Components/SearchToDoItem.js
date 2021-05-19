import { Input, Text } from "@theme-ui/components";
import React, { Fragment } from "react";
import { useRecoilState } from "recoil";
import { searchedState } from "../recoil/recoil";
import { ReactComponent as SearchIcon } from "../assets/search.svg";

const SearchToDoItem = () => {
  const [searchValue, setSearchValue] = useRecoilState(searchedState);

  return (
    <Fragment>
      <SearchIcon width={24} height={24} />
      <Text variant="header">Search task:</Text>
      <Input
        type="text"
        placeholder="search task"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </Fragment>
  );
};

export default SearchToDoItem;
