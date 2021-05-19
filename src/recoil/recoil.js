import {atom, selector} from 'recoil'

export const todoListState = atom({
    key: 'todoListState',
    default: [],
  });

 export const searchedState = atom({
    key: 'todoListSearchedState',
    default: '',
  });

  export const filteredToDoList = selector({
  key: 'filteredToDos',
  get: ({get})=> {
    const list = get(todoListState)
    const searchedValue = get(searchedState)

    if(searchedValue) return list.filter(i => i.title.includes(searchedValue))
    else return list
  }
})

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({get}) => {
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