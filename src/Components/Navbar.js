import React from "react";
import {Link} from 'react-router-dom'
import { todoListStatsState } from "../recoil/recoil";
import { useRecoilValue } from "recoil";
import { ReactComponent as FilterIcon } from "../assets/filter.svg";
import { ReactComponent as PencilIcon } from "../assets/pencil.svg";

const Navbar = () => {
  const { totalCompletedNum, totalUncompletedNum } =
    useRecoilValue(todoListStatsState);
  return (
    <div className="navbar">
      <div className="navbar__header">ToDos</div>
      <div>
        <Link to='/search'>
          <FilterIcon width={24} height={24} />
        </Link>
        <Link to='/add-todo'>
          <PencilIcon width={24} height={24} />
        </Link>
      </div>
      <div className="navbar__counters">
        <div className="navbar__counter">
          <span>{totalCompletedNum}</span> done
        </div>
        <div className="navbar__counter">
          <span>{totalUncompletedNum}</span> to be done
        </div>
      </div>
    </div>
  );
};

export default Navbar;
