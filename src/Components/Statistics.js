import React from "react";
import { useRecoilValue } from "recoil";
import { Box, Flex, Text, Container } from "@theme-ui/components";
import { todoListStatsState } from "../recoil/recoil";

const Navbar = () => {
  const { totalCompletedNum, totalUncompletedNum } =
    useRecoilValue(todoListStatsState);

  return (
    <Flex sx={{ justifyContent: "flex-end", width: "auto" }}>
      <Container variant="statistic">
        <Container variant="circle">
          <Box sx={{ fontWeight: "bold", color: "white", fontSize: 3 }}>
            {totalCompletedNum}
          </Box>
        </Container>
        <Text sx={{ flex: "1", px: 1 }}>DONE</Text>
      </Container>
      <Container variant="statistic">
        <Container variant="circle">
          <Box sx={{ fontWeight: "bold", color: "white", fontSize: 3 }}>
            {totalUncompletedNum}
          </Box>
        </Container>
        <Text sx={{ flex: "1", px: 1 }}>TO BE DONE</Text>
      </Container>
    </Flex>
  );
};

export default Navbar;
