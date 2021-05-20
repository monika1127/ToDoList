import { Input, Container, Text, Flex } from "@theme-ui/components";
import React from "react";
import { useRecoilState } from "recoil";
import { searchedState } from "../recoil/recoil";
import { ReactComponent as SearchIcon } from "../assets/search.svg";

const SearchToDoItem = () => {
  const [searchValue, setSearchValue] = useRecoilState(searchedState);

  return (
    <Container variant="body">
      <Flex sx={{alignItems: "center", color: 'primary'}}>
        <SearchIcon width={20} height={20} />
        <Text variant="header" sx={{px: 2}}>Search task:</Text>
      </Flex>
      <Input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        sx={{
          border: "1px solid",
          borderBottom: "3px solid",
          borderColor: "primary",
          outline: "none",
          '&:focus': {
            borderColor: "secondary",
          }
        }}
      />
    </Container>
  );
};

export default SearchToDoItem;
