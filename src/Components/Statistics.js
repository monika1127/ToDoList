import React from "react";
import { todoListStatsState } from "../recoil/recoil";
import { useRecoilValue } from "recoil";

import { Box, Flex, Text } from "@theme-ui/components";

const Navbar = () => {
  const { totalCompletedNum, totalUncompletedNum } =
    useRecoilValue(todoListStatsState);

  return (
    <Flex>
      <Flex
      m={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Flex
          bg="secondaryLight"
          sx={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text >{totalCompletedNum}</Text>
        </Flex>
        <Text m={2}>DONE</Text>
      </Flex>
      <Flex
            m={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Flex
          bg="secondaryLight"
          sx={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>{totalUncompletedNum}</Text>
        </Flex>
          <Text m={2}>TO BE DONE</Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
