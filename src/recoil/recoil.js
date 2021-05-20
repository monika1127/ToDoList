import { atom, selector } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export const searchedState = atom({
  key: "todoListSearchedState",
  default: "",
});

export const filterState = atom({
  key: "filterState",
  default: true,
});

export const filteredToDoList = selector({
  key: "filteredToDos",
  get: ({ get }) => {
    const list = get(todoListState);
    const searchedValue = get(searchedState);
    const filter = get(filterState);

    if (filter) {
      return list
        .filter((i) => i.title.includes(searchedValue) && !i.completed)
        .sort((a, b) => {
          if (!a.completed && b.completed) return -1;
          else return 0;
        });
    } else
      return list
        .filter((i) => i.title.includes(searchedValue))
        .sort((a, b) => {
          if (!a.completed && b.completed) return -1;
          else return 0;
        });
  },
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.completed).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
    };
  },
});
