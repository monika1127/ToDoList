import React from "react";
import { Link } from "react-router-dom";
import { todoListStatsState, filterState } from "../recoil/recoil";
import { useRecoilValue, useRecoilState } from "recoil";
import { ReactComponent as FilterIcon } from "../assets/filter.svg";
import { ReactComponent as PencilIcon } from "../assets/pencil.svg";
import { ReactComponent as SearchIcon } from "../assets/search.svg";

const Navbar = () => {
  const { totalCompletedNum, totalUncompletedNum } =
    useRecoilValue(todoListStatsState);

  const [listOption, setListOption] = useRecoilState(filterState);

  const handleClick = () => {
    setListOption(() => !listOption);
  };

  return (
    <div className="navbar">
      <div className="navbar__header">ToDos</div>
      <div>
        <Link to="/search">
          <PencilIcon width={24} height={24} />
        </Link>
        <Link to="/add-todo">
          <SearchIcon width={24} height={24} />
        </Link>
        <FilterIcon width={24} height={24} onClick={handleClick} />
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
