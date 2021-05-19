import React, {useState} from 'react'
import Button from '../Components/Button'
import { useRecoilState } from "recoil";
import { searchedState } from "../recoil/recoil";

const SearchToDoItem = () => {
     const [searchValue, setSearchValue] = useRecoilState(searchedState);

    return (
        <div className="new-item__container">
        <input
          type="text"
          placeholder="search task"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

      </div>
    );
}

export default SearchToDoItem
