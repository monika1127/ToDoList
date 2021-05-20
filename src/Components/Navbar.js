import React from "react";
import { Link } from "react-router-dom";
import { Flex, IconButton, Text, Box } from "@theme-ui/components";
import { useRecoilState } from "recoil";
import { filterState } from "../recoil/recoil";
import { ReactComponent as FilterIcon } from "../assets/filter.svg";
import { ReactComponent as PencilIcon } from "../assets/pencil.svg";
import { ReactComponent as SearchIcon } from "../assets/search.svg";

const Navbar = () => {
  const [listOption, setListOption] = useRecoilState(filterState);

  const handleClick = () => {
    setListOption(() => !listOption);
  };

  return (
    <Flex
      as="nav"
      bg="secondary"
      sx={{ justifyContent: "space-between", alignItems: "center" }}
    >
      <Text variant="nav" m={3}>
        ToDos
      </Text>
      <Flex>
        <Box sx={{ m: 2 }}>
          <Link to="/add-todo">
            <IconButton variant="nav">
              <PencilIcon width={24} height={24} color="white" />
            </IconButton>
          </Link>
        </Box>
        <Box sx={{ m: 2 }}>
          <Link to="/search">
            <IconButton variant="nav">
              <SearchIcon width={24} height={24} color="white" />
            </IconButton>
          </Link>
        </Box>
        <Box sx={{m:2}}>
        <IconButton variant="nav" onClick={handleClick}>
          <FilterIcon width={24} height={24}  />
        </IconButton>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
