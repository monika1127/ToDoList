import React from "react";
import { Link } from "react-router-dom";
import { filterState } from "../recoil/recoil";
import { useRecoilState } from "recoil";
import { ReactComponent as FilterIcon } from "../assets/filter.svg";
import { ReactComponent as PencilIcon } from "../assets/pencil.svg";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { Flex, IconButton, Text } from "@theme-ui/components";
import {clickAnimation} from '../styles/keyframes'

const Navbar = () => {
  const [listOption, setListOption] = useRecoilState(filterState);

  const handleClick = () => {
    setListOption(() => !listOption);
  };

  return (
    <Flex as="nav" bg="secondary" sx={{ justifyContent: "space-between", alignItems:"center" }}>
      <Text variant="nav" m={3}>
        ToDos
      </Text>
      <Flex>
        <IconButton variant="nav" sx={{animation:`${clickAnimation} 0.5s linear infinite alternate`}}>
          <Link to="/add-todo">
            <PencilIcon width={24} height={24} color='white'/>
          </Link>
        </IconButton>
        <IconButton variant="nav">
          <Link to="/search">
            <SearchIcon width={24} height={24} color='white' />
          </Link>
        </IconButton>
        <IconButton variant="nav">
          <FilterIcon width={24} height={24} onClick={handleClick} />
        </IconButton>
      </Flex>
    </Flex>
  );
};

export default Navbar;
