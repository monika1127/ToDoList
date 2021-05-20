import React from "react";
import { todoListStatsState } from "../recoil/recoil";
import { useRecoilValue } from "recoil";

import { Box, Flex, Text, Container } from "@theme-ui/components";

const Navbar = () => {
  const { totalCompletedNum, totalUncompletedNum } =
    useRecoilValue(todoListStatsState);

  return (
    <Flex sx={{justifyContent: "flex-end", width: "auto"}}>
     <Container variant="centered" sx={{width:"auto", m:0, p:2}}>
        <Container variant="circle">
          <Box sx={{fontWeight:"bold", color:"white", fontSize:3}}>{totalCompletedNum}</Box>
        </Container>
        <Text sx={{flex: "1", px:1}}>DONE</Text>
      </Container>
      <Container variant="centered" sx={{width:"auto", m:0, p:2}} >
        <Container variant="circle">
          <Box sx={{fontWeight:"bold", color:"white", fontSize:3}}>{totalUncompletedNum}</Box>
        </Container>
        <Text sx={{flex: "1",  px:1}}>TO BE DONE</Text>
      </Container>
    </Flex>
  );
};

export default Navbar;
