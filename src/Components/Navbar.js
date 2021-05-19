import React from "react";
import { Link } from "react-router-dom";
import { todoListStatsState, filterState } from "../recoil/recoil";
import { useRecoilValue, useRecoilState } from "recoil";
import { ReactComponent as FilterIcon } from "../assets/filter.svg";
import { ReactComponent as PencilIcon } from "../assets/pencil.svg";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { Box, Flex, Heading } from "@theme-ui/components";

const Navbar = () => {
  const { totalCompletedNum, totalUncompletedNum } =
    useRecoilValue(todoListStatsState);

  const [listOption, setListOption] = useRecoilState(filterState);

  const handleClick = () => {
    setListOption(() => !listOption);
  };

  return (
    <Flex as="nav">
      <Heading>ToDos</Heading>
      <Flex>
        <Box>
          <Link to="/search">
            <PencilIcon width={24} height={24} />
          </Link>
          <Link to="/add-todo">
            <SearchIcon width={24} height={24} />
          </Link>
          <FilterIcon width={24} height={24} onClick={handleClick} />
        </Box>
        <Box>
          <Box>
            <span>{totalCompletedNum}</span> done
          </Box>
          <Box>
            <span>{totalUncompletedNum}</span> to be done
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
