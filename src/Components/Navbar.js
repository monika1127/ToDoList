import React from "react";
import { todoListStatsState } from "../recoil/recoil";
import {useRecoilValue} from "recoil"

const Navbar = () => {
  const { totalCompletedNum, totalUncompletedNum } =
    useRecoilValue(todoListStatsState);
  return (
    <div className="navbar">
      <div className="navbar__header">ToDos</div>
      <div className="navbar__counters">
        <div className="navbar__counter">
          <span>{totalCompletedNum}</span> done
        </div>
        <div className="navbar__counter"><span>{totalUncompletedNum}</span> to be done</div>
      </div>
    </div>
  );
};

export default Navbar;
